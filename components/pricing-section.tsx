'use client'

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import React from "react"

export function PricingSection() {
  const header = useScrollReveal(0.2)
  const card = useScrollReveal(0.15)

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 reveal ${header.visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-3xl lg:text-[2.625rem] font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-3">
            Simple pricing. Locked in forever.
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Lock in your rate today. Whatever you pay now is your price for life.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div
            ref={card.ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${card.visible ? "is-visible" : ""} bg-background border border-border rounded-lg p-8 flex flex-col items-center text-center max-w-md w-full`}
          >
            <p className="text-4xl font-bold text-foreground tracking-[-0.03em] font-serif mb-6">
              $29<span className="text-lg text-muted-foreground font-normal"> per supplement</span>
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              Lock in your rate forever. Early adopters always pay $29 per supplement.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No subscription. Pay only for what you use.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">First supplement free. No card required.</p>
          <Button asChild size="lg" className="h-11 text-sm px-7 shadow-lg shadow-primary/20">
            <a href="https://supplement.driveai.llc" target="_blank" rel="noopener noreferrer">
              Try It Free
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}
