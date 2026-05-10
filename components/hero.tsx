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

    // Colors from reference
    const mintGreen = "#D4E6D4"
    const darkGreen = "#2D5016"
    const roofGray = "#5A5A5A"
    const brickRed = "#8B6B47"
    const skyBlue = "#E8F4F8"
    const rainGray = "#A0A0A0"
    const grassGreen = "#4A7C4E"

    interface Shingle {
      x: number; y: number
      vx: number; vy: number
      rotation: number; rotV: number
      life: number; maxLife: number
    }
    const shingles: Shingle[] = []

    const spawnShingle = () => {
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const peakX = cx
      const peakY = cy - 120
      const roofW = 200
      const side = Math.random() < 0.5 ? -1 : 1
      
      shingles.push({
        x: peakX + side * Math.random() * (roofW / 2),
        y: peakY + Math.random() * 80,
        vx: side * (2 + Math.random() * 4),
        vy: -(1 + Math.random() * 2),
        rotation: Math.random() * Math.PI * 2,
        rotV: (Math.random() - 0.5) * 0.25,
        life: 1,
        maxLife: 70 + Math.random() * 60,
      })
    }

    interface Drop {
      x: number; y: number
      vy: number; len: number; life: number
    }
    const drops: Drop[] = []

    const spawnDrop = () => {
      const cx = canvas.width / 2
      drops.push({
        x: cx - 200 + Math.random() * 400,
        y: -20 - Math.random() * 80,
        vy: 6 + Math.random() * 3,
        len: 12 + Math.random() * 10,
        life: 1,
      })
    }

    let frame = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      grad.addColorStop(0, skyBlue)
      grad.addColorStop(1, "#F5F9FA")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Rain
      frame % 2 === 0 && drops.length < 28 && spawnDrop()
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        ctx.strokeStyle = rainGray
        ctx.globalAlpha = 0.5 * d.life
        ctx.lineWidth = 2.5
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(d.x - 3, d.y)
        ctx.lineTo(d.x - 1, d.y + d.len)
        ctx.stroke()
        ctx.globalAlpha = 1
        d.y += d.vy
        d.life -= 0.008
        if (d.y > canvas.height + 20 || d.life <= 0) drops.splice(i, 1)
      }

      // House base positioning
      const houseX = cx - 80
      const houseY = cy - 20
      const houseW = 160
      const houseH = 100
      const roofH = 90
      const wallH = 60

      // Grass/ground
      ctx.fillStyle = grassGreen
      ctx.beginPath()
      ctx.ellipse(cx, houseY + wallH + 45, 180, 30, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "#3D6A41"
      ctx.fillRect(0, houseY + wallH + 70, canvas.width, canvas.height)

      // Left tree
      ctx.fillStyle = "#8B5A3C"
      ctx.fillRect(houseX - 60, houseY + wallH - 25, 8, 35)
      ctx.fillStyle = darkGreen
      ctx.beginPath()
      ctx.ellipse(houseX - 56, houseY + wallH - 30, 35, 40, 0, 0, Math.PI * 2)
      ctx.fill()

      // Bush left
      ctx.fillStyle = darkGreen
      ctx.beginPath()
      ctx.ellipse(houseX + 20, houseY + wallH + 8, 25, 18, 0, 0, Math.PI * 2)
      ctx.fill()

      // Bush right
      ctx.beginPath()
      ctx.ellipse(houseX + houseW - 20, houseY + wallH + 8, 25, 18, 0, 0, Math.PI * 2)
      ctx.fill()

      // Main walls (mint green)
      ctx.fillStyle = mintGreen
      ctx.fillRect(houseX, houseY + roofH, houseW, wallH)

      // Wall outline
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2.5
      ctx.strokeRect(houseX, houseY + roofH, houseW, wallH)

      // Left gable (lighter)
      ctx.fillStyle = "#E8F5E8"
      ctx.beginPath()
      ctx.moveTo(houseX + 30, houseY + roofH)
      ctx.lineTo(houseX + 70, houseY + roofH - 40)
      ctx.lineTo(houseX + 110, houseY + roofH)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2.5
      ctx.stroke()

      // Door (dark green)
      ctx.fillStyle = darkGreen
      ctx.fillRect(houseX + 30, houseY + roofH + 25, 24, 35)
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(houseX + 30, houseY + roofH + 25, 24, 35)
      ctx.fillStyle = "#FFD700"
      ctx.beginPath()
      ctx.arc(houseX + 50, houseY + roofH + 42, 2.5, 0, Math.PI * 2)
      ctx.fill()

      // Left window
      const winX1 = houseX + 15
      const winY = houseY + roofH + 10
      const winW = 22
      const winH = 22
      ctx.fillStyle = "#B0E0E6"
      ctx.fillRect(winX1, winY, winW, winH)
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(winX1, winY, winW, winH)
      ctx.beginPath()
      ctx.moveTo(winX1 + winW / 2, winY)
      ctx.lineTo(winX1 + winW / 2, winY + winH)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(winX1, winY + winH / 3)
      ctx.lineTo(winX1 + winW, winY + winH / 3)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(winX1, winY + (winH * 2) / 3)
      ctx.lineTo(winX1 + winW, winY + (winH * 2) / 3)
      ctx.stroke()

      // Right window (larger)
      const winX2 = houseX + 100
      const winW2 = 28
      ctx.fillStyle = "#B0E0E6"
      ctx.fillRect(winX2, winY, winW2, winH)
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(winX2, winY, winW2, winH)
      ctx.beginPath()
      ctx.moveTo(winX2 + winW2 / 2, winY)
      ctx.lineTo(winX2 + winW2 / 2, winY + winH)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(winX2, winY + winH / 2)
      ctx.lineTo(winX2 + winW2, winY + winH / 2)
      ctx.stroke()

      // Roof left slope (dark)
      ctx.fillStyle = roofGray
      ctx.beginPath()
      ctx.moveTo(houseX, houseY + roofH)
      ctx.lineTo(houseX + houseW / 2, houseY)
      ctx.lineTo(houseX - 10, houseY + roofH)
      ctx.closePath()
      ctx.fill()

      // Roof right slope (lighter)
      ctx.fillStyle = "#6B7280"
      ctx.beginPath()
      ctx.moveTo(houseX + houseW, houseY + roofH)
      ctx.lineTo(houseX + houseW / 2, houseY)
      ctx.lineTo(houseX + houseW + 10, houseY + roofH)
      ctx.closePath()
      ctx.fill()

      // Ridge
      ctx.strokeStyle = "#2D2D2D"
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(houseX + houseW / 2 - 6, houseY - 3)
      ctx.lineTo(houseX + houseW / 2 + 6, houseY - 3)
      ctx.stroke()

      // Roof shingles
      ctx.fillStyle = "#5A4A3A"
      ctx.globalAlpha = 0.5
      const shingleW = 20
      const shingleH = 12
      for (let r = 0; r < 5; r++) {
        const rowY = houseY + roofH - r * shingleH
        const offset = r % 2 ? shingleW / 2 : 0
        for (let s = 0; s < 12; s++) {
          const sx = houseX - 20 + offset + s * shingleW
          ctx.fillRect(sx, rowY, shingleW - 2, shingleH - 2)
        }
      }
      ctx.globalAlpha = 1

      // Damage area
      ctx.fillStyle = "rgba(0,0,0,0.15)"
      ctx.fillRect(houseX + 80, houseY + 10, 35, 25)
      ctx.strokeStyle = "rgba(0,0,0,0.3)"
      ctx.lineWidth = 1.5
      ctx.setLineDash([2, 3])
      ctx.strokeRect(houseX + 80, houseY + 10, 35, 25)
      ctx.setLineDash([])

      // Chimney
      ctx.fillStyle = brickRed
      ctx.fillRect(houseX + houseW - 25, houseY + 10, 12, 30)
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(houseX + houseW - 25, houseY + 10, 12, 30)

      // Flying shingles
      frame % 35 === 0 && shingles.length < 16 && spawnShingle()
      for (let i = shingles.length - 1; i >= 0; i--) {
        const s = shingles[i]
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.rotation)

        ctx.fillStyle = roofGray
        ctx.globalAlpha = s.life * 0.85
        ctx.fillRect(-8, -4, 16, 8)
        ctx.strokeStyle = "#2D2D2D"
        ctx.lineWidth = 1
        ctx.strokeRect(-8, -4, 16, 8)
        ctx.globalAlpha = 1

        ctx.restore()

        s.x += s.vx
        s.y += s.vy
        s.vy += 0.1
        s.rotation += s.rotV
        s.life -= 1 / s.maxLife
        if (s.life <= 0) shingles.splice(i, 1)
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

          {/* Right — cartoon house matching reference */}
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
