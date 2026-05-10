const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Recover more on every claim without slowing production.",
    details: ["Line item gap analysis", "Xactimate cross-reference", "Supplement tracking"],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "Move fast when a storm hits — without dropping leads.",
    details: ["Affected area targeting", "Automated follow-up", "Response tracking"],
  },
  {
    tag: "Production Operations",
    title: "Production Coordination System",
    description: "Nothing stalls between signed contract and completed job.",
    details: ["Sales-to-production handoff", "Crew scheduling", "Job status visibility"],
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 items-start">
          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em]">Our Systems</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              Three systems.<br className="hidden sm:block" /> Measurable outcomes.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30 border border-border/30">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-background p-6 sm:p-8 flex flex-col">
              <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.2em] mb-4">
                {solution.tag}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {solution.description}
              </p>
              <div className="pt-4 border-t border-border/30 space-y-1.5">
                {solution.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-xs text-muted-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-primary/35 shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
