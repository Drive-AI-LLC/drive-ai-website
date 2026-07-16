"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We map your workflow and identify the highest-impact opportunity.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "Clear scope: what gets built, how it integrates, and what to expect.",
  },
  {
    step: "03",
    title: "Build & Onboarding",
    description: "We implement, train your team, and stay close through the handoff.",
  },
  {
    step: "04",
    title: "Live & Supported",
    description: "Your system runs. We monitor and adjust as your operation grows.",
  },
]

function StepItem({ item, index }: { item: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex-1 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Number + dot on the line */}
      <div className="flex items-center mb-6">
        <div className="w-7 h-7 rounded-full border border-primary/30 bg-background flex items-center justify-center shrink-0 z-10">
          <span className="text-[10px] font-semibold text-primary/60 tracking-wide font-sans">
            {item.step}
          </span>
        </div>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-2 tracking-[-0.01em] font-serif">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-3">
            How it works.
          </h2>
          <p className="text-sm text-muted-foreground">
            A clear, proven process built to deliver real results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — hidden on mobile, shown on sm+ */}
          <div
            className="hidden sm:block absolute top-[13px] left-[14px] right-[14px] h-px bg-primary/20"
            aria-hidden="true"
          />

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-6">
            {steps.map((item, index) => (
              <StepItem key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
