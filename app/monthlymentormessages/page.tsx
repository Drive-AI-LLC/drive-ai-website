'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronDown } from 'lucide-react'

const mentorMessages = [
  {
    month: 'July 2026',
    sections: [
      {
        title: 'Finalized Our Ideal Customer',
        content: 'After two months of discovery calls and research, we\'ve landed on our ideal customers: roofing companies and public/fractional supplementers who already use Xactimate.'
      },
      {
        title: 'A Quick Note on Xactimate',
        content: 'Since we just mentioned Xactimate, and we\'ll bring it up again below, it\'s worth a quick explanation. Xactimate is the software most insurance carriers and contractors use to price out repair work. It\'s essentially where the official cost data for materials and labor lives. It is what determines how much a claim is worth. Symbility is a second, less common platform that some carriers use instead. Both platforms are important integrations that can take our product to the next level.'
      },
      {
        title: 'Product',
        content: 'Most of our time this past month has been spent on the product. We have done the following:',
        points: [
          'Prioritization: Narrowed down the features that matter most for our ICP, and cut ones that weren\'t impactful',
          'Bug Fixes: Resolved a production issue that had been blocking new sign-ups',
          '98% There: The app is almost out of waitlist mode and open to new users again'
        ]
      },
      {
        title: 'Revenue Runway Cohort',
        content: 'We officially graduated from the Revenue Runway Founder Cohort this month. Looking back, it was a phenomenal experience. Three months of testing our ideas alongside other early-stage founders sharpened how we think about ICP, revenue, and building with intention. It\'s easily been one of the most valuable resources we\'ve had this summer.'
      },
      {
        title: 'Our Roadmap',
        content: 'As we look ahead, we\'re thinking about our roadmap in tiers. Deeper integrations like Xactimate and Symbility aren\'t required to get value from the product today, but they\'re upgrades that will make the product more powerful over time and open it up to an even wider set of contractors and supplementers who aren\'t in our reach yet. In other words, what we\'re building now works, and what we build next just grows how many people it can work for.'
      },
      {
        title: 'What\'s Ahead',
        content: 'In August, Danika heads to Madrid for a semester of study abroad, and Reid returns to Clemson. Danika will stay closely involved, but Reid will be stepping into more of the hands-on day-to-day role this fall as we head back to school.'
      }
    ]
  },
  {
    month: 'June 2026',
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
    month: 'May 2026',
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
  const [expandedMonth, setExpandedMonth] = useState(-1)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-4" style={{ color: '#141C2E' }}>
            Monthly Mentor Messages
          </h1>
          <div className="mb-12">
            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              These are written by Reid and Danika, sharing Drive AI's progress.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              We're grateful to have mentors like you in our corner. Thanks for following along.
            </p>
          </div>

          <div className="space-y-4">
            {mentorMessages.map((message, idx) => (
              <div
                key={idx}
                className="border border-border/60 rounded-lg overflow-hidden bg-muted/20"
              >
                <button
                  onClick={() => setExpandedMonth(expandedMonth === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/40 transition-colors"
                >
                  <h2 className="text-2xl font-serif font-bold hover:text-opacity-100 transition-colors" style={{ color: '#141C2E' }}>
                    <span className="hover:text-[#0F6E56] transition-colors">{message.month}</span>
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
