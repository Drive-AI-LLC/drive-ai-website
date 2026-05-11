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
    excerpt: "Poor scheduling creates downtime and travel gaps. Here's how to optimize crew allocation.",
    category: "Operations",
    date: "May 5, 2026",
    image: "/images/blog/crew-scheduling.jpg",
    content: (
      <>
        <p>
          Scheduling looks simple enough. Match the crew to the job, confirm the time, move on. But for most roofing companies, it plays out differently. Jobs get stacked wrong. Crews pass each other on the highway heading to opposite ends of town. One material delay on Monday turns into two lost afternoons by Wednesday.
        </p>
        <p>
          What you end up with is wasted labor, frustrated homeowners, and margin that slips away before anyone catches it.
        </p>

        <h2>Scheduling by Availability Instead of Geography</h2>
        <p>
          This one is everywhere. Assign the next available crew regardless of where the job actually is. Now you've got guys driving 45 minutes when a different crew could've been there in 10.
        </p>
        <p>
          Route your schedule by geography. Group jobs by neighborhood or zip code. Over a week, this alone can get you back several hours of productive time per crew.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Geographic scheduling is low-hanging fruit. Map your weekly jobs before assigning crews. You'll see results fast.
          </p>
        </div>

        <h2>No Buffer Between Jobs</h2>
        <p>
          Scheduling jobs back-to-back only works if everything goes perfectly. In roofing, it doesn't. Decking damage adds time. Homeowner isn't home. Materials show up late. Without any buffer, one delay messes up the whole day.
        </p>
        <p>
          Build in 30 to 45 minutes between jobs. It absorbs the small stuff and keeps your crews less stressed, which means fewer callbacks.
        </p>

        <h2>Manually Tracking Crew Status</h2>
        <p>
          If your production manager spends the day calling and texting crews to figure out where they are, you have a coordination system that won't scale. It takes too much time, creates gaps, and makes it hard to adjust on the fly.
        </p>
        <p>
          Even a basic shared job board cuts down on those check-in calls significantly.
        </p>

        <h2>No Clear Handoff From Sales to Production</h2>
        <p>
          A lot of scheduling problems start before the job even hits the board. When there's no clear process for how a sold job enters production, things sit in limbo. Material orders get delayed. The homeowner hears nothing. Production scrambles to squeeze it in last minute.
        </p>
        <p>
          Define the handoff. Assign responsibilities. Set timelines. Most of this friction goes away.
        </p>

        <h2>Over-Relying on One Key Scheduler</h2>
        <p>
          When one person holds all the scheduling knowledge in their head, you have a single point of failure. If they're sick, on vacation, or leave the company, everything stalls. Get the logic into a shared system. Stop relying on one person's desktop spreadsheet.
        </p>

        <h2>Where to Start</h2>
        <p>
          You don't need to fix everything at once. Track where your schedule breaks down most often. Is it the handoff? Travel time? Day-of delays? Find the biggest friction point and start there.
        </p>
      </>
    ),
  },
  "why-roofing-companies-leave-money-on-the-table": {
    title: "Why Roofing Companies Leave Money on the Table",
    excerpt: "Most roofers miss supplement opportunities on every claim. Here's how to identify gaps and recover what you're owed.",
    category: "Supplements",
    date: "April 28, 2026",
    image: "/images/blog/supplements.jpg",
    content: (
      <>
        <p>
          Most roofing companies doing insurance work are getting paid less than they should. Not because adjusters are dishonest. The supplement process is just time-consuming and easy to push off when the team is focused on closing the next job.
        </p>
        <p>
          The result is steady revenue loss that nobody notices until they look at the numbers.
        </p>

        <h2>What Gets Missed Most Often</h2>
        <p>
          Insurance estimates get written fast. Adjusters are managing high volumes, especially after storms. Line items that need documentation or justification often get left off the initial estimate.
        </p>
        <p>
          Common examples:
        </p>
        <ul>
          <li>Detach and reset work for gutters, skylights, HVAC</li>
          <li>Drip edge and code-required upgrades</li>
          <li>Starter strip as its own line item</li>
          <li>Deck replacement that wasn't visible at first inspection</li>
          <li>Additional layers of existing material</li>
          <li>Permit fees and sales tax</li>
        </ul>
        <p>
          On an average residential claim, missed items often add up to a few hundred to a few thousand dollars. Multiply that across a year of claims and it adds up.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Supplementing isn't overcharging. It's getting paid for the actual scope. Every missed line item is money you earned but didn't collect.
          </p>
        </div>

        <h2>Why Most Companies Don't Supplement Consistently</h2>
        <p>
          The issue isn't awareness. Most contractors know supplements exist. The issue is capacity. Writing one means cross-referencing estimates against actual job scope, knowing which items hold up, understanding carrier preferences, and following up until it's approved.
        </p>
        <p>
          When production is stretched thin, supplements become the thing you'll get to "when there's time." There's rarely time.
        </p>

        <h2>Building a Process That Actually Runs</h2>
        <p>
          Companies that recover the most treat supplements as a defined workflow, not a side task. That means having a consistent checklist to review on every estimate. Clear ownership of who submits and follows up. A tracking system so nothing slips. Documentation habits baked into every job.
        </p>
        <p>
          When the process is set up right, supplement recovery becomes predictable instead of dependent on who had bandwidth that week.
        </p>
      </>
    ),
  },
  "storm-response-speed-matters": {
    title: "Storm Response: Why Speed Matters More Than You Think",
    excerpt: "The first 48 hours after a storm determine who wins the neighborhood.",
    category: "Storm Response",
    date: "April 21, 2026",
    image: "/images/blog/storm-response.jpg",
    content: (
      <>
        <p>
          After a big hail or wind event, every roofing company in the market is looking at the same radar data. The difference between who wins the neighborhood and who gets locked out usually comes down to hours.
        </p>
        <p>
          Speed isn't just about knocking on doors first. It's about being first to build trust and make it easy for the homeowner to say yes before anyone else has even shown up.
        </p>

        <h2>Why the First 48 Hours Are Critical</h2>
        <p>
          Homeowners go through a predictable pattern after storm damage. Right after the storm, they're figuring things out. Checking the roof from the ground. Looking for obvious damage. Wondering what to do next. They haven't called insurance yet. Haven't talked to any contractors.
        </p>
        <p>
          That window is where relationships form. A company that shows up early with useful information and no pressure builds trust before anyone else arrives. Companies that wait until day three are often walking onto a property where someone else already got the handshake.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Every hour you wait is a door your competitor might knock on first. Speed isn't pushy. It's helpful to homeowners who don't know where to start.
          </p>
        </div>

        <h2>What a Fast Storm Response Looks Like</h2>
        <p>
          The best companies have storm response processes that kick in automatically. They monitor weather data for affected zip codes before the storm even fully clears. They have outreach sequences ready to deploy within hours. Field teams are briefed and scheduled for canvassing the next morning. Follow-up goes out to homeowners who were contacted but didn't convert.
        </p>

        <h2>The Most Common Speed Killers</h2>
        <p>
          Most companies don't respond slowly because they don't care. They respond slowly because their process has too many manual steps. Figuring out which neighborhoods got hit. Building a canvassing list. Briefing the team. Each step takes time. Time compounds.
        </p>
        <p>
          Automating the early stages removes friction and lets the team focus on showing up and building relationships in person.
        </p>
      </>
    ),
  },
  "production-bottlenecks-killing-your-margins": {
    title: "5 Production Bottlenecks Killing Your Margins",
    excerpt: "From sales-to-production handoffs to scheduling gaps, these issues cost roofing companies thousands every month.",
    category: "Operations",
    date: "April 14, 2026",
    image: "/images/blog/production.jpg",
    content: (
      <>
        <p>
          Roofing companies don't usually lose margin on the job itself. The work gets done. The roof holds. The homeowner is happy. The margin disappears in the space between jobs. Handoffs, delays, miscommunications, stuff that nobody is directly responsible for.
        </p>
        <p>
          Here are five production bottlenecks we see over and over.
        </p>

        <h2>1. The Sales-to-Production Handoff</h2>
        <p>
          When a job sells, information needs to move from sales to production quickly and completely. Job scope, materials, HOA rules, homeowner preferences, access notes. All of it.
        </p>
        <p>
          In most companies, this handoff happens through texts, emails, CRM notes, and conversations. The result is inconsistency. Jobs show up in production incomplete, and someone has to call the salesperson to get details that should have been captured already.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            A clean handoff process is one of the highest-leverage fixes a roofing company can make. Every incomplete handoff causes downstream delays.
          </p>
        </div>

        <h2>2. Material Ordering Without Lead Time</h2>
        <p>
          Ordering materials the day before a job works until it doesn't. Supplier is out of stock. Delivery is late. Crew shows up and there's nothing to install. Now you're rescheduling, the homeowner is frustrated, and you've paid for a crew day you can't bill.
        </p>

        <h2>3. No Real-Time Job Status Visibility</h2>
        <p>
          When the production manager doesn't know where each crew is in their day, they can't make smart decisions. Can't redirect a crew that finished early. Can't give the next homeowner a heads-up. Everything becomes reactive.
        </p>

        <h2>4. Callbacks Without Root Cause Tracking</h2>
        <p>
          Callbacks happen. What separates well-run companies from struggling ones is whether they track why. Without root cause data, the same issues repeat forever. With it, you can figure out if the problem is crew-specific, product-specific, or process-specific.
        </p>

        <h2>5. Closing Out Jobs Without Documentation</h2>
        <p>
          A job that's done physically but not administratively is a liability. Missing photos, unsigned completion certs, supplement docs still pending, change orders not billed. All of this is either revenue at risk or problems waiting to pop up later.
        </p>
        <p>
          Build job closeout into the workflow with checklists. Don't let jobs fall off the radar after the crew leaves.
        </p>
      </>
    ),
  },
  "automating-lead-follow-up-without-losing-the-human-touch": {
    title: "Automating Lead Follow-Up Without Losing the Human Touch",
    excerpt: "Homeowners want fast responses. They also want to feel heard. Here's how to balance both.",
    category: "Workflows",
    date: "April 7, 2026",
    image: "/images/blog/follow-up.jpg",
    content: (
      <>
        <p>
          Speed of response is one of the strongest predictors of lead conversion in roofing. A homeowner who hears back within five minutes is way more likely to become a customer than one who waits until the next day.
        </p>
        <p>
          But automated follow-up done poorly feels impersonal. And in a high-trust purchase like roofing, that's a problem.
        </p>

        <h2>Why Speed Matters So Much</h2>
        <p>
          When a homeowner reaches out, they're often reaching out to multiple companies at once. They're comparing. The company that responds first has an edge. Not just because they made contact first, but because they showed responsiveness. Homeowners read that as a signal of how the company will treat them through the whole project.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            The first response doesn't need to close anything. It just needs to acknowledge the homeowner and set expectations for next steps. That alone puts you ahead of most competitors.
          </p>
        </div>

        <h2>What Automation Should and Shouldn't Do</h2>
        <p>
          Automation is good for initial acknowledgments, appointment confirmations, pre-inspection reminders, follow-ups when there's no response. These are predictable touchpoints where a prompt message genuinely helps.
        </p>
        <p>
          Automation is bad for nuanced conversations. Questions about scope, insurance concerns, anything requiring judgment. Those need a real person.
        </p>

        <h2>Writing Messages That Don't Sound Like a Bot</h2>
        <p>
          The difference between a message that works and one that feels hollow is usually specificity. "Thank you for your interest in our services" sounds automated immediately. Reference the specific inquiry. Use the homeowner's name. Give a clear next step like "I'll call you tomorrow between 9 and 11." Keep it short.
        </p>

        <h2>The Follow-Up Sequence That Works</h2>
        <p>
          For leads that don't convert right away, a structured sequence over 7 to 14 days beats one-and-done outreach. Vary the channel. Text, email, call. Vary the message so it doesn't feel like the same automated thing sent repeatedly. Each touchpoint should add something. A resource, a question, a reminder.
        </p>
      </>
    ),
  },
  "xactimate-cross-reference-explained": {
    title: "Xactimate Cross-Reference: What Most Adjusters Miss",
    excerpt: "A breakdown of commonly missed line items and how systematic cross-referencing increases claim value.",
    category: "Supplements",
    date: "March 30, 2026",
    image: "/images/blog/xactimate.jpg",
    content: (
      <>
        <p>
          Xactimate is the estimating software most carriers use to price property damage claims. It's a solid tool, but it's only as accurate as the person writing the estimate. Adjusters working high volumes under time pressure frequently leave out line items that are legitimate and defensible.
        </p>
        <p>
          Knowing where those gaps consistently show up is the foundation of any good supplement strategy.
        </p>

        <h2>How Xactimate Estimates Get Written</h2>
        <p>
          An adjuster visits the property, documents visible damage, and builds an estimate based on what they saw. The estimate reflects their scope assessment, which may or may not match what's actually needed to restore the property properly.
        </p>
        <p>
          That's where the gap opens. Not because adjusters are wrong, but because initial visits happen fast. Some damage isn't visible until tear-off. Some line items require contractor knowledge to identify.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Supplementing isn't arguing with the estimate. It's expanding it to reflect actual scope. Documentation makes or breaks the process.
          </p>
        </div>

        <h2>The Most Commonly Missed Line Items</h2>
        <p>
          Across residential roofing claims, these items are routinely left off initial estimates and routinely approved when documented:
        </p>
        <ul>
          <li><strong>Starter strip:</strong> Often bundled into shingle cost, but it's a separate material and labor item</li>
          <li><strong>Drip edge:</strong> Missed often, especially when code requires replacement</li>
          <li><strong>Detach and reset:</strong> Gutters, skylights, HVAC curbs, satellite dishes, solar</li>
          <li><strong>Roof deck replacement:</strong> Not visible until tear-off. Document with photos</li>
          <li><strong>Additional layers:</strong> Multiple existing layers mean higher tear-off costs</li>
          <li><strong>Permit fees:</strong> Required most places, often not included</li>
          <li><strong>Steep slope charges:</strong> When pitch exceeds standard parameters</li>
          <li><strong>High roof charges:</strong> For certain height thresholds</li>
        </ul>

        <h2>Documentation That Supports Supplements</h2>
        <p>
          Every supplement needs backup. Photos from tear-off showing deck damage. Material invoices confirming quantities. Code documentation from the local jurisdiction. The more specific, the faster things get approved.
        </p>
        <p>
          Companies that document every job, not just the ones they plan to supplement, have a real advantage. When you need to file something six weeks later, the evidence is already there.
        </p>
      </>
    ),
  },
  "roofing-industry-trends-2026": {
    title: "Roofing Industry Trends to Watch in 2026",
    excerpt: "From labor shortages to insurance tightening, here are the shifts every roofing company should prepare for.",
    category: "Industry Trends",
    date: "March 22, 2026",
    image: "/images/blog/trends.jpg",
    content: (
      <>
        <p>
          The roofing industry is changing. Market conditions that held steady for years are shifting, and companies paying attention are positioning themselves differently than those still operating on old assumptions.
        </p>
        <p>
          Here's what we're watching in 2026.
        </p>

        <h2>Insurance Carriers Are Tightening</h2>
        <p>
          After years of high claim volumes from severe weather, more carriers are restricting coverage, raising deductibles, and tightening claim approvals in high-risk markets. For companies that rely heavily on insurance work, this means fewer approvals on marginal claims and homeowners with less coverage than they expected.
        </p>
        <p>
          Companies that build strong supplement documentation into their process are better positioned to recover full value on the claims that do get approved.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Companies that diversify beyond pure insurance replacement and build operational efficiency into their model will handle carrier shifts better.
          </p>
        </div>

        <h2>Labor Remains the Binding Constraint</h2>
        <p>
          Skilled roofing labor has been short for years. That hasn't changed. The companies growing most sustainably aren't necessarily finding more crews. They're getting more out of the crews they have. Better scheduling, cleaner handoffs, less wasted time on admin.
        </p>
        <p>
          Operational efficiency is turning into a competitive advantage, not just a cost-saving thing.
        </p>

        <h2>Technology Adoption Is Accelerating</h2>
        <p>
          Tools that felt advanced a few years ago are now table stakes in competitive markets. Aerial measurement, CRM platforms, automated follow-up. The gap between tech-enabled companies and those still running on spreadsheets is widening.
        </p>
        <p>
          The next wave is workflow automation. Systems that handle handoffs, follow-ups, documentation, coordination. Companies investing in this now are building something competitors can't easily copy.
        </p>

        <h2>Homeowners Expect More Communication</h2>
        <p>
          Consumer expectations around communication have shifted. Homeowners who ordered something this morning already know it's three stops away. When their roofing contractor goes quiet for two days during a project, it feels off.
        </p>
        <p>
          Companies that build proactive communication into their process, confirmation messages, install-day updates, completion summaries, are seeing better reviews and more referrals. The effort is small. The impact on reputation is real.
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
          <article className="max-w-3xl
            [&>p]:text-base [&>p]:text-muted-foreground [&>p]:leading-[1.85] [&>p]:mb-6
            [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-bold [&>h2]:font-serif [&>h2]:tracking-[-0.02em] [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-border
            [&>ul]:mb-6 [&>ul]:pl-5 [&>ul]:space-y-2
            [&>ul>li]:text-base [&>ul>li]:text-muted-foreground [&>ul>li]:leading-relaxed [&>ul>li]:marker:text-primary
            [&>ul>li>strong]:text-foreground [&>ul>li>strong]:font-semibold
            [&>div]:my-8">
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
