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
    <section className="py-12 sm:py-16 bg-muted/20 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-xs sm:text-sm font-medium text-muted-foreground/80 uppercase tracking-[0.2em] mb-8 sm:mb-10">
          Members of
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-6">
          {memberships.map((org) => (
            <div
              key={org.name}
              className="group relative flex items-center justify-center"
            >
              <span className="text-xs sm:text-sm text-muted-foreground/60 font-medium tracking-wide group-hover:text-foreground transition-colors duration-300">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
