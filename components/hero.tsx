"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nodes: { x: number; y: number; vx: number; vy: number; radius: number; baseX: number; baseY: number }[] = []

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initNodes = () => {
      nodes = []
      const rect = container.getBoundingClientRect()
      for (let i = 0; i < 18; i++) {
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        nodes.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, radius: Math.random() * 1.2 + 0.8 })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      nodes.forEach((node, i) => {
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100
          node.vx -= (dx / dist) * force * 0.05
          node.vy -= (dy / dist) * force * 0.05
        }
        node.vx += (node.baseX - node.x) * 0.005
        node.vy += (node.baseY - node.y) * 0.005
        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.95
        node.vy *= 0.95

        nodes.slice(i + 1).forEach((other) => {
          const ddx = other.x - node.x
          const ddy = other.y - node.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 86, 59, ${0.045 * (1 - d / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.14)"
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    resize()
    initNodes()
    animate()

    const onResize = () => { resize(); initNodes() }
    window.addEventListener("resize", onResize)
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", onResize)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">

          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em]">
            Roofing Operations
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-[-0.03em] font-serif text-balance">
            Revenue systems<br />
            <span className="text-primary">built for roofers.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Drive AI builds operational systems for roofing companies — supplement workflows, storm outreach, and production coordination that run without adding headcount.
          </p>

          {/* Operational status indicators */}
          <div className="flex flex-wrap gap-3 pt-1">
            {["Supplement Tracking", "Storm Pipeline", "Production Handoff"].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium bg-muted/50 border border-border/50 px-2.5 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button asChild size="lg" className="h-11 text-sm px-6 rounded-full shadow-sm transition-all duration-200">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 text-sm px-6 rounded-full transition-all duration-200">
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
