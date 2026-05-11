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
    <section className="py-8 sm:py-10 bg-muted/20 border-y border-border/40">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-medium text-muted-foreground/80 uppercase tracking-[0.2em] mb-6 sm:mb-7">
          Members of
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-4 sm:gap-y-5">
          {memberships.map((org) => (
            <div
              key={org.name}
              className="group relative flex items-center justify-center w-24 sm:w-28 h-10 sm:h-12"
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={128}
                height={56}
                className="w-auto h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
