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
    description: "Clear scope — what gets built, how it integrates, and what to expect.",
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

function StepCard({ item, index }: { item: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`px-0 py-10 border-b border-border/40 transition-all duration-700 ease-out ${
        index % 2 === 0 ? "sm:border-r sm:pl-0 sm:pr-14" : "sm:pr-0 sm:pl-14"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="block text-sm font-semibold text-primary/50 tracking-[0.15em] mb-5 font-sans">
        {item.step}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5 tracking-[-0.02em] font-serif">
        {item.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        {item.description}
      </p>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="max-w-[860px] mx-auto px-6 sm:px-10 lg:px-12">

        <div className="mb-12">
          <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-4">
            How it works.
          </h2>
          <p className="text-sm text-muted-foreground">
            A clear, proven process built to deliver real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 border-t border-border/40">
          {steps.map((item, index) => (
            <StepCard key={item.step} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
