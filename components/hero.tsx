"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        nodes.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, radius: Math.random() * 0.8 + 0.4 })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      nodes.forEach((node, i) => {
        node.vx += (node.baseX - node.x) * 0.003
        node.vy += (node.baseY - node.y) * 0.003
        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.92
        node.vy *= 0.92

        nodes.slice(i + 1).forEach((other) => {
          const ddx = other.x - node.x
          const ddy = other.y - node.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 86, 59, ${0.02 * (1 - d / 150)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.07)"
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initNodes()
    animate()

    const onResize = () => { resize(); initNodes() }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-24 sm:pt-28 pb-20 sm:pb-24"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-8">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em]">
            Drive AI &mdash; Roofing Operations
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.02] tracking-[-0.035em] font-serif">
            Revenue systems<br />
            <span className="text-primary">built for roofers.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
            We build operational systems for roofing companies — supplement workflows, storm outreach, and production coordination that run without adding headcount.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button asChild size="lg" className="h-11 text-sm px-7 rounded-full shadow-sm transition-all duration-200">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 text-sm px-7 rounded-full transition-all duration-200">
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
