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
    <section id="case-studies" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif">
            Real Results for Real Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we have helped businesses like yours save time and operate more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <study.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {study.business}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {study.problem}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-border">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-foreground">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    Result
                  </p>
                  <p className="text-primary font-semibold">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
