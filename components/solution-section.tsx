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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            Our Systems
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            Three systems. Measurable outcomes.
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Purpose-built for how roofing companies sell, produce, and collect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-xl bg-background border border-border/50 flex flex-col"
            >
              <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-[0.18em] mb-4 bg-primary/6 px-2 py-0.5 rounded border border-primary/12 w-fit">
                {solution.tag}
              </span>
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {solution.description}
              </p>
              <div className="mt-auto pt-4 border-t border-border/30 space-y-1.5">
                {solution.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-xs text-muted-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
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
