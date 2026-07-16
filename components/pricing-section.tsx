'use client'

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import React from "react"

export function PricingSection() {
  const header = useScrollReveal(0.2)
  const card = useScrollReveal(0.15)

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-background border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`mb-10 reveal ${header.visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-3xl lg:text-[2.625rem] font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-3">
            Simple pricing. Locked in forever.
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Rates shown are for new sign-ups. Early adopters keep their original locked-in rate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 mb-12">
          {/* A la Carte */}
          <div
            ref={card.ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${card.visible ? "is-visible" : ""} border border-border/60 rounded-lg p-6 flex flex-col bg-background`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 inline-block px-3 py-1 rounded-full" style={{ backgroundColor: '#E8F3ED', color: '#2D5A3D' }}>
              A La Carte
            </span>
            <p className="text-2xl font-bold tracking-[-0.03em] font-serif mb-1" style={{ color: '#141C2E' }}>
              $59
            </p>
            <p className="text-xs text-muted-foreground mb-4">per supplement</p>
            <p className="text-sm font-semibold text-foreground mb-2">No subscription required</p>
            <p className="text-sm text-muted-foreground">Pay only for what you use, no commitment</p>
          </div>

          {/* Starter */}
          <div className={`reveal ${card.visible ? "is-visible" : ""} border border-border/60 rounded-lg p-6 flex flex-col bg-background`}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 inline-block px-3 py-1 rounded-full" style={{ backgroundColor: '#E8F3ED', color: '#2D5A3D' }}>
              Starter
            </span>
            <p className="text-2xl font-bold tracking-[-0.03em] font-serif mb-1" style={{ color: '#141C2E' }}>
              $499
            </p>
            <p className="text-xs text-muted-foreground mb-4">per month</p>
            <p className="text-sm font-semibold text-foreground mb-2">15 supplements included</p>
            <p className="text-sm text-muted-foreground">Additional supplements $49 each</p>
          </div>

          {/* Pro - Most Popular */}
          <div
            className="border-2 rounded-lg p-6 flex flex-col bg-background relative"
            style={{ borderColor: '#0F6E56' }}
          >
            <div className="absolute -top-3 left-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] inline-block px-3 py-1 rounded-full bg-primary text-white" style={{ backgroundColor: '#0F6E56', color: 'white' }}>
                Most Popular
              </span>
            </div>
            <p className="text-2xl font-bold tracking-[-0.03em] font-serif mb-1 mt-6" style={{ color: '#141C2E' }}>
              $899
            </p>
            <p className="text-xs text-muted-foreground mb-4">per month</p>
            <p className="text-sm font-semibold text-foreground mb-2">30 supplements included</p>
            <p className="text-sm text-muted-foreground">Additional supplements $42 each, unused supplements roll over</p>
          </div>

          {/* Enterprise */}
          <div className={`reveal ${card.visible ? "is-visible" : ""} border border-border/60 rounded-lg p-6 flex flex-col bg-background`}>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 inline-block px-3 py-1 rounded-full" style={{ backgroundColor: '#E8F3ED', color: '#2D5A3D' }}>
              Enterprise
            </span>
            <p className="text-2xl font-bold tracking-[-0.03em] font-serif mb-1" style={{ color: '#141C2E' }}>
              Custom
            </p>
            <p className="text-xs text-muted-foreground mb-4">pricing</p>
            <p className="text-sm font-semibold text-foreground mb-2">For firms processing 30+ supplements/month</p>
            <p className="text-sm text-muted-foreground">Volume pricing, custom terms, dedicated onboarding</p>
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
