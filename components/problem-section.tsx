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
    <section className="py-16 sm:py-20 lg:py-24 bg-foreground">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 items-start">
          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary-foreground/40 uppercase tracking-[0.3em]">The Problem</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              Where roofing companies<br className="hidden sm:block" /> lose revenue.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {leaks.map((leak, index) => (
            <div key={index} className="bg-foreground p-6 lg:p-7">
              <h3 className="text-base font-semibold text-primary-foreground mb-1.5 tracking-[-0.01em]">
                {leak.title}
              </h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
