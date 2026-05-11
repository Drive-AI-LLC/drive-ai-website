import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  headline: string
  supporting: string
}

export function CTASection({ headline, supporting }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.03em] font-serif leading-[1.05] text-balance">
          {headline}
        </h2>
        <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
          {supporting}
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-7 rounded-full shadow-sm whitespace-nowrap">
            <Link href="/contact">
              Book a Call
              <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
