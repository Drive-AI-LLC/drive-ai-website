"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#eef2e8", minHeight: "calc(100svh - 64px)" }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid lg:grid-cols-2 items-center" style={{ minHeight: "calc(100svh - 64px)" }}>

          {/* Left — text content */}
          <div className="flex flex-col justify-center py-20 lg:py-0">
            <h1
              className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.3] tracking-[-0.04em] font-serif mb-6"
              style={{ animationDelay: "0ms" }}
            >
              More <span className="text-primary">money</span>.
              <span className="block">More <span className="text-primary">jobs</span>.</span>
              <span className="block whitespace-nowrap">
                Built for{" "}
                <span className="text-primary underline-draw">
                  roofing
                </span>
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
                  Let&apos;s Talk
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

          {/* Right — house illustration (hidden on mobile) */}
          <div className="hidden lg:flex animate-fade-up items-end justify-end self-end pointer-events-none" style={{ animationDelay: "240ms" }}>
            <Image
              src="/images/house-roof.png"
              alt="Close-up of a residential house roof with green shingles and dormer window"
              width={700}
              height={700}
              className="w-full max-w-[580px] xl:max-w-[620px] h-auto"
              style={{ display: "block" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
