"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function RoofVisual() {
  return (
    <div className="animate-roof-in hidden lg:flex flex-col gap-0 border border-border/40 divide-y divide-border/40" style={{ animationDelay: "400ms" }}>
      {/* Roof SVG */}
      <div className="p-6 pb-4">
        <p className="text-[9px] font-semibold text-muted-foreground/40 uppercase tracking-[0.3em] mb-5">
          Roofing Operations
        </p>
        <svg viewBox="0 0 260 140" className="w-full" aria-hidden="true">
          {/* Roof outline */}
          <polyline
            points="20,110 130,28 240,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground/20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ridge cap */}
          <line x1="130" y1="28" x2="130" y2="38" stroke="currentColor" strokeWidth="1.5" className="text-primary/30" strokeLinecap="round" />
          {/* Left slope detail */}
          <line x1="20" y1="110" x2="75" y2="69" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-border/60" />
          {/* Right slope detail */}
          <line x1="240" y1="110" x2="185" y2="69" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="text-border/60" />
          {/* Eave line */}
          <line x1="20" y1="110" x2="240" y2="110" stroke="currentColor" strokeWidth="1" className="text-foreground/15" />

          {/* Flow line: supplement → storm → production */}
          <path
            d="M 55 95 Q 130 55 205 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 4"
            className="text-primary/40 animate-flow-dash"
            strokeLinecap="round"
          />

          {/* Node: Supplement */}
          <circle cx="55" cy="95" r="3" fill="currentColor" className="text-primary animate-pulse-dot" style={{ animationDelay: "0ms" }} />
          {/* Node: Storm */}
          <circle cx="130" cy="62" r="3" fill="currentColor" className="text-primary animate-pulse-dot" style={{ animationDelay: "800ms" }} />
          {/* Node: Production */}
          <circle cx="205" cy="95" r="3" fill="currentColor" className="text-primary animate-pulse-dot" style={{ animationDelay: "1600ms" }} />
        </svg>
      </div>

      {/* Three system rows */}
      {[
        { label: "Supplement", status: "Recovery" },
        { label: "Storm", status: "Outreach" },
        { label: "Production", status: "Coordination" },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between px-6 py-3 group transition-colors duration-150 hover:bg-muted/30">
          <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-150">
            {row.label}
          </span>
          <span className="text-[10px] text-primary/60 uppercase tracking-[0.15em]">
            {row.status}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_280px] gap-16 lg:gap-20 items-center">

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

          {/* Right: roofing workflow visual */}
          <RoofVisual />

        </div>
      </div>
    </section>
  )
}
