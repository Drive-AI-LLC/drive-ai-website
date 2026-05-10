const steps = [
  { step: "01", title: "Pre-Discovery Survey", description: "Short questionnaire. We learn where you lose time and revenue." },
  { step: "02", title: "Discovery Call", description: "We map your workflow and identify the highest-impact opportunity." },
  { step: "03", title: "Proposal", description: "Clear scope — what gets built, how it integrates, what to expect." },
  { step: "04", title: "Build & Onboarding", description: "We implement, train your team, and stay close through the handoff." },
  { step: "05", title: "Live & Supported", description: "Your system runs. We monitor and adjust as your operation grows." },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="mb-14">
          <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-[0.3em] mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.03em] font-serif leading-[1.05]">
            How we work with you.
          </h2>
        </div>

        <div className="divide-y divide-border/40">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="animate-fade-up grid sm:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-4 py-8 first:pt-0 last:pb-0"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span className="text-3xl sm:text-4xl font-bold text-primary/20 font-serif tracking-[-0.04em] leading-none pt-1">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-[-0.02em] leading-snug font-serif">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
