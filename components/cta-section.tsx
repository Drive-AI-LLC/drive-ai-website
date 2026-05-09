import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.025em] font-serif leading-[1.1] text-balance">
            Ready to stop leaving revenue on the table?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
            Schedule a free discovery call. We&apos;ll identify the highest-impact opportunities in your operation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="h-12 text-base px-7 rounded-full shadow-sm">
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
