import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/container"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.025em] text-balance font-serif leading-[1.15]">
            Start Using AI in Your Business
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
            Most businesses can automate more than they realize. Let us show you where AI can make the biggest impact.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button asChild size="lg" variant="secondary" className="h-12 sm:h-14 text-base px-6 sm:px-8 rounded-full shadow-lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
