import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsRow } from "@/components/stats-row"
import { SocialProof } from "@/components/social-proof"
import { SolutionSection } from "@/components/solution-section"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsRow />
      <SolutionSection />
      <SocialProof />
      <PricingSection />
      <Testimonials />
      <CTASection
        headline="Close every claim with confidence."
        supporting="Run your first supplement free. No card required, no commitment."
      />
      <Footer />
    </main>
  )
}
