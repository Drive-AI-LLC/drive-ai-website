import { Phone, PenTool, Rocket } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery Call",
    description: "We learn how your business operates and identify opportunities for automation. No technical knowledge required.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Solution Design",
    description: "We design and build custom AI workflows tailored to your needs. You see exactly what we're building before we build it.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation & Support",
    description: "We deploy the solution and help your team use it effectively. Ongoing support ensures everything runs smoothly.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Three simple steps to automation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
