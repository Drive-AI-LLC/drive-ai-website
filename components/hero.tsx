"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Animated roofing job pipeline canvas
function PipelineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0
    let t = 0

    // Brand primary approx rgb
    const P = { r: 34, g: 85, b: 60 }

    const STAGES = ["Lead", "Supplement", "Approved", "Scheduled", "Complete"]
    const NUM_JOBS = 7

    interface Job {
      id: number
      progress: number // 0–1 across pipeline
      speed: number
      opacity: number
      yOffset: number
    }

    const jobs: Job[] = []

    function init() {
      jobs.length = 0
      for (let i = 0; i < NUM_JOBS; i++) {
        jobs.push({
          id: i,
          progress: Math.random(),
          speed: 0.00018 + Math.random() * 0.00012,
          opacity: 0.18 + Math.random() * 0.25,
          yOffset: (Math.random() - 0.5) * 18,
        })
      }
    }

    function resize() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w * devicePixelRatio
      canvas!.height = h * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      const padX = w * 0.08
      const lineY = h * 0.56
      const lineW = w - padX * 2

      // Stage node positions
      const nodeXs = STAGES.map((_, i) => padX + (i / (STAGES.length - 1)) * lineW)

      // Main pipeline line
      ctx!.beginPath()
      ctx!.strokeStyle = `rgba(${P.r},${P.g},${P.b},0.10)`
      ctx!.lineWidth = 1
      ctx!.moveTo(padX, lineY)
      ctx!.lineTo(padX + lineW, lineY)
      ctx!.stroke()

      // Animated progress fill — slow crawl from left
      const fillProgress = ((Math.sin(t * 0.0003) + 1) / 2) * 0.85 + 0.1
      const grad = ctx!.createLinearGradient(padX, 0, padX + lineW, 0)
      grad.addColorStop(0, `rgba(${P.r},${P.g},${P.b},0.40)`)
      grad.addColorStop(fillProgress, `rgba(${P.r},${P.g},${P.b},0.22)`)
      grad.addColorStop(Math.min(fillProgress + 0.05, 1), `rgba(${P.r},${P.g},${P.b},0)`)
      ctx!.beginPath()
      ctx!.strokeStyle = grad
      ctx!.lineWidth = 1.5
      ctx!.moveTo(padX, lineY)
      ctx!.lineTo(padX + lineW * fillProgress, lineY)
      ctx!.stroke()

      // Stage nodes
      nodeXs.forEach((nx, i) => {
        const stageProgress = i / (STAGES.length - 1)
        const active = stageProgress <= fillProgress
        const nodeOpacity = active ? 0.55 : 0.18

        // Outer ring
        ctx!.beginPath()
        ctx!.arc(nx, lineY, 5.5, 0, Math.PI * 2)
        ctx!.strokeStyle = `rgba(${P.r},${P.g},${P.b},${nodeOpacity * 0.5})`
        ctx!.lineWidth = 1
        ctx!.stroke()

        // Inner dot
        ctx!.beginPath()
        ctx!.arc(nx, lineY, 2.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${P.r},${P.g},${P.b},${nodeOpacity})`
        ctx!.fill()

        // Stage label
        ctx!.font = `500 10px 'Open Sans', system-ui, sans-serif`
        ctx!.textAlign = "center"
        ctx!.fillStyle = `rgba(${P.r},${P.g},${P.b},${active ? 0.45 : 0.18})`
        ctx!.fillText(STAGES[i], nx, lineY + 20)
      })

      // Job markers — small circles moving along the pipeline
      for (const job of jobs) {
        const jx = padX + job.progress * lineW
        const jy = lineY + job.yOffset

        // Connecting dotted line to pipeline
        ctx!.beginPath()
        ctx!.setLineDash([2, 3])
        ctx!.strokeStyle = `rgba(${P.r},${P.g},${P.b},${job.opacity * 0.3})`
        ctx!.lineWidth = 0.5
        ctx!.moveTo(jx, lineY)
        ctx!.lineTo(jx, jy - 6)
        ctx!.stroke()
        ctx!.setLineDash([])

        // Job dot
        ctx!.beginPath()
        ctx!.arc(jx, jy, 3, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${P.r},${P.g},${P.b},${job.opacity})`
        ctx!.fill()
      }
    }

    function tick() {
      t++
      for (const job of jobs) {
        job.progress += job.speed
        if (job.progress > 1.02) {
          job.progress = -0.02
          job.opacity = 0.18 + Math.random() * 0.25
          job.yOffset = (Math.random() - 0.5) * 18
        }
      }
      draw()
      animId = requestAnimationFrame(tick)
    }

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)
    resize()
    init()
    tick()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[94svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      <PipelineCanvas />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          <p
            className="animate-fade-up text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-8"
            style={{ animationDelay: "0ms" }}
          >
            Drive AI &mdash; Roofing Operations
          </p>

          <h1
            className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-bold text-foreground leading-[0.95] tracking-[-0.04em] font-serif mb-8"
            style={{ animationDelay: "80ms" }}
          >
            Revenue systems<br />
            built for<br />
            <span className="relative inline-block text-primary">
              roofing.
              <span
                className="animate-draw-line absolute bottom-0 left-0 h-[2px] bg-primary/30"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p
            className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
            style={{ animationDelay: "160ms" }}
          >
            Supplement recovery. Storm outreach. Production coordination.
            Systems that run without adding headcount.
          </p>

          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg" className="h-11 text-sm px-7 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 text-sm px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5">
              <Link href="/services">
                View Solutions
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
