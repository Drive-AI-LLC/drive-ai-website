"use client"

import Image from "next/image"

const memberships = [
  { 
    name: "Clemson Area Chamber of Commerce", 
    logo: "/images/memberships/clemson-chamber.png",
  },
  { 
    name: "Oconee Chamber of Commerce", 
    logo: "/images/memberships/oconee-chamber.png",
  },
  { 
    name: "Easley Chamber of Commerce", 
    logo: "/images/memberships/easley-chamber.png",
  },
  { 
    name: "Launchpad TV", 
    logo: "/images/memberships/launchpad-tv.png",
  },
  { 
    name: "Brook T. Smith Launchpad", 
    logo: "/images/memberships/brook-launchpad.png",
  },
]

export function SocialProof() {
  return (
    <section className="py-12 lg:py-16 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Members of
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {memberships.map((org) => (
            <div
              key={org.name}
              className="group relative flex items-center justify-center h-12 w-32 lg:w-40"
            >
              {/* Placeholder - replace with actual logos */}
              <div className="flex items-center justify-center w-full h-full bg-muted rounded-lg grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-muted-foreground text-center px-2 font-medium">
                  {org.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
