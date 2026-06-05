'use client'

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import React from "react"

const plans = [
  {
    name: "Starter",
    price: "$297/mo",
    description: "Up to 10 supplements per month",
    revenueShare: "5%",
    popular: false,
  },
  {
    name: "Growth",
    price: "$497/mo",
    description: "Up to 25 supplements per month",
    revenueShare: "4%",
    popular: true,
  },
  {
    name: "Pro",
    price: "$697/mo",
    description: "Unlimited supplements per month",
    revenueShare: "3%",
    popular: false,
  },
]

export function PricingSection() {
  const header = useScrollReveal(0.2)
  const card0 = useScrollReveal(0.15)
  const card1 = useScrollReveal(0.15)
  const card2 = useScrollReveal(0.15)
  const cardRefs = [card0, card1, card2]

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
            Your rate never increases. Whatever you pay on day one is your price for life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 mb-10">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={cardRefs[index].ref as React.RefObject<HTMLDivElement>}
              className={`reveal ${cardRefs[index].visible ? "is-visible" : ""} relative bg-background border rounded-lg p-8 flex flex-col ${plan.popular ? "border-primary" : "border-border"}`}
              style={{ transitionDelay: cardRefs[index].visible ? `${index * 100}ms` : "0ms" }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 text-[10px] font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <p className="text-[10px] font-semibold text-primary uppercase tracking-[0.22em] mb-5">
                {plan.name}
              </p>
              <p className="text-4xl font-bold text-foreground tracking-[-0.03em] font-serif mb-1">
                {plan.price}
              </p>
              <p className="text-base text-foreground/80 font-medium mb-4">
                + {plan.revenueShare} revenue share
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 text-center">
          <div className="max-w-lg w-full bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
            <p className="text-sm text-primary font-medium leading-relaxed">
              Revenue share is invoiced monthly based on what you report recovering. You only pay it when you get paid.
            </p>
          </div>
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
