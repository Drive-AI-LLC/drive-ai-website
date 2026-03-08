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
    quote: "Clemson is a hub for entrepreneurs but very few dive headfirst into starting a business while they are also full-time students. The Chamber can proudly say that Danika and Reid have not only taken that first step, but they have also delivered hard results that directly increased our efficiency and saved us money.",
    name: "Bryan Lee",
    title: "President",
    company: "Clemson Area Chamber of Commerce",
  },
  {
    quote: "Drive AI was able to find Rowing team contacts from thousands of websites and compile them into an easy-to-read excel sheet with ready-to-contact emails and phone numbers, saving the Chamber over 100 hours of manual labor and improving our employees' ability to make sales calls.",
    name: "Dylan Johns",
    title: "Program Coordinator",
    company: "Clemson Area Chamber of Commerce",
  },
  {
    quote: "They continue to impress with other projects for local businesses and individuals, and it is obvious that they possess the vision and drive to excel in the modern business world. We cannot wait to see where Danika & Reid take their services next, and we cannot recommend them enough if you are looking to dramatically improve workplace efficiency!",
    name: "Lacy Fahs",
    title: "Marketing & Events Coordinator",
    company: "Clemson Area Chamber of Commerce",
  },
  {
    quote: "I reached out to Drive AI about SEO, and they quickly got up to speed by asking smart questions and doing real research before recommending anything. They were transparent about fit/feasibility instead of pushing a project. I would certainly recommend Drive AI to anyone who wants a thorough, hardworking, and high-integrity team to help them implement practical AI solutions into their business.",
    name: "Seth Crow",
    title: "Insurance Agent",
    company: "State Farm",
  },
  {
    quote: "Did a demo with Drive AI leadership today. If you haven't adopted AI in your business and still have 20+ working years left… you need to have a consultation with DriveAI. Artificial Intelligence is no longer \"AskJeeves\", it's evolving and not slowing down. Don't get left behind. Tactfully integrate AI into your business!",
    name: "Caitlyn Marcell",
    title: "Co-owner",
    company: "ASCEND Lending",
  },
  {
    quote: "Drive AI delivered what they said they would, and more importantly, they showed up as thoughtful, capable partners. I'd confidently recommend them to teams looking for a smart, curious, and dependable group to help bring AI concepts into the real world.",
    name: "Ryan Yeoman",
    title: "Co-founder",
    company: "LeaderReps",
  },
  {
    quote: "What stood out immediately was how they approached the work. Rather than jumping straight to solutions, they asked thoughtful questions, pushed on assumptions, and took the time to truly understand what we were trying to solve. Their process was clear and well-structured, with regular checkpoints that kept the work focused and aligned. Communication was proactive, responsive, and easy throughout.",
    name: "Ryan Yeoman",
    title: "Co-founder",
    company: "LeaderReps",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] font-serif">
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
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2">
                  <div className="h-full p-8 lg:p-10 rounded-3xl bg-background border border-border/50 flex flex-col shadow-sm">
                    <Quote className="w-10 h-10 text-primary/20 mb-6 shrink-0" />
                    <p className="text-foreground leading-relaxed mb-8 flex-grow text-base lg:text-lg">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="mt-auto pt-6 border-t border-border/50">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6 w-12 h-12" />
            <CarouselNext className="-right-4 md:-right-6 w-12 h-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
