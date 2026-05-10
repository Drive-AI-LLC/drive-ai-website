const solutions = [
  {
    tag: "Revenue Recovery",
    title: "Insurance Supplement System",
    description: "Stop leaving money on every claim. We find the gaps, file the supplements, and track every dollar.",
    details: ["Gap analysis", "Xactimate cross-reference", "Supplement tracking"],
  },
  {
    tag: "Storm Response",
    title: "Storm Outreach System",
    description: "Be first on the door when a storm hits. Automated outreach gets your team moving before competitors show up.",
    details: ["Area targeting", "Automated follow-up", "Lead tracking"],
  },
  {
    tag: "Production Operations",
    title: "Production Coordination System",
    description: "No more jobs stalling between sales and production. Every handoff is clean, every crew is scheduled, every job visible.",
    details: ["Sales-to-production handoff", "Crew scheduling", "Job visibility"],
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Our Systems</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            Three systems. Measurable outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="animate-fade-up bg-background border border-border/40 p-7 sm:p-9 flex flex-col group transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.2em] mb-5">
                {solution.tag}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-[-0.02em] leading-snug font-serif">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {solution.description}
              </p>
              <div className="pt-5 border-t border-border/30 space-y-2">
                {solution.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2.5 text-xs text-muted-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
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
