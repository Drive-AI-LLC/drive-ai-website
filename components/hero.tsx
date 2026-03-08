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
      // Reduced from 50 to 18 nodes (about 65% reduction)
      const numNodes = 18
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
          // Smaller dots
          radius: Math.random() * 1.5 + 0.5,
        })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      nodes.forEach((node, i) => {
        // Reduced mouse interaction - less reactive
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150
          // Much gentler push (reduced from 0.6 to 0.15)
          node.vx -= (dx / dist) * force * 0.15
          node.vy -= (dy / dist) * force * 0.15
        }

        // Slower return to base position (reduced from 0.015 to 0.008)
        node.vx += (node.baseX - node.x) * 0.008
        node.vy += (node.baseY - node.y) * 0.008

        node.x += node.vx
        node.y += node.vy

        // More damping for slower, smoother motion (increased from 0.94 to 0.97)
        node.vx *= 0.97
        node.vy *= 0.97

        // Draw connection lines - reduced opacity
        nodes.forEach((other, j) => {
          if (i >= j) return
          const d = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            // More subtle lines (reduced from 0.08 to 0.04)
            const opacity = 0.04 * (1 - d / 150)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Draw dots - more subtle
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.15)"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle gradient orb - single, very soft */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.06) 0%, transparent 60%)',
            animation: 'pulse 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Node network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12">
          {/* Headline with more vertical space and stronger presence */}
          <div className="py-4">
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] font-serif drop-shadow-sm">
              <span className="block">When Ideas Drive...</span>
              <span className="block mt-4 text-primary">
                AI Delivers.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="max-w-lg mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light tracking-[-0.01em]">
            Automate tasks. Connect tools. Save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="h-14 text-base px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2.5 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 text-base px-8 rounded-full border-border/80 hover:bg-muted/50 transition-all duration-300">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="text-sm text-muted-foreground/70 tracking-wide pt-2">
            Helping businesses automate smarter.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.02); }
        }
      `}</style>
    </section>
  )
}
