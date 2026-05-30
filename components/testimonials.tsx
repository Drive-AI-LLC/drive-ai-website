"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "I reached out to Drive AI about SEO, and they quickly got up to speed by asking smart questions and doing real research before recommending anything. They were transparent about fit/feasibility instead of pushing a project. I would certainly recommend Drive AI to anyone who wants a thorough, hardworking, and high-integrity team to help them implement practical AI solutions into their business.",
    name: "Seth Crow",
    title: "Insurance Agent",
    company: "State Farm",
  },
  {
    quote: "Drive AI delivered what they said they would, and more importantly, they showed up as thoughtful, capable partners. I'd confidently recommend them to teams looking for a smart, curious, and dependable group to help bring AI concepts into the real world.",
    name: "Ryan Yeoman",
    title: "Co-founder",
    company: "LeaderReps",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const userInteractedRef = useRef(false)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!api) return

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    const onUserInteraction = () => {
      userInteractedRef.current = true
      stopAutoPlay()
    }

    if (!userInteractedRef.current) {
      intervalRef.current = setInterval(() => {
        api.scrollNext()
      }, 4000)
    }

    const rootNode = api.rootNode()
    rootNode.addEventListener("pointerdown", onUserInteraction)

    const prevEl = prevRef.current
    const nextEl = nextRef.current
    prevEl?.addEventListener("click", onUserInteraction)
    nextEl?.addEventListener("click", onUserInteraction)

    return () => {
      stopAutoPlay()
      rootNode.removeEventListener("pointerdown", onUserInteraction)
      prevEl?.removeEventListener("click", onUserInteraction)
      nextEl?.removeEventListener("click", onUserInteraction)
    }
  }, [api])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.15]">
            What our clients say
          </h2>
        </div>

        <div className="px-0 sm:px-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-3 sm:pl-4 basis-full sm:basis-1/2">
                  <div className="h-full p-5 sm:p-6 rounded-lg bg-background border border-border/40 flex flex-col shadow-sm">
                    <Quote className="w-5 h-5 text-primary/20 mb-3 shrink-0" />
                    <p className="text-foreground leading-relaxed mb-4 flex-grow text-sm">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="mt-auto pt-3 border-t border-border/40">
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious ref={prevRef} className="-left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12" />
            <CarouselNext ref={nextRef} className="-right-2 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
