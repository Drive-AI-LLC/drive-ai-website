export function SocialProof() {
  const logos = [
    { name: "Acme Corp", initials: "AC" },
    { name: "TechFlow", initials: "TF" },
    { name: "BuildRight", initials: "BR" },
    { name: "GrowFast", initials: "GF" },
    { name: "NextLevel", initials: "NL" },
  ]

  return (
    <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by growing businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-semibold text-sm">{logo.initials}</span>
              </div>
              <span className="font-medium text-lg hidden sm:inline">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
