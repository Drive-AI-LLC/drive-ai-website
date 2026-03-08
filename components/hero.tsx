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
      const numNodes = 50
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
          radius: Math.random() * 2 + 1,
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
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180
          node.vx -= (dx / dist) * force * 0.6
          node.vy -= (dy / dist) * force * 0.6
        }

        node.vx += (node.baseX - node.x) * 0.015
        node.vy += (node.baseY - node.y) * 0.015

        node.x += node.vx
        node.y += node.vy

        node.vx *= 0.94
        node.vy *= 0.94

        nodes.forEach((other, j) => {
          if (i >= j) return
          const d = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            const opacity = 0.08 * (1 - d / 120)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 86, 59, 0.25)"
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
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.08) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.06) 0%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Node network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-10">
          {/* Headline */}
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] font-serif">
            <span className="block">When Ideas Drive...</span>
            <span className="block mt-3 text-primary">
              AI Delivers.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light tracking-[-0.01em]">
            Automate tasks. Connect tools. Save time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="h-14 text-base px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
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
          <p className="text-sm text-muted-foreground/80 tracking-wide">
            Helping businesses automate smarter.
          </p>
        </div>
      </div>

      {/* Floating UI Cards */}
      {mounted && (
        <>
          <div className="absolute top-[15%] left-[6%] hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Workflow Triggered</p>
                  <p className="text-xs text-muted-foreground">2 seconds ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[20%] right-[8%] hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite 1.5s' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">1,247 Records</p>
                  <p className="text-xs text-muted-foreground">Synced automatically</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[10%] hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite 3s' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Sent</p>
                  <p className="text-xs text-muted-foreground">AI-generated response</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[18%] right-[6%] hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite 0.75s' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Processing request...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[42%] left-[3%] hidden xl:block" style={{ animation: 'float 6s ease-in-out infinite 2.25s' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">3 Tools Connected</p>
                  <p className="text-xs text-muted-foreground">Real-time sync</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[45%] right-[3%] hidden xl:block" style={{ animation: 'float 6s ease-in-out infinite 3.75s' }}>
            <div className="bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 shadow-2xl shadow-foreground/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
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
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}
