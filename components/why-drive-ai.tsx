const differentiators = [
  {
    number: "01",
    title: "Built for roofing, not adapted to it.",
    description: "We don't apply generic AI solutions to your business. Every system we build is designed around how roofing companies sell, produce, and operate.",
  },
  {
    number: "02",
    title: "Operational understanding first.",
    description: "Before we build anything, we learn your workflow. We ask the right questions, map the friction, and design systems that fit — not ones that require your team to change everything.",
  },
  {
    number: "03",
    title: "Revenue-focused outcomes.",
    description: "We measure success in dollars recovered, leads responded to, and jobs completed on time. Not in features shipped or dashboards built.",
  },
  {
    number: "04",
    title: "Modern systems mindset.",
    description: "We bring the operational discipline of a software company to an industry that has historically relied on relationships and hustle alone.",
  },
]

export function WhyDriveAI() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Why Drive AI
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] text-balance font-serif leading-[1.15]">
            Focused on roofing. Focused on results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group p-7 sm:p-8 rounded-2xl bg-muted/40 border border-border/40 hover:border-primary/20 hover:bg-muted/60 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl sm:text-4xl font-bold text-primary/20 font-serif leading-none shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
