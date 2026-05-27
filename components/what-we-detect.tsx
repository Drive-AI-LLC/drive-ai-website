"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const detections = [
  {
    label: "Missed Code Upgrades",
    description: "Local building codes require upgrades that adjusters routinely omit — drip edge, ice & water, starter strip, and more.",
  },
  {
    label: "Outdated Xactimate Pricing",
    description: "Carrier estimates often use stale pricing that doesn't reflect current material and labor costs in your market.",
  },
  {
    label: "Under-Scoped Labor",
    description: "Complex roof geometries, steep pitches, and access conditions are frequently under-estimated or excluded entirely.",
  },
  {
    label: "Missing Steep Charges",
    description: "High-pitch roofs require additional labor and safety equipment. These surcharges are often missing from initial estimates.",
  },
  {
    label: "Incorrect Waste Calculations",
    description: "Hip roofs, cut-up valleys, and complex shapes demand higher waste factors. Adjuster defaults rarely account for actual waste.",
  },
  {
    label: "Incomplete Line Items",
    description: "Permits, dumpsters, haul-off, flashing replacements, and accessory items are routinely left off adjuster scopes.",
  },
]

export function WhatWeDetect() {
  const header = useScrollReveal(0.2)

  return (
    <section id="what-we-detect" className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 reveal ${header.visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Claim Analysis</p>
          <h2 className="text-3xl sm:text-3xl lg:text-[2.625rem] font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-3">
            What we detect.
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            Common issues roofing companies lose revenue on — caught automatically before you submit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
          {detections.map((item) => (
            <div
              key={item.label}
              className="bg-background p-7 flex flex-col gap-2 group hover:bg-muted/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-sm font-semibold text-foreground tracking-[-0.01em]">
                  {item.label}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
