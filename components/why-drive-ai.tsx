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
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/20 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        {/* Consistent asymmetric header */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
          <div className="pt-1">
            <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em]">
              Why Drive AI
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
              Focused on roofing.<br className="hidden sm:block" /> Focused on results.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 border border-border/30 rounded-xl overflow-hidden divide-y divide-border/30 sm:divide-y-0">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 hover:bg-background transition-colors duration-200 ${
                index === 0 || index === 1 ? "sm:border-b sm:border-border/30" : ""
              } ${
                index % 2 === 0 ? "sm:border-r sm:border-border/30" : ""
              }`}
            >
              <span className="text-[10px] font-mono font-semibold text-primary/30 tracking-[0.2em] block mb-4">
                {item.number}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2.5 tracking-[-0.01em] leading-snug">
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
