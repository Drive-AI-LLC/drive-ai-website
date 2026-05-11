'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 lg:items-start">

            {/* Left column */}
            <div className="pt-6 flex flex-col gap-10">

              {/* Header */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                  Book a Call
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-5">
                  Explore what&apos;s possible.
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  Pick a time that works for you. We&apos;ll learn about your operation and identify where our systems can make the biggest impact.
                </p>
              </div>

              {/* Reassurance lines */}
              <div className="flex flex-col gap-2.5">
                {[
                  "Built for roofing companies",
                  "No-pressure introductory conversation",
                  "Focused on operations and growth",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{line}</span>
                  </div>
                ))}
              </div>

              {/* Email fallback */}
              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-1.5">Questions before booking?</p>
                <a
                  href="mailto:inquiries@driveai.llc"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-150"
                >
                  inquiries@driveai.llc
                </a>
              </div>

            </div>

            {/* Calendly embed */}
            <div className="w-full border border-border/40 bg-background overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/danika-driveai/27min?hide_event_type_details=1&primary_color=01563b"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
