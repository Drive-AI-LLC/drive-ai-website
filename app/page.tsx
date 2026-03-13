import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { ProblemSection } from "@/components/problem-section"
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
      <ProblemSection />
      <SolutionSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
