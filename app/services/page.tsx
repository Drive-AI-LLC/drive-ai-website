"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Stop leaving money on every claim. We find the gaps, file the supplements, and track every dollar to recovery.",
    features: [
      { name: "Gap Analysis", detail: "Automated review of every estimate to identify missed or underpaid line items." },
      { name: "Xactimate Cross-Reference", detail: "Your scope compared to Xactimate pricing to maximize claim value." },
      { name: "Supplement Tracking", detail: "Real-time visibility into every supplement — filed, pending, or paid." },
    ],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "Be first at the door when a storm hits. Automated outreach gets your team moving before competitors show up.",
    features: [
      { name: "Area Targeting", detail: "Pinpoint affected neighborhoods using weather and damage data." },
      { name: "Automated Follow-Up", detail: "Multi-touch sequences that keep leads warm without manual effort." },
      { name: "Lead Tracking", detail: "See every lead's status (contacted, scheduled, closed) in one place." },
    ],
  },
  {
    tag: "Production Operations",
    title: "Production Coordination System",
    description: "No more jobs stalling between sales and production. Every handoff is clean, every crew is scheduled, every job visible.",
    features: [
      { name: "Sales-to-Production Handoff", detail: "Seamless transition from signed contract to scheduled work." },
      { name: "Crew Scheduling", detail: "Assign crews, manage availability, and eliminate scheduling conflicts." },
      { name: "Job Visibility", detail: "Real-time status on every job — from permit to completion." },
    ],
  },
]

function FeatureCard({ name, detail, delay, rightAligned = false }: { name: string; detail: string; delay: number; rightAligned?: boolean }) {
  const { ref, visible } = useScrollReveal(0.2)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-1 overflow-hidden ${rightAligned ? "border-r-2 border-primary/20 pr-5 text-right" : "border-l-2 border-primary/20 pl-5"}`}
    >
      <div
        className="transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : rightAligned ? "translateX(28px)" : "translateX(-28px)",
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <h3 className="text-base font-semibold text-foreground mb-1.5">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {detail}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const heroReveal = useScrollReveal(0.1)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-muted/30">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div
            ref={heroReveal.ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${heroReveal.visible ? "is-visible" : ""}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              Our Systems
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-5 max-w-3xl">
              Explore our systems.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Purpose-built automation for roofing operations. Each system solves a specific revenue leak — so you can grow without adding headcount.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-background border-t border-border/40">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="divide-y divide-border/40">
            
            {services.map((service, index) => {
              const flipped = service.title === "Storm Outreach System"
              return (
                <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, '-')} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start py-16 lg:py-24 first:pt-0 last:pb-0`}>

                  {/* Title & Description — left on desktop, or right when flipped */}
                  <div className={`lg:sticky lg:top-32 ${flipped ? "order-1 lg:order-2 lg:text-right" : ""}`}>
                    <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.25em] mb-4">
                      {service.tag}
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.1] mb-4">
                      {service.title}
                    </h2>
                    <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md ${flipped ? "lg:ml-auto" : ""}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className={`space-y-6 ${flipped ? "order-2 lg:order-1" : ""}`}>
                    {service.features.map((feature, fi) => (
                      <FeatureCard
                        key={feature.name}
                        name={feature.name}
                        detail={feature.detail}
                        delay={fi * 120}
                        rightAligned={flipped}
                      />
                    ))}
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="See how our systems fit your operation."
        supporting={
          <>
            Book a short introductory call to explore where <em>Drive</em> AI can support your workflows and growth.
          </>
        }
      />

      <Footer />
    </main>
  )
}
