const leaks = [
  { title: "Missed supplements", description: "Incomplete claims leave thousands per job on the table." },
  { title: "Slow lead follow-up", description: "Leads go cold while your team is on the roof." },
  { title: "Storm surge overwhelm", description: "Volume spikes overnight. Most teams can't scale fast enough." },
  { title: "Sales-to-production failures", description: "Poor handoffs cause delays, rework, and callbacks." },
  { title: "Scheduling gaps", description: "Manual scheduling creates idle crews and missed windows." },
  { title: "No pipeline visibility", description: "Owners can't see what's stalled or why." },
]

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] max-w-xl">
            Where roofing companies lose revenue.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border/30">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="animate-fade-up bg-background p-6 lg:p-7 transition-transform duration-200 hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5 tracking-[-0.01em]">
                {leak.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
