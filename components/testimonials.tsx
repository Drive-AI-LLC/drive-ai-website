"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    quote: <>I reached out to <em>Drive AI</em> about SEO, and they quickly got up to speed by asking smart questions and doing real research before recommending anything. They were transparent about fit/feasibility instead of pushing a project. I would certainly recommend <em>Drive AI</em> to anyone who wants a thorough, hardworking, and high-integrity team to help them implement practical AI solutions into their business.</>,
    name: "Seth Crow",
    title: "Insurance Agent",
    company: "State Farm",
  },
  {
    quote: <><em>Drive AI</em> delivered what they said they would, and more importantly, they showed up as thoughtful, capable partners. I&apos;d confidently recommend them to teams looking for a smart, curious, and dependable group to help bring AI concepts into the real world.</>,
    name: "Ryan Yeoman",
    title: "Co-founder",
    company: "LeaderReps",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const startAutoPlay = useCallback(() => {
    if (pausedRef.current || !emblaApi) return
    stopAutoPlay()
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
  }, [emblaApi, stopAutoPlay])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    pausedRef.current = true
    stopAutoPlay()
    emblaApi.scrollPrev()
  }, [emblaApi, stopAutoPlay])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    pausedRef.current = true
    stopAutoPlay()
    emblaApi.scrollNext()
  }, [emblaApi, stopAutoPlay])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    pausedRef.current = true
    stopAutoPlay()
    emblaApi.scrollTo(index)
  }, [emblaApi, stopAutoPlay])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    startAutoPlay()

    return () => {
      stopAutoPlay()
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect, startAutoPlay, stopAutoPlay])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.15]">
            What our clients say
          </h2>
        </div>

        <div className="relative">
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-3 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="pl-3 sm:pl-4 min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2"
                >
                  <div className="h-full p-5 sm:p-6 rounded-lg bg-background border border-border/40 flex flex-col shadow-sm">
                    <Quote className="w-5 h-5 text-primary/20 mb-3 shrink-0" />
                    <p className="text-foreground leading-relaxed mb-4 flex-grow text-sm">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-auto pt-3 border-t border-border/40">
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors duration-150 z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors duration-150 z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === selectedIndex
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
