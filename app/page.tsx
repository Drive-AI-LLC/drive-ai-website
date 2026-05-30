import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { SolutionSection } from "@/components/solution-section"
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
      <Testimonials />
      <CTASection
        headline="See what your last claim was actually worth."
        supporting="Run your first supplement free. No card required, no commitment."
      />
      <Footer />
    </main>
  )
}
