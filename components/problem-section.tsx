import { Clock, Unplug, RefreshCw } from "lucide-react"

const problems = [
  {
    icon: RefreshCw,
    title: "Repetitive Administrative Tasks",
    description: "Hours spent on data entry, invoice processing, and manual updates that could be automated.",
  },
  {
    icon: Unplug,
    title: "Disconnected Software Tools",
    description: "Information trapped in separate systems, requiring manual copy-paste between applications.",
  },
  {
    icon: Clock,
    title: "Wasted Time on Manual Processes",
    description: "Valuable team hours spent on tasks that machines could handle faster and more accurately.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance font-serif">
            Small businesses are wasting hours on manual work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-muted/50 border border-border hover:border-primary/20 hover:bg-muted transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Modern AI and automation tools can handle these tasks for you—freeing up your team to focus on what actually grows your business.
          </p>
        </div>
      </div>
    </section>
  )
}
