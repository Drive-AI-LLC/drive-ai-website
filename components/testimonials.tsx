"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

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
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What our clients say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: Show all cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-muted/50 border border-border"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonials[currentIndex].quote}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
