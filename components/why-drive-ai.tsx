const differentiators = [
  {
    number: "01",
    title: "Built for roofing, not adapted to it.",
    description: "Every system is designed around how roofing companies sell, produce, and collect — not repurposed from a generic template.",
  },
  {
    number: "02",
    title: "We learn the operation before we build.",
    description: "Before writing a line of code, we map your workflow, identify the friction, and confirm the system will deliver value.",
  },
  {
    number: "03",
    title: "Measured in revenue, not hours saved.",
    description: "We track dollars recovered, leads responded to, and jobs completed on schedule — not vague efficiency metrics.",
  },
  {
    number: "04",
    title: "Systems thinking, not software consulting.",
    description: "We bring operational discipline to an industry that has historically run on relationships and manual effort.",
  },
]

export function WhyDriveAI() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-10 lg:mb-12">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            Why Drive AI
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.025em] font-serif leading-[1.1]">
            Focused on roofing. Focused on results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-0 border border-border/40 rounded-xl overflow-hidden">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 border-b border-r border-border/40 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 hover:bg-background transition-colors duration-200"
            >
              <span className="text-[10px] font-mono font-semibold text-primary/35 tracking-widest block mb-3">
                {item.number}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 tracking-[-0.01em] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
