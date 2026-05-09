import { FileX, Clock, CloudLightning, TrendingDown, Calendar } from "lucide-react"

const leaks = [
  {
    icon: FileX,
    title: "Missed Supplement Items",
    description: "Incomplete supplement submissions leave thousands of dollars on the table per job. Most crews don't have time to catch every line item.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Up",
    description: "Leads go cold while your team is on the roof. Delayed responses cost jobs that should have been easy closes.",
  },
  {
    icon: CloudLightning,
    title: "Storm Surges Overwhelming Teams",
    description: "When a storm hits, inbound volume spikes overnight. Without systems, you can't scale fast enough to capture the opportunity.",
  },
  {
    icon: TrendingDown,
    title: "Production Bottlenecks",
    description: "Jobs stall between sales and installation. Poor handoffs create delays, rework, and unhappy customers.",
  },
  {
    icon: Calendar,
    title: "Scheduling Inefficiencies",
    description: "Manual scheduling leads to gaps, conflicts, and crews sitting idle. Every wasted hour is revenue you can't recover.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance font-serif leading-[1.15]">
            Where roofing companies lose revenue.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Most revenue loss in roofing isn&apos;t from bad work — it&apos;s from gaps in the process. These are the most common places we see money left behind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-muted/50 border border-border hover:border-primary/20 hover:bg-muted transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <leak.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {leak.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {leak.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
