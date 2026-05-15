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
          <h1
            className="animate-fade-up text-4xl sm:text-5xl font-bold text-foreground leading-[1.15] tracking-[-0.04em] font-serif mb-6"
            style={{ animationDelay: "0ms" }}
          >
            More <span className="text-primary">money</span>.
            <span className="block">More <span className="text-primary">jobs</span>.</span>
            <span className="block whitespace-nowrap">
              Built for{" "}
              <span className="text-primary underline-draw">roofing</span>
              .
            </span>
          </h1>
          <p
            className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
            style={{ animationDelay: "80ms" }}
          >
            Supplement recovery. Storm outreach.
            <span className="block">Smarter roofing operations.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
            <Button asChild size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 shadow-lg shadow-primary/20">
              <Link href="/contact">Let&apos;s Talk <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 text-base px-6 sm:px-8 border-border hover:bg-muted/50">
              <Link href="/services">Explore Systems</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop layout — text in standard container, image overflows to right */}
      <div className="hidden lg:flex w-full">
        {/* Left — text content with standard site container alignment */}
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 w-full pt-36 xl:pt-44 pb-16 xl:pb-20">
          <div className="max-w-xl">
            <h1
              className="animate-fade-up text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.15] tracking-[-0.04em] font-serif mb-6"
              style={{ animationDelay: "0ms" }}
            >
              More <span className="text-primary">money</span>.
              <span className="block">More <span className="text-primary">jobs</span>.</span>
              <span className="block whitespace-nowrap">
                Built for{" "}
                <span className="text-primary underline-draw">roofing</span>
                .
              </span>
            </h1>
            <p
              className="animate-fade-up text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-md mb-10"
              style={{ animationDelay: "80ms" }}
            >
              Supplement recovery. Storm outreach.
              <span className="block">Smarter roofing operations.</span>
            </p>
            <div className="flex flex-row gap-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <Button asChild size="lg" className="h-14 xl:h-16 text-base xl:text-lg px-8 xl:px-10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                <Link href="/contact">Let&apos;s Talk <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 xl:h-16 text-base xl:text-lg px-8 xl:px-10 border-border hover:bg-muted/50 transition-all duration-300">
                <Link href="/services">Explore Systems</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right — illustration, positioned absolutely to overflow right edge */}
        <div
          className="animate-fade-up absolute right-0 bottom-0 pointer-events-none"
          style={{ animationDelay: "240ms", width: "clamp(480px, 50vw, 820px)", top: "clamp(60px, 8vh, 120px)" }}
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
