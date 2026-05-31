'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [scriptReady, setScriptReady] = useState(false)

  // Lazy-load the Calendly script after page content renders
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => setScriptReady(true)
      document.body.appendChild(script)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Listen for Calendly's event to know when the widget has painted
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_type_viewed' || e.data?.event === 'calendly.profile_page_viewed') {
        setCalendlyLoaded(true)
      }
    }
    window.addEventListener('message', handler)
    // Fallback: mark as loaded after 4s regardless
    const fallback = setTimeout(() => setCalendlyLoaded(true), 4000)
    return () => {
      window.removeEventListener('message', handler)
      clearTimeout(fallback)
    }
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
                  Let&apos;s talk about your claims.
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  Pick a time that works for you. We&apos;ll learn about your operation and show you exactly how Drive <em>AI</em> can help you recover more on every claim.
                </p>
              </div>

              {/* Great fit block */}
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60">
                  This is a great fit if...
                </p>
                {[
                  "You're a residential roofer doing storm or insurance work",
                  "You submit claims and feel like adjusters keep underpaying",
                  "You want to recover more per job without adding more work",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2.5">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
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

            {/* Calendly embed with loading state */}
            <div
              className="relative w-full border border-border/40 bg-background overflow-hidden"
              style={{ height: '700px' }}
            >
              {/* Skeleton placeholder */}
              {!calendlyLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-muted/20 px-8">
                  {/* Shimmer rows */}
                  <div className="w-full flex flex-col gap-3 mb-2">
                    <div className="h-3 rounded bg-border/60 animate-pulse w-2/3 mx-auto" />
                    <div className="h-3 rounded bg-border/50 animate-pulse w-1/2 mx-auto" />
                  </div>
                  {/* Spinner */}
                  <div className="w-8 h-8 rounded-full border-2 border-border border-t-primary animate-spin" />
                  <p className="text-sm text-muted-foreground tracking-wide">Loading calendar&hellip;</p>
                  {/* Fake time slot skeletons */}
                  <div className="w-full flex flex-col gap-2 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-10 rounded-lg bg-border/40 animate-pulse"
                        style={{ animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Calendly widget — always rendered so it loads in background */}
              <div
                className={`calendly-inline-widget w-full h-full transition-opacity duration-500 ${calendlyLoaded ? 'opacity-100' : 'opacity-0'}`}
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
