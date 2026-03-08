"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Zap, Brain, Database, BarChart3 } from "lucide-react"

interface WorkflowNode {
  id: number
  x: number
  y: number
  targetX: number
  targetY: number
  opacity: number
  scale: number
  type: 'form' | 'trigger' | 'ai' | 'data' | 'report'
  label: string
  icon: typeof FileText
  connections: number[]
  visible: boolean
  pulsePhase: number
}

const nodeTypes = [
  { type: 'form' as const, label: 'Form Submission', icon: FileText },
  { type: 'trigger' as const, label: 'Automation Trigger', icon: Zap },
  { type: 'ai' as const, label: 'AI Processing', icon: Brain },
  { type: 'data' as const, label: 'Organized Data', icon: Database },
  { type: 'report' as const, label: 'Report Generated', icon: BarChart3 },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [nodes, setNodes] = useState<WorkflowNode[]>([])
  const [mounted, setMounted] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 })
  const nodesRef = useRef<WorkflowNode[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    setMounted(true)
    
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodeIdCounter = 0

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const createNode = (x: number, y: number): WorkflowNode => {
      const typeInfo = nodeTypes[nodeIdCounter % nodeTypes.length]
      const node: WorkflowNode = {
        id: nodeIdCounter++,
        x: x + (Math.random() - 0.5) * 100,
        y: y + (Math.random() - 0.5) * 100,
        targetX: x,
        targetY: y,
        opacity: 0,
        scale: 0,
        type: typeInfo.type,
        label: typeInfo.label,
        icon: typeInfo.icon,
        connections: [],
        visible: true,
        pulsePhase: Math.random() * Math.PI * 2,
      }
      return node
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const currentNodes = nodesRef.current

      // Update nodes
      currentNodes.forEach((node, i) => {
        // Animate towards target
        node.x += (node.targetX - node.x) * 0.08
        node.y += (node.targetY - node.y) * 0.08
        node.opacity = Math.min(1, node.opacity + 0.03)
        node.scale = Math.min(1, node.scale + 0.05)
        node.pulsePhase += 0.02

        // Find nearby nodes to connect
        currentNodes.forEach((other, j) => {
          if (i >= j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 250 && dist > 50) {
            // Draw connection line
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y)
            const baseOpacity = Math.min(node.opacity, other.opacity) * 0.4 * (1 - dist / 250)
            gradient.addColorStop(0, `rgba(0, 86, 59, ${baseOpacity})`)
            gradient.addColorStop(0.5, `rgba(0, 86, 59, ${baseOpacity * 1.5})`)
            gradient.addColorStop(1, `rgba(0, 86, 59, ${baseOpacity})`)
            
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()

            // Draw animated data flow dots
            const flowProgress = ((Date.now() / 1500) + i * 0.3) % 1
            const dotX = node.x + dx * flowProgress
            const dotY = node.y + dy * flowProgress
            const dotOpacity = baseOpacity * 2 * Math.sin(flowProgress * Math.PI)
            
            ctx.beginPath()
            ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 86, 59, ${dotOpacity})`
            ctx.fill()
          }
        })
      })

      // Fade out nodes far from cursor
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      currentNodes.forEach((node, i) => {
        const dx = mx - node.x
        const dy = my - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 400) {
          node.opacity = Math.max(0, node.opacity - 0.005)
        }
      })

      // Remove invisible nodes
      nodesRef.current = currentNodes.filter(n => n.opacity > 0.01)
      setNodes([...nodesRef.current])

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const dx = x - mouseRef.current.lastX
      const dy = y - mouseRef.current.lastY
      const moved = Math.sqrt(dx * dx + dy * dy)

      mouseRef.current = { x, y, lastX: x, lastY: y }

      // Create new nodes based on movement
      if (moved > 80 && nodesRef.current.length < 12) {
        const newNode = createNode(x, y)
        nodesRef.current.push(newNode)
        setNodes([...nodesRef.current])
      }
    }

    // Initialize with a few nodes
    const initNodes = () => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const initialPositions = [
        { x: centerX - 200, y: centerY - 100 },
        { x: centerX + 180, y: centerY - 80 },
        { x: centerX - 150, y: centerY + 120 },
        { x: centerX + 200, y: centerY + 100 },
      ]

      initialPositions.forEach(pos => {
        const node = createNode(pos.x, pos.y)
        nodesRef.current.push(node)
      })
      setNodes([...nodesRef.current])
    }

    resize()
    initNodes()
    animate()

    window.addEventListener('resize', resize)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', handleMouseMove)
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
            background: 'radial-gradient(circle, rgba(0,86,59,0.06) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Connection lines canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Workflow nodes */}
      {mounted && nodes.map((node) => {
        const IconComponent = node.icon
        const pulse = Math.sin(node.pulsePhase) * 0.1 + 1
        return (
          <div
            key={node.id}
            className="absolute pointer-events-none transition-none"
            style={{
              left: node.x,
              top: node.y,
              transform: `translate(-50%, -50%) scale(${node.scale * pulse})`,
              opacity: node.opacity * 0.85,
            }}
          >
            <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-2xl px-4 py-3 shadow-lg shadow-primary/5 flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{node.label}</span>
            </div>
          </div>
        )
      })}

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
