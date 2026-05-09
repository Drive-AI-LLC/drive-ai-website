const differentiators = [
  {
    number: "01",
    title: "Built for roofing, not adapted to it.",
    description: "Every system we build is designed around how roofing companies sell, produce, and operate — not repurposed from a generic AI template.",
  },
  {
    number: "02",
    title: "Operational understanding first.",
    description: "Before we build anything, we learn your workflow. We ask the right questions, map the friction, and design systems that fit.",
  },
  {
    number: "03",
    title: "Revenue-focused outcomes.",
    description: "We measure success in dollars recovered, leads responded to, and jobs completed on time.",
  },
  {
    number: "04",
    title: "Modern systems mindset.",
    description: "We bring the operational discipline of a software company to an industry that has relied on relationships and hustle alone.",
  },
]

export function WhyDriveAI() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-10 lg:mb-14">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Why Drive AI
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            Focused on roofing. Focused on results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-0 border border-border/40 rounded-2xl overflow-hidden">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 border-b border-r border-border/40 last:border-b-0 [&:nth-child(even)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 hover:bg-muted/20 transition-colors duration-200"
            >
              <span className="text-xs font-semibold text-primary/40 tracking-widest font-mono mb-4 block">
                {item.number}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
