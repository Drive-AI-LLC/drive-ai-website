"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initNodes = () => {
      nodes = []
      const rect = canvas.getBoundingClientRect()
      const numNodes = 25
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 2,
        })
      }
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Mouse attraction
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150 && dist > 0) {
          node.vx += (dx / dist) * 0.02
          node.vy += (dy / dist) * 0.02
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Damping
        node.vx *= 0.99
        node.vy *= 0.99

        // Boundaries
        if (node.x < 0 || node.x > rect.width) node.vx *= -1
        if (node.y < 0 || node.y > rect.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.6)"
        ctx.fill()

        // Draw connections
        nodes.forEach((other, j) => {
          if (i >= j) return
          const d = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 86, 59, ${0.3 * (1 - d / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
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
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance font-serif">
              When Ideas Drive... AI Delivers.
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Automate tasks. Connect tools. Save time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#how-it-works">
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual - Interactive Canvas */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 via-accent/50 to-secondary rounded-3xl overflow-hidden aspect-square">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
              />
              {/* Central Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg z-10">
                <svg className="w-10 h-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-lg border border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">100+ Hours Saved</p>
                  <p className="text-xs text-muted-foreground">For the Chamber alone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
