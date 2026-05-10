"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function OperationalVisual() {
  // Node positions for the abstract workflow graph
  const nodes = [
    { id: "a", cx: 48,  cy: 48,  delay: "0ms",    label: "Supplement" },
    { id: "b", cx: 160, cy: 26,  delay: "400ms",   label: "Storm" },
    { id: "c", cx: 260, cy: 72,  delay: "800ms",   label: "Production" },
    { id: "d", cx: 112, cy: 112, delay: "1200ms",  label: "Scheduling" },
    { id: "e", cx: 210, cy: 136, delay: "1600ms",  label: "Handoff" },
  ]

  const edges = [
    { x1: 48,  y1: 48,  x2: 160, y2: 26,  delay: "200ms"  },
    { x1: 160, y1: 26,  x2: 260, y2: 72,  delay: "600ms"  },
    { x1: 48,  y1: 48,  x2: 112, y2: 112, delay: "400ms"  },
    { x1: 112, y1: 112, x2: 210, y2: 136, delay: "800ms"  },
    { x1: 260, y1: 72,  x2: 210, y2: 136, delay: "1000ms" },
    { x1: 160, y1: 26,  x2: 112, y2: 112, delay: "700ms"  },
  ]

  return (
    <div
      className="hidden lg:block animate-fade-up"
      style={{ animationDelay: "300ms" }}
      aria-hidden="true"
    >
      {/* Label */}
      <p className="text-[9px] font-semibold text-muted-foreground/30 uppercase tracking-[0.3em] mb-5">
        Operations
      </p>

      {/* SVG network */}
      <svg
        viewBox="0 0 308 162"
        className="w-full max-w-[300px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Edges */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.x1} y1={e.y1}
            x2={e.x2} y2={e.y2}
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 4"
            className="text-border/50 animate-flow-dash"
            style={{ animationDelay: e.delay, animationDuration: "3s" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            {/* Outer ring */}
            <circle
              cx={n.cx} cy={n.cy} r="9"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border/40"
            />
            {/* Inner filled dot */}
            <circle
              cx={n.cx} cy={n.cy} r="3.5"
              fill="currentColor"
              className="text-primary/60 animate-pulse-dot"
              style={{ animationDelay: n.delay }}
            />
            {/* Node label */}
            <text
              x={n.cx}
              y={n.cy + 22}
              textAnchor="middle"
              fontSize="7"
              fontFamily="inherit"
              letterSpacing="0.08em"
              fill="currentColor"
              className="text-muted-foreground/40 uppercase"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Divider */}
      <div className="mt-8 border-t border-border/30" />

      {/* System status rows */}
      <div className="mt-5 flex flex-col gap-3.5">
        {[
          { name: "Supplement Recovery", state: "Active" },
          { name: "Storm Outreach",      state: "Active" },
          { name: "Production Handoff",  state: "Active" },
        ].map((row, i) => (
          <div
            key={row.name}
            className="flex items-center justify-between animate-fade-up"
            style={{ animationDelay: `${500 + i * 80}ms` }}
          >
            <span className="text-[11px] text-muted-foreground/60 tracking-tight">
              {row.name}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse-dot" style={{ animationDelay: `${i * 400}ms` }} />
              <span className="text-[9px] text-primary/50 uppercase tracking-[0.15em]">
                {row.state}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_260px] gap-20 lg:gap-28 items-center">

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

          {/* Right: operational network visual */}
          <OperationalVisual />

        </div>
      </div>
    </section>
  )
}
