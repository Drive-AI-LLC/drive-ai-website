import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

const blogPosts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  content: React.ReactNode
}> = {
  "crew-scheduling-mistakes-costing-you-time": {
    title: "Crew Scheduling Mistakes Costing You Time and Money",
    excerpt: "Poor scheduling creates downtime, travel gaps, and missed revenue opportunities. Here's how to optimize crew allocation and maximize productivity.",
    category: "Operations",
    date: "May 5, 2026",
    image: "/images/blog/crew-scheduling.jpg",
    content: (
      <>
        <p>
          Scheduling seems simple on the surface — match crew to job, confirm the time, move on. But for most roofing companies, the reality looks very different. Jobs get stacked in the wrong order. Crews drive past each other on the highway. A material delay on one job cascades into two lost afternoons somewhere else.
        </p>
        <p>
          The result is wasted labor hours, frustrated homeowners, and margin that quietly disappears before anyone notices. Here are the most common scheduling mistakes roofing companies make — and what to do instead.
        </p>

        <h2>1. Scheduling by Availability Instead of Geography</h2>
        <p>
          One of the most costly scheduling habits is assigning the next available crew regardless of where the job is located. When crews spend 45 minutes driving to a job that a different crew could have reached in 10, that travel time eats directly into your profitability.
        </p>
        <p>
          Routing schedules geographically — grouping jobs by neighborhood or zip code — reduces windshield time significantly. Over the course of a week, this can reclaim several productive hours per crew.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            Geographic scheduling is one of the simplest changes with one of the highest returns. Start by mapping your weekly jobs before assigning crews.
          </p>
        </div>

        <h2>2. No Buffer Between Jobs</h2>
        <p>
          Back-to-back scheduling with no buffer assumes everything goes perfectly. In roofing, it rarely does. A job runs long due to decking damage. A homeowner isn't home. Materials arrive late. When there's no buffer, one delay ripples through the rest of the day.
        </p>
        <p>
          Building in a realistic buffer — even 30 to 45 minutes between jobs — gives crews room to absorb small delays without disrupting the entire schedule. It also reduces the stress that leads to quality issues and callbacks.
        </p>

        <h2>3. Manually Tracking Crew Status</h2>
        <p>
          If your production manager is calling or texting crews throughout the day to figure out where they are and when they'll be done, that's a coordination system that doesn't scale. It consumes time, creates communication gaps, and makes it difficult to make real-time scheduling decisions.
        </p>
        <p>
          Even a basic shared job board or workflow system can dramatically improve visibility across crews and reduce the number of check-in calls needed each day.
        </p>

        <h2>4. No Clear Handoff From Sales to Production</h2>
        <p>
          One of the most overlooked scheduling issues isn't on the production side at all — it's the moment a job moves from sold to scheduled. When that handoff is unclear, jobs sit in limbo. Material orders get delayed. The homeowner doesn't hear anything for days. And the production team scrambles to find a spot in the schedule at the last minute.
        </p>
        <p>
          A defined process for how a closed deal enters the production pipeline — with assigned responsibilities and clear timelines — eliminates most of this friction.
        </p>

        <h2>5. Over-Relying on One Key Scheduler</h2>
        <p>
          When one person holds all the scheduling knowledge in their head, you have a single point of failure. If they're out sick, on vacation, or leave the company, the whole system stalls. Scheduling logic and job status need to live in a shared system — not a spreadsheet on one person's desktop.
        </p>

        <h2>Where to Start</h2>
        <p>
          You don't need to overhaul everything at once. Start by tracking where your current schedule breaks down most often. Is it the handoff from sales? Crew travel time? Day-of delays? Identify the single biggest friction point and fix that first. Small improvements compound quickly in production operations.
        </p>
      </>
    ),
  },
  "why-roofing-companies-leave-money-on-the-table": {
    title: "Why Roofing Companies Leave Money on the Table",
    excerpt: "Most roofers miss supplement opportunities on every claim. Here's how to identify gaps in your current process and recover what you're owed.",
    category: "Supplements",
    date: "April 28, 2026",
    image: "/images/blog/supplements.jpg",
    content: (
      <>
        <p>
          Most roofing companies doing insurance work are getting paid less than they should on every claim. Not because adjusters are dishonest — but because the supplement process is time-consuming, detail-oriented, and easy to deprioritize when the team is focused on closing the next job.
        </p>
        <p>
          The result is consistent, invisible revenue loss. Here's why it happens and how to fix it.
        </p>

        <h2>What Gets Missed Most Often</h2>
        <p>
          Insurance estimates are written quickly. Adjusters are managing high volumes, especially post-storm, and line items that require documentation or justification are frequently omitted from the initial estimate. Common missed items include:
        </p>
        <ul>
          <li>Detach and reset work for gutters, skylights, and HVAC equipment</li>
          <li>Drip edge and code-required upgrades that vary by jurisdiction</li>
          <li>Starter strip as a separate line item</li>
          <li>Roof deck replacement that wasn't visible during the initial inspection</li>
          <li>Additional layers of existing roofing material</li>
          <li>Permit fees and sales tax where applicable</li>
        </ul>
        <p>
          On an average residential claim, missed line items often add up to several hundred to several thousand dollars. Multiplied across the number of claims your company handles in a year, this represents significant recoverable revenue.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            Supplementing isn't about overcharging — it's about being paid accurately for the scope of work actually required. Every missed line item is money your company earned but didn't collect.
          </p>
        </div>

        <h2>Why Most Companies Don't Supplement Consistently</h2>
        <p>
          The issue isn't awareness — most contractors know supplements exist. The issue is capacity. Writing a supplement requires cross-referencing the estimate against the actual job scope, knowing which line items are defensible, understanding carrier-specific preferences, and following up persistently until it's approved.
        </p>
        <p>
          When your production team is already stretched thin managing active jobs, supplementing becomes the thing that gets done "when there's time." There's rarely time.
        </p>

        <h2>Building a Supplement Process That Runs</h2>
        <p>
          The companies that recover the most revenue from supplements treat it as a defined workflow, not an ad hoc task. That means:
        </p>
        <ul>
          <li>A consistent checklist of items to review on every estimate</li>
          <li>Clear ownership of who submits supplements and follows up</li>
          <li>A tracking system so nothing falls through the cracks</li>
          <li>Documentation habits on every job to support supplement requests</li>
        </ul>
        <p>
          When the process is defined and the documentation is in place, supplement recovery becomes predictable — not a function of how much bandwidth the team had that week.
        </p>
      </>
    ),
  },
  "storm-response-speed-matters": {
    title: "Storm Response: Why Speed Matters More Than You Think",
    excerpt: "The first 48 hours after a storm determine who wins the neighborhood. Learn how top roofing companies structure their outreach.",
    category: "Storm Response",
    date: "April 21, 2026",
    image: "/images/blog/storm-response.jpg",
    content: (
      <>
        <p>
          After a significant hail or wind event, every roofing company in the market is looking at the same radar data. The difference between who wins the neighborhood and who gets locked out often comes down to hours — not days.
        </p>
        <p>
          Speed in storm response isn't just about being first to knock on a door. It's about being first to build trust, provide value, and make it easy for the homeowner to say yes before a competitor has shown up at all.
        </p>

        <h2>Why the First 48 Hours Are Critical</h2>
        <p>
          Homeowners who experience storm damage go through a predictable pattern. In the hours immediately after a storm, they're assessing the situation — checking their roof from the ground, looking for obvious damage, and trying to figure out what to do. They haven't called their insurance company yet. They haven't talked to a contractor.
        </p>
        <p>
          This window is where relationships are formed. A company that shows up at this moment — with useful information, no pressure, and a clear offer to help — establishes trust before any competitor arrives. Companies that wait until day three or four are often walking onto a property where the homeowner has already made a decision.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            In storm response, every hour of delay is a door your competitor might knock on first. Speed isn't aggressive — it's a service to homeowners who don't know where to start.
          </p>
        </div>

        <h2>What a Fast Storm Response Looks Like</h2>
        <p>
          Top-performing roofing companies have storm response processes that activate automatically when significant weather hits their market. This includes:
        </p>
        <ul>
          <li>Monitoring weather data for affected zip codes before the storm fully clears</li>
          <li>Pre-built outreach sequences ready to deploy within hours of an event</li>
          <li>Field teams briefed and scheduled for canvassing the day after the storm</li>
          <li>Follow-up communications to homeowners who were contacted but didn't convert</li>
        </ul>

        <h2>The Most Common Speed Killers</h2>
        <p>
          Most companies don't respond slowly because they don't care — they respond slowly because their process requires too many manual steps. Figuring out which neighborhoods were hit. Building a canvassing list. Getting the team briefed and out the door. Each of these steps takes time, and time compounds.
        </p>
        <p>
          Automating the early stages of storm response — identification, outreach, and scheduling — removes these friction points and lets the team focus on what they do best: showing up in person and building relationships.
        </p>
      </>
    ),
  },
  "production-bottlenecks-killing-your-margins": {
    title: "5 Production Bottlenecks Killing Your Margins",
    excerpt: "From sales-to-production handoffs to crew scheduling gaps, these common operational issues cost roofing companies thousands every month.",
    category: "Operations",
    date: "April 14, 2026",
    image: "/images/blog/production.jpg",
    content: (
      <>
        <p>
          Roofing companies don't usually lose margin on the job itself. The work gets done, the roof holds, the homeowner is satisfied. The margin disappears in the space between jobs — in handoffs, delays, miscommunications, and inefficiencies that nobody is directly accountable for.
        </p>
        <p>
          Here are the five production bottlenecks we see most consistently, and why they're harder to fix than they look.
        </p>

        <h2>1. The Sales-to-Production Handoff</h2>
        <p>
          When a job is sold, critical information needs to move from the sales team to the production team accurately and quickly. Job scope, materials, HOA restrictions, homeowner preferences, special access instructions — all of it needs to transfer without being filtered through a game of telephone.
        </p>
        <p>
          In most companies, this handoff happens through a combination of texts, emails, notes in a CRM, and verbal conversations. The result is inconsistency. Jobs arrive in production incomplete, requiring callbacks to the salesperson to clarify details that should have been captured at the point of sale.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            A clean handoff process is one of the highest-leverage operational improvements a roofing company can make. Every incomplete handoff creates downstream delays and costs.
          </p>
        </div>

        <h2>2. Material Ordering Without Lead Time Built In</h2>
        <p>
          Ordering materials the day before a scheduled job is a production practice that works — until it doesn't. A supplier is out of stock. Delivery is delayed. The crew shows up and there's nothing to install. Now you're rescheduling, the homeowner is frustrated, and you've paid for a crew day you can't bill.
        </p>

        <h2>3. No Real-Time Job Status Visibility</h2>
        <p>
          When the production manager doesn't know where each crew is in their day, they can't make smart decisions about the afternoon. They can't redirect a crew that finished early to a nearby job. They can't proactively communicate with the next homeowner on the schedule. Everything is reactive.
        </p>

        <h2>4. Rework and Callbacks Without Root Cause Tracking</h2>
        <p>
          Callbacks happen in every roofing company. What separates well-run companies from struggling ones is whether they track why callbacks happen. Without root cause data, the same quality issues repeat indefinitely. With it, you can identify whether the problem is crew-specific, product-specific, or process-specific — and fix it.
        </p>

        <h2>5. Closing Out Jobs Without Collecting Documentation</h2>
        <p>
          A job that's physically complete but not administratively closed is a liability. Missing photos, unsigned certificates of completion, outstanding supplement documentation, unbilled change orders — all of these represent either revenue at risk or problems waiting to surface later.
        </p>
        <p>
          Building job closeout into the production workflow, with checklists and accountability, ensures nothing falls through the cracks after the crew leaves the property.
        </p>
      </>
    ),
  },
  "automating-lead-follow-up-without-losing-the-human-touch": {
    title: "Automating Lead Follow-Up Without Losing the Human Touch",
    excerpt: "Homeowners want fast responses, but they also want to feel heard. Here's how to balance automation with authentic communication.",
    category: "Workflows",
    date: "April 7, 2026",
    image: "/images/blog/follow-up.jpg",
    content: (
      <>
        <p>
          Speed of response is one of the strongest predictors of lead conversion in roofing. A homeowner who fills out a contact form and hears back within five minutes is significantly more likely to become a customer than one who waits until the next morning.
        </p>
        <p>
          But automated follow-up done poorly feels impersonal — and in a high-trust purchase like a roof replacement, impersonal is a conversion killer. The goal is to move fast without sounding like a robot.
        </p>

        <h2>Why Speed Matters So Much</h2>
        <p>
          When a homeowner reaches out to a roofing company, they're often reaching out to more than one at the same time. They're comparing. The company that responds first has a significant advantage — not just because they made contact first, but because they demonstrated responsiveness, which homeowners interpret as a signal of how the company will treat them throughout the project.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            The first response doesn't need to close the deal — it just needs to acknowledge the homeowner quickly and set an expectation for next steps. That alone separates you from most competitors.
          </p>
        </div>

        <h2>What Automation Should and Shouldn't Do</h2>
        <p>
          Automation works well for the initial acknowledgment, appointment confirmation, pre-inspection reminders, and follow-up after no response. These are predictable, time-sensitive touchpoints where a consistent, prompt message adds genuine value.
        </p>
        <p>
          Automation works poorly when it tries to handle nuanced conversations — questions about scope, insurance concerns, or anything that requires judgment. Those touchpoints need a real person.
        </p>

        <h2>Writing Messages That Don't Sound Automated</h2>
        <p>
          The difference between an automated message that works and one that feels hollow usually comes down to specificity. Generic language like "Thank you for your interest in our services" signals automation immediately. Messages that reference the specific inquiry, use the homeowner's name, and have a clear next step feel much more personal — even when they're sent automatically.
        </p>
        <ul>
          <li>Use the homeowner's first name</li>
          <li>Reference the specific service or concern they mentioned</li>
          <li>Give a clear, specific next step ("I'll call you tomorrow between 9 and 11")</li>
          <li>Keep it short — long automated messages feel like marketing, not conversation</li>
        </ul>

        <h2>The Follow-Up Sequence That Works</h2>
        <p>
          For leads that don't convert immediately, a structured follow-up sequence over 7 to 14 days consistently outperforms one-and-done outreach. The sequence should vary in channel — text, email, call — and vary in message so it doesn't feel like the same automated message sent repeatedly. Each touchpoint should add something: a resource, a question, a reminder of the offer.
        </p>
      </>
    ),
  },
  "xactimate-cross-reference-explained": {
    title: "Xactimate Cross-Reference: What Most Adjusters Miss",
    excerpt: "A breakdown of the most commonly missed line items in roofing estimates and how systematic cross-referencing increases claim value.",
    category: "Supplements",
    date: "March 30, 2026",
    image: "/images/blog/xactimate.jpg",
    content: (
      <>
        <p>
          Xactimate is the estimating software used by the majority of insurance carriers to price property damage claims. It's a comprehensive tool — but it's only as accurate as the person writing the estimate. Adjusters working high volumes under time pressure frequently omit line items that are legitimate, documented, and entirely defensible.
        </p>
        <p>
          Understanding where those gaps consistently appear is the foundation of an effective supplement strategy.
        </p>

        <h2>How Xactimate Estimates Get Written</h2>
        <p>
          An adjuster visits the property, documents visible damage, and builds an estimate based on what they observed. Line items are selected from Xactimate's database, which includes pricing that's updated by region and market conditions. The final estimate reflects the adjuster's scope assessment — which may or may not match the full scope of work required to restore the property to pre-loss condition.
        </p>
        <p>
          This is where the gap opens. Not because adjusters are wrong, but because the initial visit often happens quickly, certain damage isn't visible until tear-off, and some line items require contractor knowledge to identify.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            Supplementing is not disputing the adjuster's estimate — it's expanding it to reflect the actual scope of work. Documentation is everything.
          </p>
        </div>

        <h2>The Most Commonly Missed Line Items</h2>
        <p>
          Across residential roofing claims, these items are routinely omitted from initial estimates and routinely approved when properly documented:
        </p>
        <ul>
          <li><strong>Starter strip:</strong> Often written as part of the shingle cost, but is a separate material and labor item</li>
          <li><strong>Drip edge:</strong> Frequently missed, especially when code requires replacement</li>
          <li><strong>Detach and reset:</strong> For gutters, skylights, HVAC curbs, satellite dishes, and solar equipment</li>
          <li><strong>Roof deck replacement:</strong> Not always visible until tear-off; must be documented with photos</li>
          <li><strong>Additional layers:</strong> If existing roofing has multiple layers, tear-off costs are higher</li>
          <li><strong>Permit fees:</strong> Required in most jurisdictions; often not included in initial estimates</li>
          <li><strong>Steep slope charges:</strong> Applied when pitch exceeds standard parameters</li>
          <li><strong>High roof charges:</strong> For single-story structures above a certain height threshold</li>
        </ul>

        <h2>Documentation That Supports Supplements</h2>
        <p>
          Every supplement needs supporting documentation. Photos taken during tear-off that show deck damage. Material invoices that confirm actual quantities. Code documentation from the local jurisdiction. The more specific the documentation, the faster and more predictably supplements get approved.
        </p>
        <p>
          Companies that build documentation habits into every job — not just the ones they plan to supplement — have a significant advantage. When you need to supplement six weeks after the job, the evidence is already organized.
        </p>
      </>
    ),
  },
  "roofing-industry-trends-2026": {
    title: "Roofing Industry Trends to Watch in 2026",
    excerpt: "From labor shortages to insurance tightening, here are the operational shifts every roofing company should be preparing for.",
    category: "Industry Trends",
    date: "March 22, 2026",
    image: "/images/blog/trends.jpg",
    content: (
      <>
        <p>
          The roofing industry is in a period of meaningful change. Market conditions that held relatively steady for years are shifting — and the companies that are paying attention to where things are heading are positioning themselves very differently than those still operating on the assumptions of a few years ago.
        </p>
        <p>
          Here are the trends we're watching closely in 2026.
        </p>

        <h2>Insurance Carriers Are Tightening</h2>
        <p>
          After years of elevated claim volumes driven by severe weather, a growing number of carriers are restricting coverage, raising deductibles, and tightening claim approval processes in high-risk markets. For roofing companies that rely heavily on insurance work, this creates two related challenges: fewer approvals on marginal claims, and homeowners with less coverage than they expect.
        </p>
        <p>
          Companies that build strong supplement documentation and claims knowledge into their process are better positioned to recover the maximum value on approved claims — which becomes more important as overall claim volume potentially decreases.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            Companies that diversify beyond pure insurance replacement and build operational efficiency into their core model will be more resilient to carrier market shifts.
          </p>
        </div>

        <h2>Labor Remains the Binding Constraint</h2>
        <p>
          Skilled roofing labor has been in short supply for years, and that hasn't changed. The companies growing most sustainably aren't necessarily the ones finding more crews — they're the ones getting more out of the crews they have through better scheduling, cleaner handoffs, and less wasted time on administrative tasks.
        </p>
        <p>
          Operational efficiency is increasingly a competitive advantage, not just a cost-saving measure.
        </p>

        <h2>Technology Adoption Is Accelerating</h2>
        <p>
          Tools that were considered advanced a few years ago — aerial measurement software, CRM platforms, automated follow-up systems — are now table stakes in most competitive markets. The gap between tech-enabled companies and those still running on spreadsheets and group texts is widening.
        </p>
        <p>
          The next wave of adoption is in workflow automation: systems that handle the handoffs, follow-ups, documentation, and coordination that currently require manual effort. Companies investing in these systems now are building an operational foundation that's increasingly difficult for competitors to replicate quickly.
        </p>

        <h2>Homeowners Expect More Communication</h2>
        <p>
          Consumer expectations around communication have changed. Homeowners who ordered a package this morning already know it's three stops away. When their roofing contractor goes silent for two days during a project, the contrast is jarring.
        </p>
        <p>
          Companies that build proactive communication into their process — confirmation messages, installation day updates, completion summaries — are seeing measurably better reviews and referrals. The investment is small; the impact on reputation is significant.
        </p>
      </>
    ),
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4 font-serif">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">This article doesn&apos;t exist or has been removed.</p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-muted/30">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] font-serif leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-10">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl aspect-[16/8] relative rounded-lg overflow-hidden bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <article className="max-w-3xl prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
            prose-ul:text-muted-foreground prose-ul:leading-relaxed
            prose-li:mb-1.5 prose-li:marker:text-primary
            prose-strong:text-foreground
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground">
            {post.content}
          </article>
        </div>
      </section>

      <CTASection
        headline="Explore what's next for roofing operations."
        supporting="Follow along as we share insights on systems, workflows, and operational trends in roofing."
      />
      <Footer />
    </main>
  )
}
