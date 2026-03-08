import { ClipboardList, Phone, FileText, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Pre-Discovery Survey",
    description: "A short questionnaire identifies where AI can save you time and money before we meet.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Free Discovery Call",
    description: "We review your workflows and identify high-impact opportunities.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Proposal & Check-In",
    description: "We present a clear plan outlining the solution, process, and investment.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Approval & Onboarding",
    description: "Once approved, we finalize paperwork and prepare for implementation.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Project Kickoff",
    description: "We begin implementation and provide updates every step of the way.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif">
            Our Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    Step {item.step}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
