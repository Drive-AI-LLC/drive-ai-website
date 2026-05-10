"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function RoofGraphic() {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.07" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Ground line */}
      <line x1="40" y1="272" x2="440" y2="272" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />

      {/* Main house walls */}
      <rect x="110" y="180" width="260" height="92" fill="url(#wallGrad)" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />

      {/* Main roof — left slope */}
      <polygon points="90,180 240,80 240,180" fill="url(#roofGrad)" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      {/* Main roof — right slope */}
      <polygon points="390,180 240,80 240,180" fill="url(#roofGrad)" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />

      {/* Ridge cap */}
      <line x1="240" y1="80" x2="240" y2="84" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
      {/* Eave lines — subtle shingle rows left */}
      {[110, 130, 150, 170].map((y, i) => {
        const progress = (y - 80) / 100
        const x1 = 90 + progress * (240 - 90)
        return (
          <line key={`sl${i}`} x1={x1} y1={y} x2={240} y2={y} stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="4 6" />
        )
      })}
      {/* Eave lines — right */}
      {[110, 130, 150, 170].map((y, i) => {
        const progress = (y - 80) / 100
        const x2 = 390 - progress * (390 - 240)
        return (
          <line key={`sr${i}`} x1={240} y1={y} x2={x2} y2={y} stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="4 6" />
        )
      })}

      {/* Door */}
      <rect x="214" y="222" width="52" height="50" rx="1" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="226" y="234" width="12" height="16" rx="1" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
      <rect x="242" y="234" width="12" height="16" rx="1" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />

      {/* Windows */}
      <rect x="130" y="200" width="44" height="36" rx="1" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="152" y1="200" x2="152" y2="236" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.8" />
      <line x1="130" y1="218" x2="174" y2="218" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.8" />

      <rect x="306" y="200" width="44" height="36" rx="1" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="328" y1="200" x2="328" y2="236" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.8" />
      <line x1="306" y1="218" x2="350" y2="218" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.8" />

      {/* Chimney */}
      <rect x="290" y="96" width="30" height="50" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="287" y="92" width="36" height="8" fill="currentColor" fillOpacity="0.13" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />

      {/* Small accent tree left */}
      <line x1="72" y1="272" x2="72" y2="230" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
      <ellipse cx="72" cy="218" rx="14" ry="18" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

      {/* Small accent tree right */}
      <line x1="408" y1="272" x2="408" y2="240" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
      <ellipse cx="408" cy="228" rx="14" ry="18" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[88svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <div>
            <h1
              className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[0.97] tracking-[-0.04em] font-serif mb-8"
              style={{ animationDelay: "0ms" }}
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
              style={{ animationDelay: "80ms" }}
            >
              Supplement recovery. Storm outreach. Production coordination.
              Systems that run without adding headcount.
            </p>

            <div
              className="animate-fade-up flex flex-col sm:flex-row gap-3"
              style={{ animationDelay: "160ms" }}
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

          {/* Right — roof graphic */}
          <div
            className="animate-fade-up hidden lg:flex items-center justify-center text-primary"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-full max-w-[480px]">
              <RoofGraphic />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
