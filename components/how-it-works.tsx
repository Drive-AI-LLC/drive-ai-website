const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We map your workflow and identify the highest-impact opportunity.",
  },
  {
    step: "02",
    title: "Proposal",
    description: "Clear scope — what gets built, how it integrates, and what to expect.",
  },
  {
    step: "03",
    title: "Build & Onboarding",
    description: "We implement, train your team, and stay close through the handoff.",
  },
  {
    step: "04",
    title: "Live & Supported",
    description: "Your system runs. We monitor and adjust as your operation grows.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/70 uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05] mb-5">
            How we work with you.
          </h2>
          <p className="text-base text-muted-foreground">
            A clear, proven process built to deliver real results.
          </p>
        </div>

        {/* 2x2 grid with hairline dividers */}
        <div className="grid sm:grid-cols-2 border-t border-border/40">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`animate-fade-up px-0 sm:px-10 py-12 border-b border-border/40 ${
                index % 2 === 0 ? "sm:border-r sm:pl-0 sm:pr-12" : "sm:pr-0 sm:pl-12"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="block text-6xl sm:text-7xl font-bold text-primary/40 font-serif tracking-[-0.04em] leading-none mb-6">
                {item.step}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-[-0.02em] font-serif">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
