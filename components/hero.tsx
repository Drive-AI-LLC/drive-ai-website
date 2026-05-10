import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90svh] flex items-center bg-background pt-24 sm:pt-28 pb-20 sm:pb-24">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-8">
            Drive AI &mdash; Roofing Operations
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.0] tracking-[-0.035em] font-serif mb-8">
            Revenue systems<br />
            built for roofing<br />
            <span className="text-primary">companies.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Supplement recovery. Storm outreach. Production coordination. Systems that run without adding headcount.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-11 text-sm px-7 rounded-full shadow-sm transition-all duration-200">
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 text-sm px-7 rounded-full transition-all duration-200">
              <Link href="/services">
                View Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
