"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    step: "01",
    title: "Upload Your Estimate",
    description: "Drop in the adjuster's PDF. Drive AI reads every line item and flags what's missing or underpaid.",
  },
  {
    step: "02",
    title: "AI Builds Your Case",
    description: "Drive AI pulls supporting documentation, Xactimate codes, and justifications for every gap it finds.",
  },
  {
    step: "03",
    title: "Download & Submit",
    description: "You get a professional, submission-ready supplement package to send directly to the adjuster.",
  },
]

export function SolutionSection() {
  const header = useScrollReveal(0.2)
  const card0 = useScrollReveal(0.15)
  const card1 = useScrollReveal(0.15)
  const card2 = useScrollReveal(0.15)
  const cardRefs = [card0, card1, card2]

  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 reveal ${header.visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-3xl lg:text-[2.625rem] font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            From estimate to supplement. In minutes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {steps.map((step, index) => (
            <div
              key={step.step}
              ref={cardRefs[index].ref as React.RefObject<HTMLDivElement>}
              className={`reveal ${cardRefs[index].visible ? "is-visible" : ""} bg-background border border-border rounded-lg p-8 flex flex-col`}
              style={{ transitionDelay: cardRefs[index].visible ? `${index * 100}ms` : "0ms" }}
            >
              <p className="text-[10px] font-semibold text-primary uppercase tracking-[0.22em] mb-5">
                {step.step}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-[-0.02em] leading-snug font-serif">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo placeholder */}
        <div className="mt-7 rounded-xl bg-foreground/90 flex items-center justify-center py-16 px-8">
          <p className="text-sm font-medium text-primary/60 tracking-wide">Product demo coming soon</p>
        </div>

      </div>
    </section>
  )
}
