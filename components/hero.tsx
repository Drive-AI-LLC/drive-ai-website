"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, GitBranch, Database, Mail, FileText, Bot } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
          radius: Math.random() * 2 + 1.5,
        })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      nodes.forEach((node, i) => {
        // Mouse repulsion
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200
          node.vx -= (dx / dist) * force * 0.8
          node.vy -= (dy / dist) * force * 0.8
        }

        // Return to base position
        node.vx += (node.baseX - node.x) * 0.02
        node.vy += (node.baseY - node.y) * 0.02

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Damping
        node.vx *= 0.92
        node.vy *= 0.92

        // Draw connections first
        nodes.forEach((other, j) => {
          if (i >= j) return
          const d = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            const opacity = 0.15 * (1 - d / 150)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.4)"
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      {/* Node network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight font-serif">
            <span className="block">When Ideas Drive...</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              AI Delivers.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            Automate tasks. Connect tools. Save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-full border-2 hover:bg-accent transition-all">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="text-sm text-muted-foreground pt-2">
            Helping businesses automate smarter.
          </p>
        </div>
      </div>

      {/* Floating UI Cards */}
      {mounted && (
        <>
          {/* Card 1 - Top Left */}
          <div className="absolute top-[18%] left-[8%] hidden lg:block animate-float">
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Workflow Triggered</p>
                  <p className="text-xs text-muted-foreground">2 seconds ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Top Right */}
          <div className="absolute top-[22%] right-[10%] hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">1,247 Records</p>
                  <p className="text-xs text-muted-foreground">Synced automatically</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Bottom Left */}
          <div className="absolute bottom-[22%] left-[12%] hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Sent</p>
                  <p className="text-xs text-muted-foreground">AI-generated response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Bottom Right */}
          <div className="absolute bottom-[18%] right-[8%] hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Processing request...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - Mid Left */}
          <div className="absolute top-[45%] left-[5%] hidden xl:block animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">3 Tools Connected</p>
                  <p className="text-xs text-muted-foreground">Real-time sync</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 - Mid Right */}
          <div className="absolute top-[50%] right-[5%] hidden xl:block animate-float" style={{ animationDelay: '2.5s' }}>
            <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Report Ready</p>
                  <p className="text-xs text-muted-foreground">Auto-generated</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
