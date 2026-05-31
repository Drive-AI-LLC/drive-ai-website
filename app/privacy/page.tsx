import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | <em>Drive</em> AI",
  description: "<em>Drive</em> AI's privacy policy covering data collection, analytics, and cookie usage.",
}

export default function PrivacyPage() {
  return (
    <main className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs text-primary uppercase tracking-[0.2em] font-semibold mb-4">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-[-0.02em] text-foreground mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-sm text-muted-foreground leading-[1.85]">

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Overview</h2>
            <p>
              <em>Drive AI</em> ("we", "us", "our") operates the website at driveai.llc. This page explains what information we collect, how we use it, and what choices you have. We keep this simple because we have no interest in collecting more than we need.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Information We Collect</h2>
            <p>
              We collect information you submit directly through our contact form or email. This includes your name, email address, company name, and any message you send us.
            </p>
            <p className="mt-3">
              We also collect information through Calendly when you book a meeting. Calendly handles that scheduling process and has its own privacy policy governing how they store and use booking data.
            </p>
            <p className="mt-3">
              We do not collect payment information, and we do not require you to create an account to use this website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Google Analytics</h2>
            <p>
              We use Google Analytics to understand how visitors use the website. This includes data like which pages are visited, how long visitors stay, and what devices or browsers are used. This data is aggregated and does not identify you personally.
            </p>
            <p className="mt-3">
              Google Analytics uses cookies to collect this information. You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Cookies</h2>
            <p>
              This website uses cookies to improve your experience. Cookies are small text files stored on your device that help us understand how the site is used. We use cookies for analytics purposes through Google Analytics.
            </p>
            <p className="mt-3">
              Analytics cookies are only enabled after you accept cookie usage through the site's consent banner.
            </p>
            <p className="mt-3">
              You can control cookie settings through your browser. Disabling cookies may affect how certain parts of the site function.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <p>
              Information you submit through contact forms or email is used only to respond to your inquiry. We do not use it for marketing unless you have explicitly asked us to follow up.
            </p>
            <p className="mt-3">
              Analytics data is used to improve the website, understand what content is useful, and identify technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">We Do Not Sell Your Data</h2>
            <p>
              <em>Drive AI</em> does not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Third-Party Services</h2>
            <p>
              We use Calendly for meeting scheduling and Google Analytics for traffic analysis. Each of these services has its own privacy policy. We are not responsible for how third-party services handle data collected on their platforms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Data Retention</h2>
            <p>
              We retain submitted information only as long as necessary to respond to inquiries, maintain business records, or improve the website and our services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be reflected by the 'Last updated' date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, reach out at{" "}
              <a href="mailto:inquiries@driveai.llc" className="text-primary underline underline-offset-2">
                inquiries@driveai.llc
              </a>. You may also contact us to request deletion of information you previously submitted.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-border">
          <Link href="/" className="text-sm text-primary hover:underline underline-offset-2">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
