"use client"

const memberships = [
  { name: "Clemson Area Chamber" },
  { name: "Oconee Chamber" },
  { name: "Easley Chamber" },
  { name: "Launchpad TV" },
  { name: "Brook T. Smith Launchpad" },
]

export function SocialProof() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.15em] mb-10">
          Members of
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-16">
          {memberships.map((org) => (
            <div
              key={org.name}
              className="group relative flex items-center justify-center"
            >
              <span className="text-sm lg:text-base text-muted-foreground/70 font-medium tracking-wide group-hover:text-foreground transition-colors duration-300">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
