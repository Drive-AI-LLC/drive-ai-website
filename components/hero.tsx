"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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
      const numNodes = 40
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
          radius: Math.random() * 2.5 + 1.5,
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
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150
          node.vx -= (dx / dist) * force * 0.15
          node.vy -= (dy / dist) * force * 0.15
        }

        node.vx += (node.baseX - node.x) * 0.008
        node.vy += (node.baseY - node.y) * 0.008

        node.x += node.vx
        node.y += node.vy

        node.vx *= 0.97
        node.vy *= 0.97

        nodes.slice(i + 1).forEach((other) => {
          const dx = other.x - node.x
          const dy = other.y - node.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            const opacity = 0.12 * (1 - d / 150)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.35)"
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

    resize()
    initNodes()
    animate()

    window.addEventListener("resize", () => {
      resize()
      initNodes()
    })
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Subtle gradient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.08) 0%, transparent 60%)',
            animation: 'pulse 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Node network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-10">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-[-0.025em] font-serif">
            <span className="block">When Ideas Drive...</span>
            <span className="block mt-3 sm:mt-4 text-primary">
              AI Delivers.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-md mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Automate tasks. Connect tools. Save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 rounded-full border-border hover:bg-muted/50 transition-all duration-300">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="text-sm text-muted-foreground/60 tracking-wide">
            Helping businesses automate smarter.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.25; transform: translate(-50%, -50%) scale(1.02); }
        }
      `}</style>
    </section>
  )
}
