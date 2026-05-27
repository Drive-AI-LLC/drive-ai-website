"use client"

import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "AI-powered estimate review that catches missed line items, outdated pricing, and underpayments before you close the claim.",
    href: "/services#insurance-supplement-system",
  },
  {
    tag: "Claim Analysis",
    title: "Estimate Review",
    description: "Upload any adjuster estimate and receive a detailed breakdown of discrepancies, code deficiencies, and pricing gaps.",
    href: "/services#estimate-review",
  },
  {
    tag: "Supplement Workflow",
    title: "Supplement Justification Reports",
    description: "Auto-generated, carrier-ready supplement documentation with line-by-line justification for every flagged item.",
    href: "/services#supplement-reports",
  },
]

export function SolutionSection() {
  const header = useScrollReveal(0.2)
  const card0 = useScrollReveal(0.15)
  const card1 = useScrollReveal(0.15)
  const card2 = useScrollReveal(0.15)
  const cardRefs = [card0, card1, card2]

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 reveal ${header.visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">The Platform</p>
          <h2 className="text-3xl sm:text-3xl lg:text-[2.625rem] font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            One system. Built for <span className="text-primary">supplement recovery</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              href={solution.href}
              ref={cardRefs[index].ref as React.RefObject<HTMLAnchorElement>}
              className={`reveal ${cardRefs[index].visible ? "is-visible" : ""} bg-background border border-border rounded-lg p-8 flex flex-col group transition-colors duration-300`}
              style={{ transitionDelay: cardRefs[index].visible ? `${index * 100}ms` : "0ms" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgb(1, 86, 59)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <p className="text-[10px] font-semibold text-primary uppercase tracking-[0.22em] mb-5">
                {solution.tag}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-[-0.02em] leading-snug font-serif">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground bg-muted/30 border border-border/60 px-6 py-3 rounded-xl hover:bg-muted/50 hover:shadow-md hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
