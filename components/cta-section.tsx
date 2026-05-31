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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="h-11 text-sm px-7 shadow-sm whitespace-nowrap">
            <a href="https://supplement.driveai.llc" target="_blank" rel="noopener noreferrer">
              Try It Free
              <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 text-sm px-7 whitespace-nowrap bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
