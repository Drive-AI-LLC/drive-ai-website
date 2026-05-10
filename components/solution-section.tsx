const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Reviews estimates, flags missing line items, and prepares supplement documentation. Your team recovers more on every claim without slowing down production.",
    details: ["Line item gap analysis", "Xactimate cross-reference", "Supplement tracking dashboard"],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "Automated lead identification and follow-up sequencing so your team moves fast when a storm hits — without adding headcount or dropping leads.",
    details: ["Affected area targeting", "Outreach sequencing", "Response tracking"],
  },
  {
    tag: "Production Operations",
    title: "Production Coordination System",
    description: "Structured handoffs from sales to production, automated scheduling triggers, and real-time status tracking so nothing stalls between signed contract and completed job.",
    details: ["Sales-to-production handoff", "Crew scheduling automation", "Job status visibility"],
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em]">
              Our Systems
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              Three systems.<br className="hidden sm:block" /> Measurable outcomes.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              Purpose-built for how roofing companies sell, produce, and collect.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30 border border-border/30">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-background p-6 sm:p-8 flex flex-col"
            >
              <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.2em] mb-5">
                {solution.tag}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-3 tracking-[-0.01em] leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
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
