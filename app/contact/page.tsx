'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

          {/* Two-column layout: Header left, Calendly right */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 lg:items-start mb-14">
            
            {/* Header */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                Book a Call
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-5">
                Explore what&apos;s possible.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Pick a time that works for you. We&apos;ll learn about your operation and walk through where our systems could help streamline workflows, improve coordination, and support growth.
              </p>
            </div>

            {/* Calendly embed */}
            <div className="w-full lg:w-[420px] border border-border/40 bg-background overflow-hidden rounded-lg">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/danika-driveai/27min?hide_event_type_details=1&primary_color=01563b" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

          </div>

          {/* Email fallback */}
          <div className="pt-10 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-2">Questions before booking?</p>
            <a
              href="mailto:inquiries@driveai.llc"
              className="text-base font-medium text-foreground hover:text-primary transition-colors duration-150"
            >
              inquiries@driveai.llc
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
