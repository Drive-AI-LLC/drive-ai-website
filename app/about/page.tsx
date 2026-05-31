"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const founders = [
  {
    name: "Danika Pfleghardt",
    role: "Co-Founder",
    image: "/images/team/danika.jpg",
    bio: "Danika leads marketing and growth at Drive AI. Over the past few years, she has worked across several startups and spent a lot of time helping businesses improve communication and brand presence. At Drive AI, she is focused on helping roofing companies modernize the way they coordinate and scale.",
  },
  {
    name: "Reid Turner",
    role: "Co-Founder",
    image: "/images/team/reid.jpg",
    bio: "Reid oversees the technical side of Drive AI along with the legal aspects and operations behind the company. Before starting Drive AI, he gained experience in finance and investor relations at a Fortune 500 company, which shaped the way he thinks about organization and long-term growth.",
  },
]

const principles = [
  {
    title: "Built for roofing",
    description: "We built this specifically for roofing companies, not generic business software dressed up for the industry.",
  },
  {
    title: "Speed over manual work",
    description: "What used to take 4–8 hours of manual work now takes minutes. We automate the process so your team stays focused on jobs.",
  },
  {
    title: "Revenue focused",
    description: "Every feature we build is tied to one outcome: more money recovered on every claim you file.",
  },
  {
    title: "Real support",
    description: "We're reachable, responsive, and invested in your results. You're not just buying software.",
  },
]

function PrincipleCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  const { ref, visible } = useScrollReveal(0.2)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="border-l-2 border-primary/30 pl-5 overflow-hidden"
    >
      <div
        className="transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-28px)",
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <h3 className="text-base font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const heroReveal = useScrollReveal(0.1)
  const founder0 = useScrollReveal(0.15)
  const founder1 = useScrollReveal(0.15)
  const founderCardRefs = [founder0, founder1]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div
            ref={heroReveal.ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${heroReveal.visible ? "is-visible" : ""} max-w-2xl`}
          >
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-6">
              What we do.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <em>Drive</em> AI builds AI-powered tools for roofing companies. Right now we&apos;re focused on one thing: helping roofers recover every dollar they&apos;re owed after an insurance claim.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif">
              Meet the founders.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                ref={founderCardRefs[index].ref as React.RefObject<HTMLDivElement>}
                className={`reveal ${founderCardRefs[index].visible ? "is-visible" : ""} bg-background rounded-lg border border-border p-6 flex flex-row gap-6 items-stretch`}
                style={{ transitionDelay: founderCardRefs[index].visible ? `${index * 120}ms` : "0ms" }}
              >
                <div className="w-[140px] h-[140px] relative rounded-md overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col min-w-0 justify-center">
                  <h3 className="text-base font-semibold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-primary uppercase tracking-[0.15em] font-semibold mt-0.5 mb-3">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {founder.name.startsWith("Danika")
                      ? <>Danika leads marketing and growth at <em>Drive</em> AI. Over the past few years, she has worked across several startups and spent a lot of time helping businesses improve communication and brand presence. At <em>Drive</em> AI, she is focused on helping roofing companies modernize the way they coordinate and scale.</>
                      : <>Reid oversees the technical side of <em>Drive</em> AI along with the legal aspects and operations behind the company. Before starting <em>Drive</em> AI, he gained experience in finance and investor relations at a Fortune 500 company, which shaped the way he thinks about organization and long-term growth.</>
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif mb-10">
            What we stand for.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                title={principle.title}
                description={principle.description}
                delay={index * 120}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's start the conversation."
        supporting={
          <>
            We&apos;re building <em>Drive</em> AI alongside roofing companies focused on smarter operations and long-term
            growth.
          </>
        }
      />

      <Footer />
    </main>
  )
}
