import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Building2, Wrench, ShoppingBag, Stethoscope, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies | Drive AI",
  description: "See how Drive AI has helped businesses save time and operate more efficiently with AI automation.",
}

const caseStudies = [
  {
    icon: Building2,
    business: "Clemson Area Chamber of Commerce",
    industry: "Non-Profit / Business Association",
    problem: "Manual research and data entry taking hundreds of hours to compile contact lists for outreach campaigns",
    solution: "Built an automated web scraping and data compilation system that gathers rowing team contacts from thousands of websites",
    result: "Saved over 100 hours of manual labor and improved employee ability to make sales calls with ready-to-contact information",
    testimonial: <><em>Drive</em> AI was able to find Rowing team contacts from thousands of websites and compile them into an easy-to-read excel sheet with ready-to-contact emails and phone numbers.</>,
    author: "Dylan Johns, Program Coordinator",
  },
  {
    icon: Wrench,
    business: "Engineering Firm",
    industry: "Professional Services",
    problem: "Purchase orders manually entered into accounting software, consuming staff time and introducing errors",
    solution: "Implemented automated purchase order data entry system with validation and error checking",
    result: "Eliminated 15 hours of weekly data entry, allowing staff to focus on higher-value work",
    testimonial: null,
    author: null,
  },
  {
    icon: ShoppingBag,
    business: "E-commerce Brand",
    industry: "Retail",
    problem: "Customer support team overwhelmed with repetitive questions about orders, shipping, and returns",
    solution: "Deployed AI-powered customer support assistant trained on company policies and product information",
    result: "70% of customer inquiries now handled automatically with high satisfaction rates",
    testimonial: null,
    author: null,
  },
  {
    icon: Stethoscope,
    business: "Healthcare Practice",
    industry: "Healthcare",
    problem: "Appointment scheduling and reminders handled manually, leading to high no-show rates",
    solution: "Created automated scheduling and multi-channel reminder system with confirmation tracking",
    result: "50% reduction in no-shows and significant time savings for administrative staff",
    testimonial: null,
    author: null,
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance font-serif">
              Real results for real businesses
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              See how we have helped businesses like yours save time, reduce manual work, and operate more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl border border-border p-6 lg:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <study.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {study.business}
                        </h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        The Challenge
                      </p>
                      <p className="text-foreground leading-relaxed">{study.problem}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Our Solution
                      </p>
                      <p className="text-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        The Result
                      </p>
                      <p className="text-primary font-semibold text-lg">{study.result}</p>
                    </div>

                    {study.testimonial && (
                      <div className="pt-6 border-t border-border">
                        <blockquote className="text-muted-foreground italic">
                          &ldquo;{study.testimonial}&rdquo;
                        </blockquote>
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {study.author}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance font-serif">
            Ready to become our next success story?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can help your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
