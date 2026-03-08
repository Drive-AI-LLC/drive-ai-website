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
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] text-balance font-serif leading-tight">
            Drive AI helps businesses save time.
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Practical solutions designed for real business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/20 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8">
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 tracking-[-0.01em]">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
