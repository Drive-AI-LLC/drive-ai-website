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

    const cx = () => canvas.width / 2
    const cy = () => canvas.height / 2

    // Shingle fragments
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
      const peakY = cy() - 140
      const roofW = 260
      const t = Math.random()
      const sx = peakX + side * t * (roofW / 2)
      const sy = peakY + t * 140
      fragments.push({
        x: sx, y: sy,
        vx: side * (2 + Math.random() * 3),
        vy: -(1 + Math.random() * 2.5),
        rotation: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.2,
        life: 1,
        maxLife: 90 + Math.random() * 70,
        w: 18 + Math.random() * 16,
        h: 6 + Math.random() * 5,
      })
    }

    // Rain drops
    interface Drop { x: number; y: number; vy: number; len: number; life: number }
    const drops: Drop[] = []

    const spawnDrop = () => {
      drops.push({
        x: cx() - 220 + Math.random() * 440,
        y: cy() - 260 - Math.random() * 100,
        vy: 7 + Math.random() * 3.5,
        len: 14 + Math.random() * 12,
        life: 1,
      })
    }

    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const px = cx()
      const py = cy()
      const roofW = 260
      const roofH = 140
      const wallH = 130
      const wallW = roofW

      const peakX = px
      const peakY = py - roofH
      const eaveL = px - roofW / 2
      const eaveR = px + roofW / 2
      const eaveY = py
      const groundY = py + wallH

      // Color scheme
      const brickRed = "#C94C4C"
      const darkRed = "#A63939"
      const roofGray = "#4A5568"
      const roofLight = "#6B7280"
      const skyBlue = "#E3F2FD"
      const rainGray = "#94A3B8"

      // --- Background sky gradient ---
      const grad = ctx.createLinearGradient(0, 0, 0, groundY + 60)
      grad.addColorStop(0, skyBlue)
      grad.addColorStop(1, "#F0F4F8")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, groundY + 60)

      // --- Rain ---
      frame % 2 === 0 && drops.length < 32 && spawnDrop()
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        ctx.strokeStyle = rainGray
        ctx.globalAlpha = 0.4 * d.life
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 2, d.y + d.len)
        ctx.stroke()
        ctx.globalAlpha = 1
        d.y += d.vy
        d.life -= 0.01
        if (d.y > groundY + 30 || d.life <= 0) drops.splice(i, 1)
      }

      // --- Brick walls ---
      ctx.fillStyle = brickRed
      ctx.fillRect(eaveL, eaveY, wallW, wallH)

      // Brick pattern
      ctx.strokeStyle = darkRed
      ctx.lineWidth = 1
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 6; col++) {
          const bx = eaveL + col * 44
          const by = eaveY + row * 26
          ctx.strokeRect(bx, by, 44, 26)
        }
      }

      // --- Door (brown) ---
      const dw = 32, dh = 50
      ctx.fillStyle = "#8B4513"
      ctx.fillRect(px - dw / 2, groundY - dh, dw, dh)
      ctx.fillStyle = "#FFD700"
      ctx.beginPath()
      ctx.arc(px + dw / 2 - 6, groundY - dh / 2, 3, 0, Math.PI * 2)
      ctx.fill()

      // --- Windows (light blue) ---
      ctx.fillStyle = "#87CEEB"
      const winSize = 28
      ctx.fillRect(eaveL + 30, eaveY + 24, winSize, winSize)
      ctx.fillRect(eaveR - 30 - winSize, eaveY + 24, winSize, winSize)
      // Window frames
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(eaveL + 30, eaveY + 24, winSize, winSize)
      ctx.strokeRect(eaveR - 30 - winSize, eaveY + 24, winSize, winSize)
      ctx.beginPath()
      ctx.moveTo(eaveL + 30 + winSize / 2, eaveY + 24)
      ctx.lineTo(eaveL + 30 + winSize / 2, eaveY + 24 + winSize)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(eaveL + 30, eaveY + 24 + winSize / 2)
      ctx.lineTo(eaveL + 30 + winSize, eaveY + 24 + winSize / 2)
      ctx.stroke()

      // --- Roof (left slope, darker gray) ---
      ctx.fillStyle = roofGray
      ctx.beginPath()
      ctx.moveTo(eaveL, eaveY)
      ctx.lineTo(peakX, peakY)
      ctx.lineTo(eaveL - 20, eaveY)
      ctx.closePath()
      ctx.fill()

      // --- Roof (right slope) ---
      ctx.fillStyle = roofLight
      ctx.beginPath()
      ctx.moveTo(eaveR, eaveY)
      ctx.lineTo(peakX, peakY)
      ctx.lineTo(eaveR + 20, eaveY)
      ctx.closePath()
      ctx.fill()

      // --- Ridge cap (dark) ---
      ctx.fillStyle = "#2D3748"
      ctx.beginPath()
      ctx.moveTo(peakX - 8, peakY)
      ctx.lineTo(peakX + 8, peakY)
      ctx.lineTo(peakX + 6, peakY - 6)
      ctx.lineTo(peakX - 6, peakY - 6)
      ctx.closePath()
      ctx.fill()

      // --- Roof shingles (light rows) ---
      ctx.fillStyle = "#5A6B7A"
      ctx.globalAlpha = 0.6
      for (let r = 1; r <= 6; r++) {
        const t = r / 7
        const rowY = peakY + t * roofH
        const rowXl = eaveL + t * 20
        const rowXr = eaveR - t * 20

        // Left slope shingles
        for (let s = 0; s < 5; s++) {
          const sx = rowXl + (s - 2) * 30
          ctx.fillRect(sx, rowY, 28, 12)
        }
        // Right slope shingles
        for (let s = 0; s < 5; s++) {
          const sx = rowXr - (s - 2) * 30 - 28
          ctx.fillRect(sx, rowY, 28, 12)
        }
      }
      ctx.globalAlpha = 1

      // --- Damage cracks on roof ---
      ctx.strokeStyle = "rgba(0,0,0,0.25)"
      ctx.lineWidth = 2
      ctx.setLineDash([4, 6])
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(peakX - 40, peakY + 20)
      ctx.lineTo(peakX - 60, peakY + 50)
      ctx.lineTo(peakX - 45, peakY + 70)
      ctx.stroke()
      ctx.setLineDash([])

      // --- Shingle fragments (flying off) ---
      frame % 45 === 0 && fragments.length < 18 && spawnFragment()
      for (let i = fragments.length - 1; i >= 0; i--) {
        const f = fragments[i]
        ctx.save()
        ctx.translate(f.x, f.y)
        ctx.rotate(f.rotation)

        ctx.fillStyle = roofGray
        ctx.globalAlpha = f.life * 0.8
        ctx.fillRect(-f.w / 2, -f.h / 2, f.w, f.h)
        ctx.strokeStyle = "#2D3748"
        ctx.lineWidth = 1.5
        ctx.strokeRect(-f.w / 2, -f.h / 2, f.w, f.h)
        ctx.globalAlpha = 1

        ctx.restore()

        f.x += f.vx
        f.y += f.vy
        f.vy += 0.12
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

          {/* Right — animated cartoon house with storm damage graphic */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
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
