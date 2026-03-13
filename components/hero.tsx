"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

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
      const numNodes = 20
      for (let i = 0; i < numNodes; i++) {
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() * 1.5 + 0.8,
        })
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
          node.vx -= (dx / dist) * force * 0.06
          node.vy -= (dy / dist) * force * 0.06
        }

        node.vx += (node.baseX - node.x) * 0.004
        node.vy += (node.baseY - node.y) * 0.004

        node.x += node.vx
        node.y += node.vy

        node.vx *= 0.96
        node.vy *= 0.96

        nodes.slice(i + 1).forEach((other) => {
          const dx = other.x - node.x
          const dy = other.y - node.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            const opacity = 0.06 * (1 - d / 130)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.18)"
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    initNodes()
    animate()

    const resizeHandler = () => { resize(); initNodes() }
    window.addEventListener("resize", resizeHandler)
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeHandler)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-32 sm:pt-36 lg:pt-40 pb-20"
    >
      {/* Subtle gradient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,86,59,0.05) 0%, transparent 65%)",
            animation: "pulse 16s ease-in-out infinite",
          }}
        />
      </div>

      {/* Node network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="flex flex-col items-center gap-8 sm:gap-10">

          {/* Headline */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-foreground leading-[1.08] tracking-[-0.03em] font-serif text-balance">
              When Ideas Drive...
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.08] tracking-[-0.03em] font-serif text-primary">
              AI Delivers.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="max-w-sm text-lg sm:text-xl text-muted-foreground leading-relaxed tracking-wide">
            Automate tasks. Connect tools. Save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-13 text-base px-8 rounded-full shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 font-medium"
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
              className="h-13 text-base px-8 rounded-full border-border/60 hover:border-border hover:bg-muted/40 hover:-translate-y-0.5 transition-all duration-200 font-medium"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="text-sm text-muted-foreground/50 tracking-widest uppercase">
            Helping businesses automate smarter.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.04); }
        }
      `}</style>
    </section>
  )
}
