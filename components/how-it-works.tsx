const steps = [
  {
    step: "01",
    title: "Pre-Discovery Survey",
    description: "A short questionnaire helps us understand where your operation loses time and revenue before we speak.",
  },
  {
    step: "02",
    title: "Discovery Call",
    description: "We map your current workflow, identify friction points, and confirm whether a system makes sense.",
  },
  {
    step: "03",
    title: "Proposal",
    description: "A clear scope covering what gets built, how it integrates, and what you can expect in return.",
  },
  {
    step: "04",
    title: "Build & Onboarding",
    description: "We implement the system, train your team, and stay close through the handoff.",
  },
  {
    step: "05",
    title: "Live & Supported",
    description: "Your system runs. We monitor, adjust, and remain available as your operation evolves.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-10 lg:mb-14">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            How we work with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-border/40 rounded-xl overflow-hidden">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-6 border-b border-r border-border/40 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:nth-child(5)]:border-r-0 hover:bg-muted/20 transition-colors duration-200"
            >
              <span className="text-[10px] font-mono font-semibold text-primary/40 tracking-widest block mb-3">
                {item.step}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
