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
      for (let i = 0; i < 28; i++) {
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        nodes.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, radius: Math.random() * 1.5 + 1 })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      nodes.forEach((node, i) => {
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120
          node.vx -= (dx / dist) * force * 0.08
          node.vy -= (dy / dist) * force * 0.08
        }
        node.vx += (node.baseX - node.x) * 0.006
        node.vy += (node.baseY - node.y) * 0.006
        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.96
        node.vy *= 0.96

        nodes.slice(i + 1).forEach((other) => {
          const ddx = other.x - node.x
          const ddy = other.y - node.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < 140) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 86, 59, ${0.07 * (1 - d / 140)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.22)"
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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-32 sm:pt-36 lg:pt-40"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-7">

          <p className="text-xs font-semibold text-primary uppercase tracking-[0.22em]">
            AI Systems for Roofing Companies
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.08] tracking-[-0.03em] font-serif text-balance">
            Revenue systems<br className="hidden sm:block" />{" "}
            <span className="text-primary">built for roofers.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Drive AI helps roofing companies recover lost revenue, streamline operations, and scale faster through purpose-built AI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild size="lg" className="h-12 text-base px-7 rounded-full shadow-sm hover:shadow-md transition-all duration-200">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 text-base px-7 rounded-full hover:bg-muted/50 transition-all duration-200">
              <Link href="/services">
                Explore Solutions
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
