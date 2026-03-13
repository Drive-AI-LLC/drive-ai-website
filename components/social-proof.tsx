"use client"

import Image from "next/image"

const memberships = [
  {
    name: "Clemson Area Chamber",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clemson%20Area%20Chamber%20of%20Commerce-LYwC4VuqEuBWQjJdttfPWefNECYJow.png",
  },
  {
    name: "Oconee Chamber",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oconee%20Chamber%20of%20Commerce-zItwtjQxjyIfXp8xpLWaHDUwYxf25d.png",
  },
  {
    name: "Easley Chamber",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Easely%20Chamber%20of%20Commerce-QU4uyhAPbwiV0euo18jb07oyZBmMTc.png",
  },
  {
    name: "Launchpad",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launchpad-yndhgxgIjmMYxj4JL4wWrW8kmR5ELr.jpg",
  },
]

export function SocialProof() {
  return (
    <section className="py-12 sm:py-16 bg-muted/20 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-xs sm:text-sm font-medium text-muted-foreground/80 uppercase tracking-[0.2em] mb-8 sm:mb-10">
          Members of
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-6 sm:gap-y-8">
          {memberships.map((org) => (
            <div
              key={org.name}
              className="group relative flex items-center justify-center w-24 sm:w-28 h-16 sm:h-20"
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={120}
                height={80}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
