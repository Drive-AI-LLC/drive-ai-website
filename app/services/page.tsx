"use client"

import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Stop leaving money on every claim. We find the gaps, file the supplements, and track every dollar to recovery.",
    features: [
      { name: "Gap Analysis", detail: "Automated review of every estimate to identify missed or underpaid line items." },
      { name: "Xactimate Cross-Reference", detail: "Your scope compared against Xactimate pricing to maximize claim value." },
      { name: "Supplement Tracking", detail: "Real-time visibility into every supplement — filed, pending, or paid." },
    ],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "Be first on the door when a storm hits. Automated outreach gets your team moving before competitors show up.",
    features: [
      { name: "Area Targeting", detail: "Pinpoint affected neighborhoods using weather and damage data." },
      { name: "Automated Follow-Up", detail: "Multi-touch sequences that keep leads warm without manual effort." },
      { name: "Lead Tracking", detail: "See every lead's status — contacted, scheduled, closed — in one place." },
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            Our Systems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-5 max-w-3xl">
            Three systems. Measurable outcomes.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Purpose-built automation for roofing operations. Each system solves a specific revenue leak — so you can grow without adding headcount.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-background border-t border-border/40">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, index) => (
              <div key={service.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                
                {/* Left: Title & Description */}
                <div className="lg:sticky lg:top-32">
                  <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.25em] mb-4">
                    {service.tag}
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.1] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                {/* Right: Features */}
                <div className="space-y-6">
                  {service.features.map((feature) => (
                    <div key={feature.name} className="border-l-2 border-primary/20 pl-5 py-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1.5">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.03em] font-serif leading-[1.05] text-balance">
            See what AI can do for you.
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
            30 minutes. No commitment. We'll identify your highest-impact opportunity.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-7 rounded-full shadow-sm whitespace-nowrap">
              <Link href="/contact">
                Book a Call
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
