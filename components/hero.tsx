"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

function StatTicker({ label, value, suffix = "", delay = 0 }: { label: string; value: number; suffix?: string; delay?: number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1200
      const steps = 40
      const increment = value / steps
      let current = 0
      const interval = setInterval(() => {
        current = Math.min(current + increment, value)
        setDisplay(Math.round(current))
        if (current >= value) clearInterval(interval)
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return (
    <div className="animate-count-in py-4 border-b border-border/20 last:border-0" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-2xl font-bold text-primary-foreground/90 font-serif tracking-[-0.03em]">
        {display.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.2em] mt-0.5">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 lg:gap-24 items-center">

          {/* Left: headline */}
          <div>
            <p className="animate-fade-up text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-8" style={{ animationDelay: "0ms" }}>
              Drive AI &mdash; Roofing Operations
            </p>

            <h1
              className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.97] tracking-[-0.04em] font-serif mb-8"
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
              className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10"
              style={{ animationDelay: "160ms" }}
            >
              Supplement recovery. Storm outreach. Production coordination.<br className="hidden sm:block" />
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

          {/* Right: operational stats panel */}
          <div
            className="animate-fade-up hidden lg:block border border-border/40 bg-foreground rounded-sm px-6 py-5"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-[9px] font-semibold text-primary-foreground/30 uppercase tracking-[0.3em] mb-4">
              System Activity
            </p>
            <StatTicker label="Supplements recovered this month" value={47800} suffix="+" delay={600} />
            <StatTicker label="Jobs coordinated this week" value={24} delay={750} />
            <StatTicker label="Avg. storm response time (hrs)" value={3} delay={900} />
            <StatTicker label="Lead follow-ups automated" value={312} delay={1050} />
          </div>

        </div>
      </div>
    </section>
  )
}
