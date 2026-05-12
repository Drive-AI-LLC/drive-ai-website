"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HouseIllustration } from "@/components/house-illustration"

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center bg-background overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-0">

          {/* Left — text content, pushed down slightly */}
          <div className="flex flex-col justify-center mt-8 lg:mt-16">
            <h1
              className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.3] tracking-[-0.04em] font-serif mb-6"
              style={{ animationDelay: "0ms" }}
            >
              More money.
              <span className="block">More jobs.</span>
              <span className="block whitespace-nowrap">
                Built for{" "}
                <span className="text-primary underline decoration-2 underline-offset-2">
                  roofing.
                </span>
              </span>
            </h1>

            <p
              className="animate-fade-up text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
              style={{ animationDelay: "80ms" }}
            >
              Supplement recovery. Storm outreach.
              <span className="block">Smarter roofing operations.</span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-14 text-base px-6 sm:px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                <Link href="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 text-base px-6 sm:px-8 border-border hover:bg-muted/50 transition-all duration-300"
              >
                <Link href="/services">Explore Systems</Link>
              </Button>
            </div>
          </div>

          {/* Right — animated house illustration (hidden on mobile) */}
          <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "240ms" }}>
            <HouseIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}
