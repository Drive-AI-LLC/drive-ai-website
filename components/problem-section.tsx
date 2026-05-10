const leaks = [
  { num: "01", title: "Missed supplements", description: "Incomplete claims leave thousands per job on the table." },
  { num: "02", title: "Slow lead follow-up", description: "Leads go cold while your team is on the roof." },
  { num: "03", title: "Storm surge overwhelm", description: "Volume spikes overnight. Most teams can't scale fast enough." },
  { num: "04", title: "Sales-to-production failures", description: "Poor handoffs cause delays, rework, and callbacks." },
  { num: "05", title: "Scheduling gaps", description: "Manual scheduling creates idle crews and missed windows." },
  { num: "06", title: "No pipeline visibility", description: "Owners can't see what's stalled or why." },
]

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-foreground border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.3em] mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-serif leading-[1.05] max-w-xl">
            Where roofing companies lose revenue.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="animate-fade-up relative bg-foreground p-6 lg:p-8 group cursor-default overflow-hidden transition-colors duration-200 hover:bg-white/[0.04]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="absolute top-4 right-5 text-5xl font-bold text-white/[0.04] font-serif select-none leading-none">
                {leak.num}
              </span>
              <h3 className="text-sm font-semibold text-white/80 mb-2 tracking-[-0.01em] relative z-10">
                {leak.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed relative z-10">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
