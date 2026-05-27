import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { SolutionSection } from "@/components/solution-section"
import { WhatWeDetect } from "@/components/what-we-detect"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <SolutionSection />
      <WhatWeDetect />
      <HowItWorks />
      <Testimonials />
      <CTASection
        headline="Stop leaving money on every claim."
        supporting={
          <>
            See how <em>Drive</em> AI helps roofing companies recover revenue from every insurance estimate.
          </>
        }
      />
      <Footer />
    </main>
  )
}
