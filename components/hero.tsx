"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#eef2e8" }}>

      {/* Mobile layout — stacked, no illustration */}
      <div className="lg:hidden max-w-[1080px] mx-auto px-5 sm:px-6 w-full pt-32 sm:pt-36 pb-16">
        <div className="flex flex-col justify-start max-w-xl">
          <p className="animate-fade-up text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em] mb-5" style={{ animationDelay: "0ms" }}>
            Insurance Supplement Software
          </p>
          <h1
            className="animate-fade-up text-4xl sm:text-5xl font-bold text-foreground leading-[1.15] tracking-[-0.04em] font-serif mb-6"
            style={{ animationDelay: "40ms" }}
          >
            Turn Underpaid<br />
            Claims Into<br />
            <span className="text-primary underline-draw">Full Recoveries</span>.
          </h1>
          <p
            className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
            style={{ animationDelay: "100ms" }}
          >
            Upload your adjuster&apos;s estimate. We find what&apos;s missing and deliver a submission-ready supplement package in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
            <Button asChild size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 shadow-lg shadow-primary/20">
              <a href="/waitlist" target="_blank" rel="noopener noreferrer">Try It Free <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 border-border hover:bg-muted/50">
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop layout — grid: text col + image col, image drives height */}
      <div className="hidden lg:grid w-full" style={{ gridTemplateColumns: "1fr auto" }}>

        {/* Left — text, aligned to site container left edge */}
        <div
          className="pt-36 xl:pt-44 pb-16 xl:pb-20"
          style={{ paddingLeft: "max(20px, calc((100vw - 1080px) / 2 + 32px))" }}
        >
          <div className="max-w-xl">
            <p className="animate-fade-up text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em] mb-5" style={{ animationDelay: "0ms" }}>
              Insurance Supplement Software
            </p>
            <h1
              className="animate-fade-up text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.15] tracking-[-0.04em] font-serif mb-6"
              style={{ animationDelay: "40ms" }}
            >
              Turn Underpaid<br />
              Claims Into<br />
              <span className="text-primary underline-draw">Full Recoveries</span>.
            </h1>
            <p
              className="animate-fade-up text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-md mb-10"
              style={{ animationDelay: "100ms" }}
            >
              Upload your adjuster&apos;s estimate. We find what&apos;s missing and deliver a submission-ready supplement package in minutes.
            </p>
            <div className="flex flex-row gap-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <Button asChild size="lg" className="h-14 xl:h-16 text-base xl:text-lg px-8 xl:px-10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                <a href="/waitlist" target="_blank" rel="noopener noreferrer">Try It Free <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 xl:h-16 text-base xl:text-lg px-8 xl:px-10 border-border hover:bg-muted/50 transition-all duration-300">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right — illustration in flow, self-end pins bottom to section bottom */}
        <div
          className="animate-fade-up self-end pointer-events-none"
          style={{ animationDelay: "240ms", width: "clamp(480px, 50vw, 820px)", paddingTop: "clamp(60px, 8vh, 120px)" }}
        >
          <Image
            src="/images/house-roof.png"
            alt="Close-up of a residential house roof with green shingles and dormer window"
            width={900}
            height={900}
            className="w-full h-auto block"
            priority
          />
        </div>

      </div>

    </section>
  )
}
