import { ClipboardList, Phone, FileText, CheckCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Pre-Discovery Survey",
    description: "A short questionnaire identifies where AI can save you time and money.",
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
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] font-serif">
            Our Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line - desktop only */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-border" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-28 h-28 rounded-3xl bg-background border-2 border-border flex items-center justify-center mb-8 shadow-sm">
                    <item.icon className="w-12 h-12 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-[0.2em]">
                    Step {item.step}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
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
