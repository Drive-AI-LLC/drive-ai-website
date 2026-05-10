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
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Consistent asymmetric header */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em]">
              Our Process
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              How we work with you.
            </h2>
          </div>
        </div>

        {/* Steps: vertical stack on mobile, horizontal on large */}
        <div className="border border-border/30 rounded-xl overflow-hidden divide-y divide-border/30 lg:divide-y-0 lg:grid lg:grid-cols-5 lg:divide-x">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 lg:p-7 hover:bg-muted/15 transition-colors duration-200"
            >
              <span className="text-[10px] font-mono font-semibold text-primary/35 tracking-[0.2em] block mb-4">
                {item.step}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
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
