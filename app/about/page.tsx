import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Drive AI",
  description: "Drive AI builds revenue-generating systems for roofing companies.",
}

const founders = [
  {
    name: "Danika Pfleghardt",
    role: "Co-Founder",
    image: "/images/team/danika.jpg",
    bio: "I lead marketing and growth at Drive AI. Over the past few years, I've worked across several startups and spent a lot of time helping businesses improve communication and brand presence. At Drive AI, I'm focused on helping roofing companies modernize the way they coordinate and scale.",
  },
  {
    name: "Reid Turner",
    role: "Co-Founder",
    image: "/images/team/reid.jpg",
    bio: "I oversee the technical side of Drive AI along with the legal aspects and operations behind the company. Before starting Drive AI, I gained experience in finance and investor relations at a Fortune 500 company, which shaped the way I think about organization and long-term growth.",
  },
]

const principles = [
  {
    title: "Built for roofing",
    description: "We specialize in roofing operations — not generic business software.",
  },
  {
    title: "Systems over tools",
    description: "We build workflows that run without constant oversight.",
  },
  {
    title: "Revenue-focused",
    description: "Every system is designed to recover money or generate leads.",
  },
  {
    title: "Partnership approach",
    description: "We work alongside your team to fit your operation.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.18em] mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.03em] leading-[1.08] font-serif mb-6">
              What we do.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Drive AI builds revenue-generating systems for roofing companies. We focus on operational workflows including supplement recovery, storm outreach, and production coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif mb-10">
            Meet the founders.
          </h2>
          
          <div className="flex flex-col gap-6">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-background rounded-lg border border-border p-6 flex flex-row gap-6 items-stretch">
                <div className="w-40 h-40 relative rounded-md overflow-hidden bg-muted flex-shrink-0">
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
                    {founder.bio}
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
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[-0.03em] font-serif mb-10">
            What we stand for.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="border-l-2 border-primary/30 pl-5">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's start the conversation."
        supporting="We're building Drive AI alongside roofing companies focused on smarter operations and long-term growth."
      />

      <Footer />
    </main>
  )
}
