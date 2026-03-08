import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance font-serif">
            Start Using AI in Your Business
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Most businesses can automate more than they realize. Let us show you where AI can make the biggest impact.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="#contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
