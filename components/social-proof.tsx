"use client"

import Image from "next/image"

const organizations = [
  {
    name: "Clemson Area Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clemson%20Area%20Chamber%20of%20Commerce-LYwC4VuqEuBWQjJdttfPWefNECYJow.png",
  },
  {
    name: "Oconee County Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oconee%20Chamber%20of%20Commerce-zItwtjQxjyIfXp8xpLWaHDUwYxf25d.png",
  },
  {
    name: "Easley Chamber of Commerce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Easely%20Chamber%20of%20Commerce-QU4uyhAPbwiV0euo18jb07oyZBmMTc.png",
  },
  {
    name: "Launchpad",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launchpad-yndhgxgIjmMYxj4JL4wWrW8kmR5ELr.jpg",
  },
  {
    name: "Clemson News",
    logo: "/images/logos/clemson-news.png",
  },
  {
    name: "The Journal",
    logo: "/images/logos/the-journal.png",
  },
]

export function SocialProof() {
  return (
    <section className="py-10 sm:py-14 bg-muted/20 border-y border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-semibold text-muted-foreground/60 uppercase tracking-[0.3em] mb-8 sm:mb-10">
          Recognized &amp; Supported By
        </p>
        <div className="flex flex-nowrap justify-center items-center gap-x-8 sm:gap-x-10 lg:gap-x-12">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={160}
                height={64}
                className="h-8 sm:h-9 w-auto object-contain grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
