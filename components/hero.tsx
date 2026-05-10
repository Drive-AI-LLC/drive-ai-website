"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const systemStatus = [
  { system: "Supplement Recovery", status: "Active", note: "14 claims in review" },
  { system: "Storm Outreach", status: "Standby", note: "Trigger: hail event" },
  { system: "Production Coord.", status: "Active", note: "9 jobs in pipeline" },
]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">

          {/* Left: Headline */}
          <div className="space-y-8">
            <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em]">
              Drive AI &mdash; Roofing Operations
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground leading-[0.95] tracking-[-0.04em] font-serif">
              Revenue<br />
              systems<br />
              <span className="text-primary">for roofers.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Supplement recovery. Storm outreach. Production coordination. Systems that run without adding headcount.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button asChild size="lg" className="h-11 text-sm px-7 rounded-full shadow-sm transition-all duration-200">
                <Link href="/contact">
                  Schedule a Call
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 text-sm px-7 rounded-full transition-all duration-200">
                <Link href="/services">
                  View Solutions
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Operational status panel */}
          <div className="hidden lg:block">
            <div className="border border-border/50 bg-background">
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50">
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                  Operations Dashboard
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-primary/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Live
                </span>
              </div>

              {/* System rows */}
              {systemStatus.map((row, i) => (
                <div
                  key={row.system}
                  className={`flex items-center justify-between px-5 py-4 ${i < systemStatus.length - 1 ? "border-b border-border/30" : ""}`}
                >
                  <div>
                    <p className="text-[11px] font-semibold text-foreground tracking-[-0.01em]">{row.system}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5 font-mono">{row.note}</p>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 ${
                    row.status === "Active"
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground/50 bg-muted/50"
                  }`}>
                    {row.status}
                  </span>
                </div>
              ))}

              {/* Supplement detail */}
              <div className="border-t border-border/50 px-5 py-4 bg-muted/20">
                <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.15em] mb-3">Supplement Pipeline</p>
                <div className="space-y-2">
                  {[
                    { label: "Claims submitted", value: "14" },
                    { label: "Avg. supplement delta", value: "$4,200" },
                    { label: "Recovery rate", value: "91%" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground/70">{stat.label}</span>
                      <span className="text-[11px] font-semibold text-foreground font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storm trigger row */}
              <div className="border-t border-border/50 px-5 py-4">
                <p className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.15em] mb-3">Storm Response</p>
                <div className="space-y-2">
                  {[
                    { label: "Monitored zip codes", value: "340" },
                    { label: "Outreach sequences", value: "3 active" },
                    { label: "Avg. response time", value: "< 2 hrs" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground/70">{stat.label}</span>
                      <span className="text-[11px] font-semibold text-foreground font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
