"use client"

import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const columns = [
  {
    title: "You Upload",
    subline: "Just drop in your documents.",
    items: [
      "Adjuster's estimate (PDF)",
      "Roof measurement report",
      "Site and damage photos",
      "Supplier quote",
    ],
  },
  {
    title: "We Do the Rest",
    subline: "No action needed from you.",
    items: [
      "NOAA storm data",
      "Local building codes",
      "Manufacturer specs",
      "Xactimate regional pricing",
    ],
  },
  {
    title: "You Get Back",
    subline: "Ready to send to the adjuster.",
    items: [
      "Every missing line item identified",
      "Xactimate codes and quantities",
      "Written justifications",
      "Submission-ready PDF",
    ],
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

        <div className="flex flex-col md:flex-row md:items-stretch gap-5 lg:gap-0">
          {columns.map((col, index) => (
            <div key={col.title} className="flex md:flex-row md:items-center flex-1 min-w-0">
              <div
                ref={cardRefs[index].ref as React.RefObject<HTMLDivElement>}
                className={`reveal ${cardRefs[index].visible ? "is-visible" : ""} bg-background border border-border rounded-lg p-8 flex flex-col flex-1`}
                style={{ transitionDelay: cardRefs[index].visible ? `${index * 100}ms` : "0ms" }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-1 tracking-[-0.02em] leading-snug font-serif">
                  {col.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{col.subline}</p>
                <ul className="flex flex-col gap-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {index < columns.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 px-3">
                  <ArrowRight className="w-5 h-5 text-primary/50" />
                </div>
              )}
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
