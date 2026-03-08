import { Building2, Wrench, ShoppingBag, Stethoscope } from "lucide-react"

const caseStudies = [
  {
    icon: Building2,
    business: "Landscaping Company",
    problem: "Manual invoice processing taking 10+ hours per week",
    solution: "Automated invoice processing and data entry",
    result: "85% reduction in processing time",
  },
  {
    icon: Wrench,
    business: "Engineering Firm",
    problem: "Purchase orders manually entered into accounting software",
    solution: "Automated purchase order data entry system",
    result: "Eliminated 15 hours of weekly data entry",
  },
  {
    icon: ShoppingBag,
    business: "E-commerce Brand",
    problem: "Customer support overwhelmed with repetitive questions",
    solution: "AI-powered customer support assistant",
    result: "70% of inquiries handled automatically",
  },
  {
    icon: Stethoscope,
    business: "Healthcare Practice",
    problem: "Appointment scheduling and reminders done manually",
    solution: "Automated scheduling and reminder system",
    result: "50% reduction in no-shows",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 lg:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.15]">
            Real Results for Real Businesses
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            See how we have helped businesses like yours save time and operate more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 lg:p-10 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <study.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-[-0.01em]">
                    {study.business}
                  </h3>
                  <p className="text-muted-foreground mt-1 sm:mt-1.5 leading-relaxed text-sm sm:text-base">
                    {study.problem}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 pt-5 sm:pt-6 border-t border-border/40">
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-1.5 sm:mb-2">
                    Solution
                  </p>
                  <p className="text-foreground text-sm sm:text-base">{study.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-1.5 sm:mb-2">
                    Result
                  </p>
                  <p className="text-primary font-semibold text-base sm:text-lg">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
