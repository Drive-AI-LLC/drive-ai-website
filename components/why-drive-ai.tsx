const differentiators = [
  { title: "Built for roofing.", description: "Every system is designed around how roofing companies sell, produce, and collect." },
  { title: "We learn before we build.", description: "We map your workflow first. Systems only get built when the value is clear." },
  { title: "Measured in revenue.", description: "Dollars recovered and jobs completed on schedule — not vague efficiency metrics." },
  { title: "Systems, not software.", description: "Operational discipline applied to an industry that runs on relationships and manual effort." },
]

export function WhyDriveAI() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-background border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Why Drive AI</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            Focused on roofing. Focused on results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 border border-border/30">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`animate-fade-up p-7 sm:p-8 transition-colors duration-200 hover:bg-muted/25 group
                ${index % 2 === 0 ? "sm:border-r border-border/30" : ""}
                ${index < 2 ? "border-b border-border/30" : ""}
              `}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mb-5" />
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-[-0.02em] font-serif">
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
