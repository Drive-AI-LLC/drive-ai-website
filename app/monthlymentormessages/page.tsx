'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronDown } from 'lucide-react'

const mentorMessages = [
  {
    month: 'June 2025',
    sections: [
      {
        title: 'Going Deep in the Industry',
        content: 'June was intentionally a research and validation month. Rather than continuing to build without full confidence in the problem, we\'ve been working to truly understand the roofing supplement industry from the inside out.',
        points: [
          'Discovery Calls: We\'ve begun conducting discovery calls with roofing companies and supplementers to pressure-test our assumptions about where the real pain is in the workflow.',
          'Research: Alongside those calls, we\'ve been spending significant time in industry forums, communities, and content to build a more accurate understanding of how supplementers actually work day to day.',
          'ICP (Ideal Client Profile) Sharpening: This research has pointed us toward public and fractional supplementers as our clearest ideal customer, given their Xactimate access and volume of claims. We\'re continuing to validate this.'
        ]
      },
      {
        title: 'Product',
        content: '',
        points: [
          'Waitlist Mode: The app is currently in waitlist mode for new users while we refine the product based on what we\'re learning. Beta testers retain full access and continue to give us useful feedback.',
          'Features in Progress: We\'re continuing to improve the product behind the scenes, things like making sure the payment flow works correctly, improving the PDF output that gets sent to adjusters, and saving job history so contractors can reference past supplements.'
        ]
      },
      {
        title: 'Revenue Runway Cohort',
        content: 'We\'re almost two months into the Revenue Runway Founder Cohort, a three-month program where a small group of early-stage founders meet regularly to share progress, pressure-test ideas, and hold each other accountable. It\'s been one of our most valuable resources this summer. The sessions push us to stay disciplined about ICP, revenue focus, and building with intention rather than building for the sake of it.'
      },
      {
        title: 'Community',
        content: 'Danika has been attending networking events in the D.C. area this summer, which have been a great way to stay connected to the local business community and keep conversations going outside of the roofing industry specifically. Reid remains actively involved in Drive AI from Hartsville, SC, where he\'s based this summer.'
      }
    ]
  },
  {
    month: 'May 2025',
    sections: [
      {
        title: 'Narrowing Our Niche & Product Development',
        content: 'At the start of May, we were broadly helping roofing companies with AI. Now, we\'ve zeroed in on a specific niche: helping residential roofers with the insurance supplementing process. This focus has also begun to shift Drive AI from a consulting model toward a SaaS product business, which is an exciting direction for us.',
        points: [
          'Product Build: We have a dedicated product nearly complete and will begin onboarding beta testers shortly.',
          'Why It Matters: After a roof is damaged, insurance estimates are often incomplete or underpriced. Roofers can submit a supplement to recover what\'s owed, but the process takes 4 to 8 hours per job. Many smaller roofers skip it entirely, leaving up to $5,000 on the table per roof. Our product automates roughly 90% of the process.'
        ]
      },
      {
        title: 'Revenue Runway Founder Cohort',
        content: 'We were selected to join the Revenue Runway Cohort, a competitive cohort helping bootstrapping founders generate revenue and scale without outside capital. The sessions have been extremely impactful, helping us refine our ICP (ideal client profile) as well as setting strong, measurable goals to track our company\'s progress.'
      },
      {
        title: 'Tailwind Tech Summit',
        content: 'Attended the Tailwind Tech Summit earlier this month. It was a great experience connecting with passionate founders and entrepreneurs, and a valuable reminder of the strong community being built in the startup space.'
      },
      {
        title: 'Website',
        content: 'Made two meaningful revisions to our website this month. It now reflects what we\'re building and who we\'re building it for. More iterations will come, but we\'re proud of where it stands today.'
      },
      {
        title: 'Social Media & Content',
        content: '',
        points: [
          'Content Pivot: With our sharper niche came a sharper content strategy. Our social media has fully shifted to roofing-focused content, and our voice and positioning are becoming clearer with every post.',
          'LinkedIn Growth: Followers grew from 484 to 556 this month.'
        ]
      },
      {
        title: 'Looking Ahead This Summer',
        content: 'This summer, Reid is interning with Sonoco, a Fortune 500 manufacturing company in Hartsville, SC, while Danika continues building Drive AI in Vienna, VA. In Vienna, we\'re already making progress in conversations with local roofers, which has us excited for the months ahead. Reid stays actively involved in Drive AI throughout, and we\'re both focused on making this an impactful summer for the company.'
      }
    ]
  }
]

export default function MentorMessagesPage() {
  const [expandedMonth, setExpandedMonth] = useState(0)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4" style={{ color: '#141C2E' }}>
            Mentor Updates
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-12">
            Monthly updates from the Drive AI team on company progress, learnings, and direction.
          </p>

          <div className="space-y-4">
            {mentorMessages.map((message, idx) => (
              <div
                key={idx}
                className="border border-border/60 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMonth(expandedMonth === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                >
                  <h2 className="text-2xl font-serif font-bold" style={{ color: '#141C2E' }}>
                    {message.month}
                  </h2>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${
                      expandedMonth === idx ? 'transform rotate-180' : ''
                    }`}
                    style={{ color: '#0F6E56' }}
                  />
                </button>

                {expandedMonth === idx && (
                  <div className="px-6 pb-6 border-t border-border/40 pt-6 space-y-8">
                    {message.sections.map((section, sIdx) => (
                      <div key={sIdx}>
                        <h3 className="text-lg font-serif font-bold mb-3" style={{ color: '#0F6E56' }}>
                          {section.title}
                        </h3>
                        {section.content && (
                          <p className="text-base leading-relaxed text-foreground mb-4">
                            {section.content}
                          </p>
                        )}
                        {section.points && section.points.length > 0 && (
                          <ul className="space-y-3">
                            {section.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex gap-3 text-base leading-relaxed">
                                <span className="text-muted-foreground flex-shrink-0 mt-1">•</span>
                                <span className="text-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
