"use client"

import { Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Drive AI transformed how we handle our daily operations. What used to take hours now happens automatically in the background.",
    name: "Sarah Mitchell",
    title: "Owner",
    company: "Mitchell Landscaping",
  },
  {
    quote: "We were skeptical about AI at first, but the team made it incredibly simple. The ROI was clear within the first month.",
    name: "James Chen",
    title: "Operations Manager",
    company: "Chen Engineering Group",
  },
  {
    quote: "The automation solutions they built for us are exactly what we needed. Our team can finally focus on growth instead of paperwork.",
    name: "Emily Rodriguez",
    title: "CEO",
    company: "Bloom Retail Co.",
  },
  {
    quote: "I never thought our small business could leverage AI the way larger companies do. Drive AI made it accessible and affordable.",
    name: "Michael Thompson",
    title: "Founder",
    company: "Thompson Consulting",
  },
  {
    quote: "The custom workflows they built save us over 20 hours per week. It's like having an extra team member.",
    name: "Lisa Park",
    title: "Director of Operations",
    company: "Park & Associates",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif">
            What our clients say
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-6 rounded-2xl bg-muted/50 border border-border flex flex-col">
                    <Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" />
                    <p className="text-foreground leading-relaxed mb-6 flex-grow">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
