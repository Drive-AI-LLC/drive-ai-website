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

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Roof dimensions
    const roofX = canvas.width / 2
    const roofY = canvas.height / 2
    const roofWidth = 280
    const roofHeight = 160

    // Rain drops array
    const raindrops: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      age: number
    }> = []

    // Draw roof structure
    const drawRoof = () => {
      ctx.strokeStyle = "rgba(22, 163, 74, 0.4)"
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      // Roof triangle (left and right slopes)
      ctx.beginPath()
      ctx.moveTo(roofX - roofWidth / 2, roofY)
      ctx.lineTo(roofX, roofY - roofHeight)
      ctx.lineTo(roofX + roofWidth / 2, roofY)
      ctx.stroke()

      // Ridge cap accent
      ctx.strokeStyle = "rgba(22, 163, 74, 0.6)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(roofX - 4, roofY - roofHeight - 2)
      ctx.lineTo(roofX + 4, roofY - roofHeight - 2)
      ctx.stroke()

      // Building walls
      ctx.strokeStyle = "rgba(22, 163, 74, 0.25)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(roofX - roofWidth / 2, roofY)
      ctx.lineTo(roofX - roofWidth / 2, roofY + 80)
      ctx.lineTo(roofX + roofWidth / 2, roofY + 80)
      ctx.lineTo(roofX + roofWidth / 2, roofY)
      ctx.stroke()

      // Shingle rows (left side)
      ctx.strokeStyle = "rgba(22, 163, 74, 0.15)"
      ctx.lineWidth = 1
      for (let i = 1; i < 6; i++) {
        const progress = i / 6
        const x1 = roofX - roofWidth / 2 + progress * (roofWidth / 2)
        const y1 = roofY - roofHeight * (1 - progress)
        const x2 = roofX - roofWidth / 2 + 40
        const y2 = y1 + 15
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Shingle rows (right side)
      for (let i = 1; i < 6; i++) {
        const progress = i / 6
        const x1 = roofX + roofWidth / 2 - progress * (roofWidth / 2)
        const y1 = roofY - roofHeight * (1 - progress)
        const x2 = roofX + roofWidth / 2 - 40
        const y2 = y1 + 15
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    // Create raindrop
    const createRaindrop = () => {
      const startX = roofX - roofWidth / 2 - 40 + Math.random() * (roofWidth + 80)
      const startY = roofY - roofHeight - 60
      raindrops.push({
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 2,
        vy: 3.5 + Math.random() * 2.5,
        life: 1,
        age: 0,
      })
    }

    // Draw and update raindrops
    const drawRaindrops = () => {
      for (let i = raindrops.length - 1; i >= 0; i--) {
        const drop = raindrops[i]

        // Check if drop hit roof
        if (drop.y >= roofY - 5) {
          if (drop.x >= roofX - roofWidth / 2 && drop.x <= roofX + roofWidth / 2) {
            drop.life = 0
          }
        }

        // Check if drop hit ground
        if (drop.y > roofY + 80) {
          drop.life = 0
        }

        // Draw drop with glow
        const opacity = Math.max(0, drop.life * 0.7)
        ctx.fillStyle = `rgba(22, 163, 74, ${opacity * 0.3})`
        ctx.beginPath()
        ctx.arc(drop.x, drop.y, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(22, 163, 74, ${opacity})`
        ctx.beginPath()
        ctx.arc(drop.x, drop.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Update drop
        drop.x += drop.vx
        drop.y += drop.vy
        drop.age += 0.016
        drop.life = Math.max(0, 1 - drop.age / 1.4)

        // Remove dead drops
        if (drop.life <= 0) {
          raindrops.splice(i, 1)
        }
      }
    }

    // Animation loop
    let lastSpawnTime = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawRoof()
      drawRaindrops()

      // Spawn new raindrops with variable timing
      lastSpawnTime += 0.016
      if (lastSpawnTime > 0.12 && raindrops.length < 28) {
        createRaindrop()
        lastSpawnTime = 0
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", updateCanvasSize)
  }, [])

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-background overflow-hidden">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-[-0.04em] font-serif mb-6 max-w-[9ch]">
            Revenue systems built for{" "}
            <span className="relative inline-block text-primary whitespace-nowrap">
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

          {/* CTA Buttons */}
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
      </div>
    </section>
  )
}
