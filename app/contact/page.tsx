import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Book a Call | Drive AI",
  description: "Schedule a call with Drive AI. We'll learn about your operation and walk through where our systems could help.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              Book a Call
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-5">
              Explore what&apos;s possible.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Pick a time that works for you. We&apos;ll learn about your operation and walk through where our systems could help streamline workflows, improve coordination, and support growth.
            </p>
          </div>

          {/* Calendly embed */}
          <div className="w-full border border-border/40 bg-background overflow-hidden">
            <iframe
              src="https://calendly.com/driveai"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call with Drive AI"
              className="w-full"
            />
          </div>

          {/* Email fallback */}
          <div className="mt-14 pt-10 border-t border-border/30">
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
