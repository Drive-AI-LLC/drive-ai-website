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
  "what-to-do-when-adjuster-denies-supplement": {
    title: "What to Do When an Adjuster Denies Your Supplement",
    excerpt: "A denial isn't the end of the road. Here's how to respond professionally, escalate when necessary, and get underpaid items reconsidered.",
    category: "Supplements",
    date: "June 16, 2026",
    image: "/images/blog/adjuster-denies-supplement.png",
    content: (
      <>
        <p>
          You submitted a clean supplement with photos, code citations, and a clear breakdown of every line item. A few days later the response comes back: denied. It's frustrating, but a denial is rarely the final word. It's the start of a conversation, and how you respond determines whether those items get reconsidered or written off for good.
        </p>
        <p>
          Here's how to handle a denied supplement professionally, figure out why it happened, and push for a fair reconsideration without burning the relationship.
        </p>

        <h2>Don't React — Read</h2>
        <p>
          The first mistake contractors make is firing back an angry email the moment a denial lands. Instead, slow down and read the denial carefully. Carriers are required to explain why something was denied, and that explanation tells you exactly what you're up against. The reason behind the denial determines your entire next move, so understand it before you respond.
        </p>

        <h2>Identify the Real Reason for the Denial</h2>
        <p>
          Most supplement denials fall into a handful of categories. Knowing which one you're dealing with tells you how to respond:
        </p>
        <ul>
          <li><strong>Insufficient documentation</strong> — the adjuster didn't see enough photos, measurements, or evidence to justify the item.</li>
          <li><strong>Disagreement on scope</strong> — the adjuster doesn't believe the work is necessary or related to the covered loss.</li>
          <li><strong>Pricing disputes</strong> — the adjuster agrees the item is needed but disputes the rate or quantity.</li>
          <li><strong>Policy or coverage limits</strong> — the item genuinely isn't covered under the policy or falls outside the claim.</li>
          <li><strong>Code interpretation</strong> — the adjuster disputes whether a building code actually requires the work.</li>
        </ul>
        <p>
          A documentation problem is the easiest to fix. A true coverage exclusion is the hardest. Most denials sit somewhere in between, which means there's room to make your case.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            A denial often means the adjuster didn't have enough to approve the item, not that the item is wrong. Reframing a denial as a request for more evidence keeps you focused on solving the problem instead of arguing about it.
          </p>
        </div>

        <h2>Respond With Evidence, Not Emotion</h2>
        <p>
          Once you know the reason, build a response that directly addresses it. If the denial cited insufficient documentation, send the missing photos, measurements, or moisture readings. If it's a scope disagreement, explain why the work is necessary and tie it back to the original loss. If it's a code dispute, cite the specific section of the local building code and attach it.
        </p>
        <p>
          Keep the tone factual and professional. You're not accusing the adjuster of anything — you're giving them what they need to approve the item. Every point you make should be backed by something they can verify.
        </p>

        <h2>Put Your Reconsideration Request in Writing</h2>
        <p>
          Always request reconsideration in writing, even if you've discussed it by phone. Reference the claim number, the specific line items denied, the reason given, and the evidence you're providing in response. A written record protects you if the claim escalates later and keeps everyone clear on what's actually in dispute.
        </p>
        <p>
          Be specific about what you want. "Please reconsider the ice and water shield line item based on the attached code citation and photos" is far more actionable than "please review the denial again."
        </p>

        <h2>Know When and How to Escalate</h2>
        <p>
          If you've provided solid evidence and the adjuster still won't budge, it may be time to escalate. Escalation isn't about going over someone's head out of spite — it's about getting a fresh set of eyes on a claim that's stuck.
        </p>
        <ul>
          <li><strong>Request a supervisor or re-inspection</strong> — ask the carrier to have a supervisor review the file or send a different adjuster to re-inspect.</li>
          <li><strong>Invoke the appraisal clause</strong> — most policies include an appraisal process for resolving disagreements on the amount of loss. This can break a stalemate without litigation.</li>
          <li><strong>Encourage the homeowner to engage</strong> — it's the policyholder's claim, and a call from the insured carries weight a contractor's email sometimes doesn't.</li>
        </ul>
        <p>
          Escalate in steps. Exhaust the straightforward options before moving to formal processes, and document each one.
        </p>

        <h2>Stay Professional — You'll See This Adjuster Again</h2>
        <p>
          It's easy to treat a denial as a fight, but the carriers and adjusters you work with today are the same ones you'll work with on the next storm. A reputation for being thorough, fair, and professional gets your future supplements taken seriously. A reputation for being combative slows everything down.
        </p>

        <h2>Know When to Let It Go</h2>
        <p>
          Not every denial is worth an extended fight. If an item is genuinely outside coverage, or the dollar amount doesn't justify the time, it may be smarter to move on and focus your energy on claims where the evidence is strong. Picking your battles keeps your win rate high and your time spent where it actually pays off.
        </p>
        <p>
          A denial is a checkpoint, not a dead end. Read it carefully, respond with evidence, escalate when the facts support you, and stay professional throughout. Done consistently, that approach turns a lot of initial denials into approved, fully paid claims.
        </p>
      </>
    ),
  },
  "supplement-email-to-adjuster": {
    title: "How to Write a Supplement Email That Gets a Response",
    excerpt: "Most supplement emails get ignored. Here's how to write one that's professional, specific, and actually moves the claim forward.",
    category: "Supplements",
    date: "June 9, 2026",
    image: "/images/blog/supplement-email.png",
    content: (
      <>
        <p>
          You've built a solid supplement. The line items are right, the photos are attached, the codes are cited. Then you send the email and hear nothing back for two weeks. Sound familiar?
        </p>
        <p>
          The supplement itself is only half the job. The email that delivers it determines whether an adjuster opens it, understands it, and acts on it — or lets it sink to the bottom of an inbox holding hundreds of other claims. Here's how to write one that gets a response.
        </p>

        <h2>Adjusters Are Buried in Email</h2>
        <p>
          A typical desk adjuster is managing dozens of open claims at once, each generating its own thread of emails, photos, and documents. Your supplement is competing for attention against everything else in that queue. An email that's long, vague, or disorganized gets skimmed and set aside. An email that's clear and easy to act on gets handled.
        </p>
        <p>
          The goal isn't to write more. It's to write in a way that respects the adjuster's time and makes saying yes as easy as possible.
        </p>

        <h2>Write a Subject Line That Identifies the Claim</h2>
        <p>
          The subject line is the first filter. It should include the claim number, the property address or insured's last name, and a short description of what's attached. Something like "Claim #12345 — Supplement Request — 142 Oak St" tells the adjuster exactly what they're looking at before they open it.
        </p>
        <p>
          Avoid generic subject lines like "Supplement" or "Follow up." They force the adjuster to open the email just to figure out which claim it belongs to, and they're easy to lose in a search later.
        </p>

        <h2>Get to the Point in the First Two Sentences</h2>
        <p>
          Open by stating who you are, which claim this is, and what you're requesting. The adjuster should understand the purpose of the email before the end of the first short paragraph. Save the context and justification for the body or, better, for the attached supplement documentation.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Adjusters approve what's easy to approve. An email that clearly states the claim number, the specific items requested, and where to find the supporting documentation removes friction. Friction is what causes claims to stall.
          </p>
        </div>

        <h2>Be Specific About What You're Requesting</h2>
        <p>
          Vague requests create back-and-forth. Instead of writing "the estimate is missing several items," list exactly what you're asking for and reference the relevant Xactimate line items. If you're requesting ice and water shield, drip edge, and an O&P adjustment, name each one and point to where the justification lives in the attached documentation.
        </p>
        <p>
          When the adjuster can see precisely what you want and why, they can approve it without a follow-up call. Every clarification they have to ask for adds days to the timeline.
        </p>

        <h2>Reference Your Attachments Clearly</h2>
        <p>
          If you're attaching photos, a revised estimate, NOAA storm data, or code citations, mention them in the email and label them so they're easy to match up. "See attached: revised Xactimate estimate, 12 photos of north slope, and the local code citation for ice and water shield" is far more useful than sending five unnamed files with no explanation.
        </p>

        <h2>Keep the Tone Professional and Neutral</h2>
        <p>
          It's easy to get frustrated when a claim is underpaid, but the email is not the place to show it. A confrontational or accusatory tone gives the adjuster a reason to slow down or escalate. A calm, factual, professional tone keeps things moving and keeps the relationship intact for the next claim.
        </p>
        <p>
          Remember that you'll likely work with the same adjusters and carriers again. The reputation you build across emails affects how quickly your future supplements get handled.
        </p>

        <h2>Close With a Clear Next Step</h2>
        <p>
          End the email by stating what you'd like to happen next and by when. A simple "Please review the attached supplement and let me know if you need anything further to process these items. I'll follow up on [date] if I haven't heard back" sets a clear expectation and gives you a natural reason to follow up without seeming pushy.
        </p>

        <h2>Follow Up on a Schedule</h2>
        <p>
          If you don't hear back, follow up — but do it on a consistent, professional schedule rather than firing off reminders every day. A polite follow-up that references the original send date and restates the request keeps the claim visible without creating noise. Most claims that stall do so simply because no one followed up, not because the supplement was wrong.
        </p>
      </>
    ),
  },
  "why-op-is-the-most-argued-line-item": {
    title: "Why O&P Is the Most Argued Line Item in Every Roofing Claim",
    excerpt: "Carriers default to 10% when industry standard is 20/10. Here's what overhead and profit actually means and how to argue it professionally.",
    category: "Supplements",
    date: "June 2, 2026",
    image: "/images/blog/overhead-and-profit.png",
    content: (
      <>
        <p>
          If you've spent any time supplementing roofing claims, you've run into this fight. The carrier writes O&P at 10%. You know it should be 20/10. They push back. The claim stalls.
        </p>
        <p>
          Overhead and profit is one of the most consistently argued line items in residential roofing claims, and understanding exactly why carriers resist it — and how to counter that professionally — is worth real money on every job.
        </p>

        <h2>What Overhead and Profit Actually Means</h2>
        <p>
          O&P in Xactimate refers to the general contractor's overhead and profit markup applied on top of direct repair costs. Overhead covers the indirect costs of running a business: insurance, vehicles, office staff, equipment, licensing, and everything else that doesn't show up as a direct line item on a job. Profit is the margin the contractor earns for managing the project.
        </p>
        <p>
          The standard in Xactimate is 20% overhead and 10% profit, often written as 20/10. This is built into Xactimate's pricing assumptions as the default for general contractor work.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            20/10 is the widely recognized industry standard for general contractor overhead and profit in Xactimate-based estimates, and many regional pricing guides reflect this expectation. Carriers who write 10% are deviating from what most contractors and adjusters consider the norm.
          </p>
        </div>

        <h2>Why Carriers Default to 10%</h2>
        <p>
          Carriers often write O&P at 10% or apply it only partially, sometimes arguing that the work doesn't require a general contractor or that the scope isn't complex enough to justify the full rate. Some simply default low and wait to see if anyone pushes back.
        </p>
        <p>
          On a $15,000 claim, the difference between 10% O&P and 20/10 can easily exceed $1,000. Across a year of claims, that's a substantial amount of revenue left uncollected.
        </p>

        <h2>How to Justify the Correct Rate</h2>
        <p>
          The most effective approach is documentation. Pull the Xactimate regional pricing data that supports 20/10 for your market. Include it in your supplement submission with a direct citation. Explain the scope elements that require general contractor coordination: permitting, multiple subcontractors, inspections, material sourcing, timeline management.
        </p>
        <p>
          If the claim involves code upgrades, multiple trades, or storm damage affecting multiple systems, that strengthens the case. The more you can show that the job requires active general contractor management, the harder it is for the carrier to deny the full rate.
        </p>
        <p>
          One thing to be prepared for: some carriers will argue that O&P doesn't apply if the roofing contractor is self-performing all the work. If that objection comes up, be ready to document the GC coordination role — permitting, inspections, subcontractor oversight — that exists regardless of who swings the hammer.
        </p>

        <h2>Keeping It Professional</h2>
        <p>
          The tone of a supplement matters. Carriers review a high volume of submissions. A professional, factual justification that cites sources moves faster than a confrontational one.
        </p>
        <p>
          Reference Xactimate documentation. Reference regional pricing. Keep the language direct and focused on the scope. Avoid anything that reads as an argument. You're presenting evidence, not making a case in court.
        </p>
      </>
    ),
  },
  "how-to-write-a-supplement-adjusters-approve": {
    title: "How to Write a Supplement That Adjusters Actually Approve",
    excerpt: "Xactimate codes, building citations, NOAA storm data, and what a complete supplement package looks like from start to finish.",
    category: "Supplements",
    date: "May 26, 2026",
    image: "/images/blog/writing-a-supplement.png",
    content: (
      <>
        <p>
          A lot of roofing contractors know they should be supplementing. Fewer know how to write one that actually gets approved. The difference usually comes down to documentation, specificity, and tone.
        </p>
        <p>
          Here's what a supplement that moves through the process looks like.
        </p>

        <h2>Why Xactimate Line Item Codes Matter</h2>
        <p>
          Xactimate is the estimating platform most carriers use. When you submit a supplement, you're asking the carrier to add or adjust line items within that system. Using the correct Xactimate codes in your submission removes ambiguity and makes it easy for the adjuster to locate and process each item.
        </p>
        <p>
          A supplement that references specific codes communicates that you understand the system and have done the work. One that's vague forces the adjuster to figure out what you're asking for, which slows everything down.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Supplements that include specific Xactimate codes, code citations, and photos get approved faster. Vague requests create back-and-forth that delays the whole claim.
          </p>
        </div>

        <h2>Citing Building Codes and Manufacturer Specs</h2>
        <p>
          When you're requesting a line item that the adjuster didn't include, you need to explain why it's required. Local building codes are one of the strongest justifications available. If your jurisdiction requires ice and water shield, cite the code section. If manufacturer specs require a specific underlayment for warranty compliance, reference the spec sheet.
        </p>
        <p>
          These citations do two things. They give the adjuster something concrete to approve against. And they show the carrier that the request isn't subjective — it's a compliance requirement.
        </p>

        <h2>Using NOAA Storm Data</h2>
        <p>
          NOAA storm event data is publicly available and highly useful for claims involving hail or wind. Pull the storm report for the event date and affected area. Include hail size, wind speed, and coverage area. This data directly supports your claim that storm damage occurred and helps justify the scope.
        </p>

        <h2>What a Complete Supplement Package Looks Like</h2>
        <p>
          A well-built supplement package includes the original estimate with each disputed item flagged, your supplement request with Xactimate codes and quantities, photos supporting each line item, relevant code citations or manufacturer specs, NOAA data if applicable, and the revised total.
        </p>
        <p>
          The goal is to make the adjuster's job easy. Every question they might ask should be answered before they ask it.
        </p>
      </>
    ),
  },
  "most-commonly-missed-line-items-roofing-claims": {
    title: "The Most Commonly Missed Line Items in Roofing Insurance Claims",
    excerpt: "Ice and water shield, drip edge, ridge cap, permits, and O&P. Why adjusters miss these and how to catch them every time.",
    category: "Supplements",
    date: "May 19, 2026",
    image: "/images/blog/missed-line-items.png",
    content: (
      <>
        <p>
          Adjusters work fast. After a significant storm event, they're handling dozens of claims at once. Initial estimates get written based on visible damage and standard scope assumptions. Line items that require contractor knowledge, code awareness, or closer inspection often don't make it in.
        </p>
        <p>
          These are the items that consistently get missed — and consistently get approved when documented properly.
        </p>

        <h2>Ice and Water Shield</h2>
        <p>
          In many jurisdictions, ice and water shield is a code requirement along eaves, in valleys, and around penetrations. It's not always included in the initial estimate. Pull the local building code and cite the specific requirement. The carrier has very little room to deny a code-required item.
        </p>

        <h2>Drip Edge Linear Footage</h2>
        <p>
          Drip edge is frequently undercounted or omitted entirely. Adjusters often estimate based on a simple perimeter calculation without accounting for rakes. Measure the full linear footage yourself and document it. This is a low-dollar item that adds up over multiple claims.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Most missed line items aren't disputed once documented. The issue is usually that nobody submitted them in the first place.
          </p>
        </div>

        <h2>Ridge Cap Shingles</h2>
        <p>
          Ridge cap is sometimes omitted from the scope or bundled into the main shingle line item without proper accounting. It's a separate material with separate labor. Document the linear footage and submit it as its own line item.
        </p>

        <h2>Permit and Inspection Fees</h2>
        <p>
          Most jurisdictions require a permit for a full roof replacement, and many require a final inspection. These fees are real costs. They're also frequently left off estimates. Include the actual permit cost from your local jurisdiction and submit with documentation.
        </p>

        <h2>Contractor Overhead and Profit</h2>
        <p>
          O&P at the industry standard rate of 20/10 is one of the most commonly underpaid items on residential claims. Carriers default to lower rates. Knowing how to justify the standard rate is essential for every claim. See our full breakdown of O&P in a separate post.
        </p>

        <h2>Why These Get Missed</h2>
        <p>
          Adjusters aren't always wrong. They're working quickly, often remotely, and relying on software defaults. They don't always know local code requirements. They don't always have access to manufacturer specs. Your job is to bring that documentation to the claim.
        </p>
      </>
    ),
  },
  "what-is-a-roofing-supplement": {
    title: "What Is a Roofing Supplement and Why Does It Matter?",
    excerpt: "What a supplement is, why adjusters underpay initial estimates, and how much roofers leave behind by not supplementing.",
    category: "Supplements",
    date: "May 12, 2026",
    image: "/images/blog/what-is-a-supplement.png",
    content: (
      <>
        <p>
          If you're doing insurance roofing work, you've dealt with insurance estimates that don't cover the full scope. The adjuster writes a number. You look at the job. The numbers don't match. That gap is where supplements come in.
        </p>

        <h2>What a Supplement Is</h2>
        <p>
          A roofing supplement is a formal request to the insurance carrier to revise the original claim estimate. It documents additional line items, corrected measurements, code-required upgrades, or other scope items that weren't included in the initial estimate.
        </p>
        <p>
          Supplementing is not disputing the claim. It's completing it. The initial estimate is written based on a visual inspection, often before tear-off, and often under time pressure. Supplements address what gets discovered once work begins or what was missed due to the limits of that initial inspection.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Submitting a supplement is standard industry practice. It's not confrontational. Adjusters expect them. The issue is that most contractors don't submit them consistently.
          </p>
        </div>

        <h2>Why Adjusters Underpay Initial Estimates</h2>
        <p>
          Initial estimates get written fast. Adjusters handle high volumes of claims, especially after storm events. They rely on software defaults and visual inspections from the ground or a quick roof walk. They don't always know local building code requirements. They may not account for items that aren't visible until tear-off.
        </p>
        <p>
          This isn't bad faith. It's a practical limitation of the process. Supplements exist precisely because the initial estimate is rarely the complete picture.
        </p>

        <h2>Common Reasons Claims Get Underpaid</h2>
        <ul>
          <li>Missed line items like drip edge, ice and water shield, and ridge cap</li>
          <li>Incorrect measurements, especially for complex roof geometries</li>
          <li>Code upgrade requirements not included in the scope</li>
          <li>Overhead and profit applied at below-standard rates</li>
          <li>Permit and inspection fees omitted</li>
          <li>Hidden damage not visible until tear-off begins</li>
        </ul>

        <h2>How Much Roofers Leave Behind</h2>
        <p>
          On an average residential claim, missed items typically add up to several hundred to a few thousand dollars. On larger or more complex jobs, the gap can be significantly higher. Across a full year of claims, contractors who don't supplement are leaving a meaningful amount of revenue uncollected.
        </p>
        <p>
          The problem compounds because supplement revenue isn't tracked separately in most companies. It just shows up as the difference between what you expected and what you got paid. That gap rarely gets analyzed — which is exactly why it persists.
        </p>
      </>
    ),
  },
  "crew-scheduling-mistakes-costing-you-time": {
    title: "Crew Scheduling Mistakes Costing You Time and Money",
    excerpt: "Poor scheduling creates downtime and travel gaps. Here's how to optimize crew allocation.",
    category: "Operations",
    date: "May 5, 2026",
    image: "/images/blog/crew-scheduling.png",
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
          Build in buffer time between jobs. How much depends on job size and travel, but even 30 minutes can absorb most small delays and keep the day from unraveling. Less stress on the crew means fewer callbacks too.
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
    image: "/images/blog/supplements.png",
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
    image: "/images/blog/storm-response.png",
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
    image: "/images/blog/production.png",
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
    image: "/images/blog/follow-up.png",
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
    image: "/images/blog/xactimate.png",
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
    image: "/images/blog/trends.png",
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
          After years of high claim volumes from severe weather, many carriers are restricting coverage, raising deductibles, and tightening claim approvals. This trend has been most pronounced in high-risk states but is spreading across more markets. For companies that rely heavily on insurance work, this means fewer approvals on marginal claims and homeowners with less coverage than they expected.
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
          <div className="max-w-3xl aspect-[16/8] relative rounded-lg overflow-hidden bg-gray-100">
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
