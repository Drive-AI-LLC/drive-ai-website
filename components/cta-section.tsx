import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.02em] text-balance font-serif leading-tight">
            Start Using AI in Your Business
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/80 leading-relaxed">
            Most businesses can automate more than they realize. Let us show you where AI can make the biggest impact.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="h-14 text-base px-8 rounded-full shadow-lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2.5 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
