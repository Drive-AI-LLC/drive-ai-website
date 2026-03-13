import { Workflow, Sparkles, Lightbulb } from "lucide-react"
import { Container } from "@/components/container"

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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.025em] text-balance font-serif leading-[1.15]">
            Drive AI helps businesses save time.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Practical solutions designed for real business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-7 sm:p-8 lg:p-10 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center mb-6 sm:mb-8">
                <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
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
      </Container>
    </section>
  )
}
