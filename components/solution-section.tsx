const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement Systems",
    description: "AI-assisted workflows that review estimates, flag missing line items, and prepare supplement documentation — so your team recovers more on every claim.",
  },
  {
    tag: "Pipeline Growth",
    title: "Storm Outreach Systems",
    description: "Automated lead identification, outreach sequencing, and follow-up workflows that let your team move fast when a storm hits — without adding headcount.",
  },
  {
    tag: "Operational Efficiency",
    title: "Production Coordination Systems",
    description: "Structured handoffs from sales to production, automated scheduling triggers, and status tracking so nothing falls through the cracks.",
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            Three systems. Real outcomes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Productized systems designed around how roofing companies actually operate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/25 hover:shadow-sm transition-all duration-200"
            >
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.15em] mb-5 bg-primary/8 px-2.5 py-1 rounded-md border border-primary/15">
                {solution.tag}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-3 tracking-[-0.01em] leading-snug">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
