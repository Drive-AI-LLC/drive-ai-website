import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Drive AI",
  description: "Get in touch with Drive AI. Schedule a free consultation to discuss how AI can help your business.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance font-serif">
              Let's talk about your business
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Schedule a free consultation to discuss how AI and automation can help you save time and operate more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      <Footer />
    </main>
  )
}
