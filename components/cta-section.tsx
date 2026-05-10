import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 items-start">

          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary-foreground/40 uppercase tracking-[0.3em]">
              Get Started
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.03em] font-serif leading-[1.05] text-balance">
                See what AI can do for you.
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed max-w-md">
                30 minutes. No commitment. We&apos;ll identify your highest-impact opportunity.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-7 rounded-full shadow-sm whitespace-nowrap">
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
