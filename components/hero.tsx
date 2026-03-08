"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Mail, Table, FormInput, Database, Brain, BarChart3, Zap } from "lucide-react"

interface ChaoticElement {
  id: number
  x: number
  y: number
  baseX: number
  baseY: number
  organizedX: number
  organizedY: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  scale: number
  opacity: number
  type: 'document' | 'email' | 'spreadsheet' | 'form' | 'data'
  icon: typeof FileText
  label: string
  organized: number // 0 = chaotic, 1 = organized
  connectionStrength: number
}

interface DataParticle {
  x: number
  y: number
  targetX: number
  targetY: number
  progress: number
  speed: number
  opacity: number
}

const elementTypes = [
  { type: 'document' as const, icon: FileText, label: 'Documents' },
  { type: 'email' as const, icon: Mail, label: 'Emails' },
  { type: 'spreadsheet' as const, icon: Table, label: 'Spreadsheets' },
  { type: 'form' as const, icon: FormInput, label: 'Forms' },
  { type: 'data' as const, icon: Database, label: 'Data' },
]

const pipelineStages = [
  { icon: FormInput, label: 'Input' },
  { icon: Zap, label: 'Automate' },
  { icon: Brain, label: 'AI Process' },
  { icon: BarChart3, label: 'Results' },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [elements, setElements] = useState<ChaoticElement[]>([])
  const [mounted, setMounted] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const elementsRef = useRef<ChaoticElement[]>([])
  const particlesRef = useRef<DataParticle[]>([])
  const animationRef = useRef<number>()
  const organizationRef = useRef(0)

  useEffect(() => {
    setMounted(true)
    
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
    }

    const initElements = () => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const newElements: ChaoticElement[] = []
      
      // Create scattered elements around the edges
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.5
        const radius = 280 + Math.random() * 120
        const typeInfo = elementTypes[i % elementTypes.length]
        
        // Chaotic positions (scattered)
        const chaoticX = centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 100
        const chaoticY = centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 100
        
        // Organized positions (pipeline layout)
        const pipelineIndex = Math.floor(i / 2)
        const row = i % 2
        const organizedX = centerX - 300 + pipelineIndex * 200
        const organizedY = centerY + (row === 0 ? -60 : 60) + 180
        
        newElements.push({
          id: i,
          x: chaoticX,
          y: chaoticY,
          baseX: chaoticX,
          baseY: chaoticY,
          organizedX,
          organizedY,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          rotation: Math.random() * 30 - 15,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          scale: 0.9 + Math.random() * 0.2,
          opacity: 0.4 + Math.random() * 0.3,
          type: typeInfo.type,
          icon: typeInfo.icon,
          label: typeInfo.label,
          organized: 0,
          connectionStrength: 0,
        })
      }
      
      elementsRef.current = newElements
      setElements([...newElements])
    }

    const animate = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      // Calculate organization level based on mouse proximity to center
      const distFromCenter = Math.sqrt((mx - centerX) ** 2 + (my - centerY) ** 2)
      const maxDist = 500
      const targetOrg = mouseRef.current.active ? Math.max(0, 1 - distFromCenter / maxDist) : 0
      organizationRef.current += (targetOrg - organizationRef.current) * 0.02
      const org = organizationRef.current

      // Update elements
      elementsRef.current.forEach((el, i) => {
        // Interpolate between chaotic and organized positions
        const targetX = el.baseX + (el.organizedX - el.baseX) * org
        const targetY = el.baseY + (el.organizedY - el.baseY) * org
        
        // Add subtle floating motion when chaotic
        const floatX = Math.sin(Date.now() / 2000 + i) * 8 * (1 - org)
        const floatY = Math.cos(Date.now() / 2500 + i * 0.7) * 6 * (1 - org)
        
        el.x += (targetX + floatX - el.x) * 0.04
        el.y += (targetY + floatY - el.y) * 0.04
        
        // Rotation decreases as organization increases
        el.rotation += el.rotationSpeed * (1 - org)
        el.rotation *= 0.98 // Damping
        
        // Update organization state
        el.organized = org
        el.connectionStrength = org
        el.opacity = 0.5 + org * 0.4
      })

      // Draw connection lines when organized
      if (org > 0.1) {
        const sortedEls = [...elementsRef.current].sort((a, b) => a.organizedX - b.organizedX)
        
        for (let i = 0; i < sortedEls.length - 1; i++) {
          const el1 = sortedEls[i]
          const el2 = sortedEls[i + 1]
          
          const lineOpacity = org * 0.3
          
          // Draw curved connection
          ctx.beginPath()
          ctx.moveTo(el1.x, el1.y)
          const cpX = (el1.x + el2.x) / 2
          const cpY = Math.min(el1.y, el2.y) - 30 * org
          ctx.quadraticCurveTo(cpX, cpY, el2.x, el2.y)
          
          const gradient = ctx.createLinearGradient(el1.x, el1.y, el2.x, el2.y)
          gradient.addColorStop(0, `rgba(0, 86, 59, ${lineOpacity})`)
          gradient.addColorStop(0.5, `rgba(0, 86, 59, ${lineOpacity * 1.5})`)
          gradient.addColorStop(1, `rgba(0, 86, 59, ${lineOpacity})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2 * org
          ctx.stroke()
          
          // Animated flow dots
          if (org > 0.3) {
            const flowProgress = ((Date.now() / 1200) + i * 0.2) % 1
            const t = flowProgress
            const dotX = (1 - t) * (1 - t) * el1.x + 2 * (1 - t) * t * cpX + t * t * el2.x
            const dotY = (1 - t) * (1 - t) * el1.y + 2 * (1 - t) * t * cpY + t * t * el2.y
            
            ctx.beginPath()
            ctx.arc(dotX, dotY, 4 * org, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 86, 59, ${org * 0.8 * Math.sin(flowProgress * Math.PI)})`
            ctx.fill()
            
            // Glow effect
            ctx.beginPath()
            ctx.arc(dotX, dotY, 8 * org, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 86, 59, ${org * 0.2 * Math.sin(flowProgress * Math.PI)})`
            ctx.fill()
          }
        }
      }

      // Draw subtle background nodes when chaotic
      if (org < 0.8) {
        const nodeOpacity = (1 - org) * 0.15
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2 + Date.now() / 10000
          const radius = 200 + Math.sin(i * 1.5 + Date.now() / 3000) * 50
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius
          
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 86, 59, ${nodeOpacity})`
          ctx.fill()
        }
      }

      setElements([...elementsRef.current])
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
    initElements()
    animate()

    window.addEventListener('resize', resize)
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,86,59,0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Connection lines canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Floating chaotic elements */}
      {mounted && elements.map((el) => {
        const IconComponent = el.icon
        return (
          <div
            key={el.id}
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: el.x,
              top: el.y,
              transform: `translate(-50%, -50%) rotate(${el.rotation * (1 - el.organized)}deg) scale(${el.scale})`,
              opacity: el.opacity,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div 
              className="bg-background/95 backdrop-blur-sm border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              style={{
                borderColor: `rgba(0, 86, 59, ${0.15 + el.organized * 0.2})`,
                boxShadow: el.organized > 0.5 
                  ? `0 4px 20px rgba(0, 86, 59, ${el.organized * 0.15})` 
                  : '0 4px 12px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: `rgba(0, 86, 59, ${0.08 + el.organized * 0.12})`,
                }}
              >
                <IconComponent className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground/80">{el.label}</span>
            </div>
          </div>
        )
      })}

      {/* Pipeline stages indicator - shows when organized */}
      {mounted && organizationRef.current > 0.5 && (
        <div 
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6"
          style={{ opacity: Math.max(0, (organizationRef.current - 0.5) * 2) }}
        >
          {pipelineStages.map((stage, i) => {
            const StageIcon = stage.icon
            return (
              <div key={i} className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <StageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{stage.label}</span>
                </div>
                {i < pipelineStages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/40" />
                )}
              </div>
            )
          })}
        </div>
      )}

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
