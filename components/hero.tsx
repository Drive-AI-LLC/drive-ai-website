"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  pulsePhase: number
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const initNodes = () => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      nodesRef.current = []
      const numNodes = 10
      
      for (let i = 0; i < numNodes; i++) {
        const angle = (i / numNodes) * Math.PI * 2 + Math.random() * 0.3
        const radius = 180 + Math.random() * 180
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        nodesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: 4 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)
      
      const time = Date.now() / 1000
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const mouseActive = mouseRef.current.active

      // Update node positions
      nodesRef.current.forEach((node, i) => {
        // Gentle floating motion
        const floatX = Math.sin(time * 0.3 + i * 0.7) * 15
        const floatY = Math.cos(time * 0.25 + i * 0.9) * 12
        
        let targetX = node.baseX + floatX
        let targetY = node.baseY + floatY
        
        // Subtle attraction to mouse
        if (mouseActive) {
          const dx = mx - node.baseX
          const dy = my - node.baseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 300
          
          if (dist < maxDist) {
            const strength = (1 - dist / maxDist) * 25
            targetX += (dx / dist) * strength
            targetY += (dy / dist) * strength
          }
        }
        
        // Smooth interpolation
        node.x += (targetX - node.x) * 0.03
        node.y += (targetY - node.y) * 0.03
      })

      // Draw connection lines
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach((other, j) => {
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 220
          
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.25
            
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 86, 59, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
            
            // Animated pulse traveling along the line
            const pulseProgress = ((time * 0.4 + i * 0.15 + j * 0.1) % 1)
            const pulseX = node.x + dx * pulseProgress
            const pulseY = node.y + dy * pulseProgress
            const pulseOpacity = Math.sin(pulseProgress * Math.PI) * opacity * 2
            
            if (pulseOpacity > 0.05) {
              ctx.beginPath()
              ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(0, 86, 59, ${pulseOpacity})`
              ctx.fill()
            }
          }
        })
      })

      // Draw nodes with glow
      nodesRef.current.forEach((node, i) => {
        const pulse = Math.sin(time * 0.8 + node.pulsePhase) * 0.15 + 0.85
        const nodeRadius = node.radius * pulse
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, nodeRadius * 4
        )
        gradient.addColorStop(0, 'rgba(0, 86, 59, 0.2)')
        gradient.addColorStop(0.5, 'rgba(0, 86, 59, 0.05)')
        gradient.addColorStop(1, 'rgba(0, 86, 59, 0)')
        
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core node
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 86, 59, ${0.5 + pulse * 0.3})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    resize()
    initNodes()
    animate()

    window.addEventListener('resize', () => {
      resize()
      initNodes()
    })
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.04) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Network canvas */}
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
    </section>
  )
}
