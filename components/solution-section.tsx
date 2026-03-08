import { Workflow, Sparkles, Lightbulb } from "lucide-react"

const solutions = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks across your existing software. Connect your tools and let them work together seamlessly.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Tools",
    description: "Build tools tailored specifically to your business processes. From document analysis to smart assistants.",
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description: "Identify the highest-impact ways AI can improve your operations. Get a roadmap for practical implementation.",
  },
]

export function SolutionSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance font-serif">
            Drive AI helps businesses save time.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical solutions designed for real business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
