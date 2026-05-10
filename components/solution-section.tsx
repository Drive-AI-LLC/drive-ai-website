const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Most roofing companies leave money on the table with every claim. Our system finds line item gaps, cross-references Xactimate, and tracks supplements so nothing gets missed.",
    details: ["Line item gap analysis", "Xactimate cross-reference", "Supplement tracking"],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "When a storm hits, speed wins. We automate targeted outreach to affected areas so your team is first on the door — without dropping existing leads.",
    details: ["Affected area targeting", "Automated follow-up", "Response tracking"],
  },
  {
    tag: "Production Operations",
    title: "Production Coordination System",
    description: "Poor handoffs between sales and production cause delays, rework, and callbacks. Our system keeps every job moving from signed contract to completion with full visibility.",
    details: ["Sales-to-production handoff", "Crew scheduling", "Job status visibility"],
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Our Systems</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            Three systems. Measurable outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="animate-fade-up bg-background border border-border/40 p-6 sm:p-8 flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.2em] mb-4">
                {solution.tag}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-[-0.02em] leading-snug font-serif">
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

        <div className="mt-10 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground border border-border/60 px-6 py-3 hover:bg-muted/40 hover:border-border transition-colors duration-200"
          >
            Explore all our systems
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
