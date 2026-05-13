import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface CTASectionProps {
  headline: string
  supporting: string | ReactNode
}

export function CTASection({ headline, supporting }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground tracking-[-0.03em] font-serif leading-[1.1] text-balance">
          {headline}
        </h2>
        <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
          {supporting}
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-7 shadow-sm whitespace-nowrap">
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
