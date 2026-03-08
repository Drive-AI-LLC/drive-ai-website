import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Workflow, Sparkles, Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | Drive AI",
  description: "AI automation and consulting services for small businesses. Workflow automation, custom AI tools, and strategic consulting.",
}

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks across your existing software. Connect your tools and let them work together seamlessly.",
    features: [
      "Automated data entry and processing",
      "Cross-platform integrations",
      "Custom trigger-based workflows",
      "Real-time notifications and alerts",
    ],
  },
  {
    icon: Sparkles,
    title: "Custom AI Tools",
    description: "Build tools tailored specifically to your business processes. From document analysis to smart assistants.",
    features: [
      "Document analysis and extraction",
      "Custom AI assistants",
      "Intelligent data processing",
      "Automated report generation",
    ],
  },
  {
    icon: Lightbulb,
    title: "AI Strategy & Consulting",
    description: "Identify the highest-impact ways AI can improve your operations. Get a roadmap for practical implementation.",
    features: [
      "Business process analysis",
      "AI opportunity assessment",
      "Implementation roadmap",
      "ROI projections and planning",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance font-serif">
              AI solutions that actually work for your business
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We build practical AI tools and automations designed for small businesses. No complex systems, just real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-serif mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-background rounded-2xl border border-border p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square bg-muted/50 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance font-serif">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how our services can help your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
