import { FileText, CloudLightning, ClipboardCheck } from "lucide-react"

const solutions = [
  {
    icon: FileText,
    title: "Insurance Supplement Systems",
    description: "We build AI-assisted workflows that review estimates, flag missing line items, and prepare supplement documentation — so your team recovers more on every claim.",
    tag: "Revenue Recovery",
  },
  {
    icon: CloudLightning,
    title: "Storm Outreach Systems",
    description: "Automated lead identification, outreach sequencing, and follow-up workflows that let your team move fast when a storm hits — without adding headcount.",
    tag: "Pipeline Growth",
  },
  {
    icon: ClipboardCheck,
    title: "Production Coordination Systems",
    description: "Structured handoffs from sales to production, automated scheduling triggers, and status tracking so nothing falls through the cracks between contract and completion.",
    tag: "Operational Efficiency",
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] text-balance font-serif leading-[1.15]">
            Three core systems built for roofing.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Productized systems designed around how roofing companies actually operate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-7 sm:p-8 lg:p-10 rounded-2xl bg-background border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center">
                  <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em] bg-primary/8 px-3 py-1 rounded-full border border-primary/20">
                  {solution.tag}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 tracking-[-0.01em]">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
