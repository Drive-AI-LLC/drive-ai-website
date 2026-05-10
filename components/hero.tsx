"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0

    const PRIMARY = "52, 120, 90" // rgb approx of oklch(0.35 0.1 160)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      opacity: number
    }

    const COUNT = 38
    const CONNECT_DIST = 140
    const particles: Particle[] = []

    function resize() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w * devicePixelRatio
      canvas!.height = h * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }

    function spawn(): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8,
        opacity: Math.random() * 0.4 + 0.15,
      }
    }

    function init() {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) particles.push(spawn())
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      // Draw edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const edgeOpacity = (1 - dist / CONNECT_DIST) * 0.12
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(${PRIMARY}, ${edgeOpacity})`
            ctx!.lineWidth = 0.6
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // Draw nodes
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${PRIMARY}, ${p.opacity})`
        ctx!.fill()
      }
    }

    function tick() {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }
      draw()
      animId = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(() => {
      resize()
      init()
    })
    ro.observe(canvas)
    resize()
    init()
    tick()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      {/* Ambient particle field — fills the full hero */}
      <ParticleCanvas />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          <p
            className="animate-fade-up text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-8"
            style={{ animationDelay: "0ms" }}
          >
            Drive AI &mdash; Roofing Operations
          </p>

          <h1
            className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.97] tracking-[-0.04em] font-serif mb-8"
            style={{ animationDelay: "80ms" }}
          >
            Revenue systems<br />
            built for<br />
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
            style={{ animationDelay: "160ms" }}
          >
            Supplement recovery. Storm outreach. Production coordination.
            Systems that run without adding headcount.
          </p>

          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="h-11 text-sm px-7 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 text-sm px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5">
              <Link href="/services">
                View Solutions
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
