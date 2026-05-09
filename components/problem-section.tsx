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
    title: "Sales-to-Production Handoff Failures",
    description: "Poor handoffs create delays, rework, and unhappy customers.",
  },
  {
    title: "Scheduling Inefficiencies",
    description: "Manual scheduling creates gaps, conflicts, and idle crews.",
  },
  {
    title: "No Visibility Into the Pipeline",
    description: "Without systems, owners can't see what's stalled or why.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-10 lg:mb-14">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.22em] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            Where roofing companies lose revenue.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Most revenue loss in roofing isn&apos;t from bad work — it&apos;s from gaps in the process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="bg-background p-6 lg:p-7 hover:bg-muted/30 transition-colors duration-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mb-4" />
              <h3 className="text-base font-semibold text-foreground mb-1.5 tracking-[-0.01em]">
                {leak.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground/70 text-center">
          Artificial intelligence and automation tools can handle these tasks for you, allowing your team to focus on what actually matters.
        </p>

      </div>
    </section>
  )
}
