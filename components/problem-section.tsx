const leaks = [
  {
    title: "Missed Supplement Revenue",
    description: "Incomplete submissions leave thousands on the table per job.",
  },
  {
    title: "Slow Lead Follow-Up",
    description: "Leads go cold while your team is on the roof.",
  },
  {
    title: "Storm Surge Overwhelm",
    description: "Inbound volume spikes overnight — most teams can't scale fast enough.",
  },
  {
    title: "Sales-to-Production Failures",
    description: "Poor handoffs create delays, rework, and unhappy customers.",
  },
  {
    title: "Scheduling Inefficiencies",
    description: "Manual scheduling creates gaps, conflicts, and idle crews.",
  },
  {
    title: "No Pipeline Visibility",
    description: "Without systems, owners can't see what's stalled or why.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="pt-1">
            <p className="text-primary font-semibold text-[10px] uppercase tracking-[0.3em]">
              The Problem
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              Where roofing companies<br className="hidden sm:block" /> lose revenue.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              Most revenue loss isn&apos;t from bad work — it&apos;s from gaps in the process that no one has time to fix.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border/30">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="bg-background p-6 lg:p-8"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                {leak.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground/60 max-w-lg">
          Artificial intelligence and automation tools can handle these tasks for you, allowing your team to focus on what actually matters.
        </p>

      </div>
    </section>
  )
}
