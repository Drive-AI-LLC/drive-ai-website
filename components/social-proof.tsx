"use client"

import Image from "next/image"

const organizations = [
  {
    name: "Clemson Area Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clemson%20Area%20Chamber%20of%20Commerce-LYwC4VuqEuBWQjJdttfPWefNECYJow.png",
    height: "h-10 sm:h-11",
  },
  {
    name: "Oconee County Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oconee%20Chamber%20of%20Commerce-zItwtjQxjyIfXp8xpLWaHDUwYxf25d.png",
    height: "h-8 sm:h-9",
  },
  {
    name: "Easley Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Easely%20Chamber%20of%20Commerce-QU4uyhAPbwiV0euo18jb07oyZBmMTc.png",
    height: "h-8 sm:h-9",
  },
  {
    name: "Launchpad",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launchpad-yndhgxgIjmMYxj4JL4wWrW8kmR5ELr.jpg",
    height: "h-11 sm:h-12",
  },
  {
    name: "Clemson News",
    logo: "/images/logos/clemson-news.png",
    height: "h-5 sm:h-6",
  },
  {
    name: "The Journal",
    logo: "/images/logos/the-journal.png",
    height: "h-10 sm:h-11",
  },
  {
    name: "Consilium Solutions LLC",
    logo: "/images/logos/consilium.jpg",
    height: "h-14 sm:h-16",
  },
  {
    name: "Harvard Business School Foundry",
    logo: "/images/logos/hbs-foundry.svg",
    height: "h-10 sm:h-11",
  },
]

export function SocialProof() {
  return (
    <section className="py-10 sm:py-14 bg-muted/40 border-y border-border/40">
      <div className="max-w-[1080px] mx-auto">
        <p className="text-center text-[10px] sm:text-xs font-semibold text-muted-foreground/60 uppercase tracking-[0.3em] mb-8 sm:mb-10 px-5 sm:px-6 lg:px-8">
          Recognized &amp; Supported By
        </p>

        {/* Auto-scrolling marquee — all screen sizes, no pause on hover */}
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-x-24" style={{ width: "max-content" }}>
            {[...organizations, ...organizations].map((org, i) => (
              <div
                key={i}
                className="marquee-logo flex items-center justify-center flex-shrink-0 bg-transparent"
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={120}
                  height={48}
                  className={`${org.height} w-auto object-contain`}
                  style={{ mixBlendMode: "multiply", background: "transparent" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
