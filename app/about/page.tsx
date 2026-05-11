import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { WhyDriveAI } from "@/components/why-drive-ai"
import { Target, Heart, Zap, Users } from "lucide-react"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About | Drive AI",
  description: "Learn about Drive AI and our mission to help small businesses implement practical AI solutions.",
}

const values = [
  {
    icon: Target,
    title: "Practical Solutions",
    description: "We focus on AI that actually works for your business, not flashy technology for its own sake.",
  },
  {
    icon: Heart,
    title: "Integrity First",
    description: "We are transparent about what will and won't work. If a project isn't a good fit, we'll tell you.",
  },
  {
    icon: Zap,
    title: "Real Results",
    description: "Our success is measured by the time and money we save you, not by the complexity of our solutions.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work alongside you to understand your business, not just deliver a product and walk away.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance font-serif">
                Making AI accessible for small business
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Drive AI was founded by Danika and Reid, two Clemson University students who saw an opportunity to help small businesses leverage AI without the complexity and high costs typically associated with enterprise solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We believe that every business, regardless of size, should have access to the efficiency gains that AI can provide. Our mission is to make that a reality through practical, affordable solutions that deliver real results.
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 border border-border">
              <div className="aspect-square bg-background rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary font-serif">2</p>
                  <p className="text-muted-foreground mt-2">Founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif">
              Help small businesses save time with practical AI
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We are not here to sell you on futuristic promises. We are here to identify the repetitive, time-consuming tasks in your business and automate them with reliable, understandable AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif">
              What we stand for
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-muted/30 border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Drive AI */}
      <WhyDriveAI />

      {/* Testimonials */}
      <Testimonials />

      <CTASection
        headline="Let's start the conversation."
        supporting="We're building Drive AI alongside roofing companies focused on smarter operations and long-term growth."
      />

      <Footer />
    </main>
  )
}
