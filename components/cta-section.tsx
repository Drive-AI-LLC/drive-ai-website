import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold text-primary-foreground/50 uppercase tracking-[0.25em] mb-4">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-[-0.025em] font-serif leading-[1.1] text-balance">
            See what a system could do for your operation.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-primary-foreground/65 leading-relaxed max-w-md">
            A 30-minute discovery call is enough to identify your highest-impact opportunity. No commitment required.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-6 rounded-full shadow-sm">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
