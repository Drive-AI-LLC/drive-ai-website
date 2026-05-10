"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // --- House geometry (centered in canvas) ---
    const cx = () => canvas.width / 2
    const cy = () => canvas.height / 2

    // Shingle fragments flying off the roof
    interface Fragment {
      x: number; y: number
      vx: number; vy: number
      rotation: number; rotV: number
      life: number; maxLife: number
      w: number; h: number
    }
    const fragments: Fragment[] = []

    const spawnFragment = () => {
      const side = Math.random() < 0.5 ? -1 : 1
      const peakX = cx()
      const peakY = cy() - 120
      const roofW = 220
      // random point on one slope of the roof
      const t = Math.random()
      const sx = peakX + side * t * (roofW / 2)
      const sy = peakY + t * 120
      fragments.push({
        x: sx, y: sy,
        vx: side * (1.5 + Math.random() * 2.5),
        vy: -(1 + Math.random() * 2.5),
        rotation: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.18,
        life: 1,
        maxLife: 80 + Math.random() * 60,
        w: 14 + Math.random() * 14,
        h: 4 + Math.random() * 4,
      })
    }

    // Rain drops
    interface Drop { x: number; y: number; vy: number; len: number; life: number }
    const drops: Drop[] = []

    const spawnDrop = () => {
      drops.push({
        x: cx() - 180 + Math.random() * 360,
        y: cy() - 200 - Math.random() * 80,
        vy: 6 + Math.random() * 3,
        len: 12 + Math.random() * 10,
        life: 1,
      })
    }

    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const px = cx()
      const py = cy()
      const roofW = 220
      const roofH = 120
      const wallH = 110
      const wallW = roofW

      const peakX = px
      const peakY = py - roofH
      const eaveL = px - roofW / 2
      const eaveR = px + roofW / 2
      const eaveY = py
      const groundY = py + wallH

      const green = (a: number) => `rgba(22,163,74,${a})`

      // --- Rain ---
      frame % 3 === 0 && drops.length < 24 && spawnDrop()
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        ctx.strokeStyle = green(0.25 * d.life)
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 1, d.y + d.len)
        ctx.stroke()
        d.y += d.vy
        d.life -= 0.012
        if (d.y > groundY + 20 || d.life <= 0) drops.splice(i, 1)
      }

      // --- House body (walls) ---
      ctx.strokeStyle = green(0.18)
      ctx.lineWidth = 2
      ctx.strokeRect(eaveL, eaveY, wallW, wallH)

      // Door
      const dw = 24, dh = 38
      ctx.strokeStyle = green(0.2)
      ctx.strokeRect(px - dw / 2, groundY - dh, dw, dh)

      // Windows
      const winSize = 22
      ctx.strokeStyle = green(0.18)
      ctx.strokeRect(eaveL + 24, eaveY + 22, winSize, winSize)
      ctx.strokeRect(eaveR - 24 - winSize, eaveY + 22, winSize, winSize)

      // --- Roof slopes ---
      ctx.strokeStyle = green(0.55)
      ctx.lineWidth = 2.5
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      // Left slope
      ctx.beginPath()
      ctx.moveTo(eaveL, eaveY)
      ctx.lineTo(peakX, peakY)
      ctx.stroke()

      // Right slope
      ctx.beginPath()
      ctx.moveTo(eaveR, eaveY)
      ctx.lineTo(peakX, peakY)
      ctx.stroke()

      // Overhang (eave line) with slight extend
      ctx.strokeStyle = green(0.35)
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(eaveL - 12, eaveY)
      ctx.lineTo(eaveR + 12, eaveY)
      ctx.stroke()

      // Ridge cap
      ctx.strokeStyle = green(0.5)
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(peakX - 6, peakY)
      ctx.lineTo(peakX + 6, peakY)
      ctx.stroke()

      // Shingle rows (left slope)
      ctx.strokeStyle = green(0.12)
      ctx.lineWidth = 1
      for (let r = 1; r <= 5; r++) {
        const t = r / 6
        const rowY = peakY + t * roofH
        const rowXl = peakX - t * (roofW / 2)
        const rowXr = peakX
        ctx.beginPath()
        ctx.moveTo(rowXl, rowY)
        ctx.lineTo(rowXr - 4, rowY + 3)
        ctx.stroke()
      }
      // Right slope
      for (let r = 1; r <= 5; r++) {
        const t = r / 6
        const rowY = peakY + t * roofH
        const rowXr = peakX + t * (roofW / 2)
        const rowXl = peakX
        ctx.beginPath()
        ctx.moveTo(rowXr, rowY)
        ctx.lineTo(rowXl + 4, rowY + 3)
        ctx.stroke()
      }

      // --- Damage crack lines ---
      ctx.strokeStyle = green(0.22)
      ctx.lineWidth = 1
      ctx.setLineDash([3, 4])
      // Left slope crack
      const crackT = 0.45
      const crackX = peakX - crackT * (roofW / 2)
      const crackY = peakY + crackT * roofH
      ctx.beginPath()
      ctx.moveTo(crackX, crackY)
      ctx.lineTo(crackX - 14, crackY + 10)
      ctx.lineTo(crackX - 8, crackY + 18)
      ctx.stroke()
      ctx.setLineDash([])

      // --- Shingle fragments ---
      frame % 50 === 0 && fragments.length < 14 && spawnFragment()
      for (let i = fragments.length - 1; i >= 0; i--) {
        const f = fragments[i]
        const alpha = (f.life) * 0.55
        ctx.save()
        ctx.translate(f.x, f.y)
        ctx.rotate(f.rotation)
        ctx.strokeStyle = green(alpha)
        ctx.fillStyle = green(alpha * 0.3)
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.rect(-f.w / 2, -f.h / 2, f.w, f.h)
        ctx.fill()
        ctx.stroke()
        ctx.restore()

        f.x += f.vx
        f.y += f.vy
        f.vy += 0.08 // gravity
        f.rotation += f.rotV
        f.life -= 1 / f.maxLife
        if (f.life <= 0) fragments.splice(i, 1)
      }

      frame++
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] flex items-center bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-0">

          {/* Left — text content, pushed down slightly */}
          <div className="flex flex-col justify-center mt-8 lg:mt-16">
            <h1
              className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-[-0.04em] font-serif mb-6"
              style={{ animationDelay: "0ms" }}
            >
              Revenue systems built for{" "}
              <span className="relative inline-block text-primary">
                roofing.
                <span
                  className="animate-draw-line absolute bottom-0 left-0 h-[2px] bg-primary/30"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p
              className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
              style={{ animationDelay: "80ms" }}
            >
              Supplement recovery. Storm outreach. Systems that run without adding headcount.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-14 text-base px-6 sm:px-8 rounded-none shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 text-base px-6 sm:px-8 rounded-none border-border hover:bg-muted/50 transition-all duration-300"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Right — animated house with storm damage graphic */}
          <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[500px] flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
