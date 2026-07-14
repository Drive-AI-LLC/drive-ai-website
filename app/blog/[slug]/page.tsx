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
  "permit-fees-code-upgrades-insurance-claims": {
    title: "Permit Fees and Code Upgrades: Why Carriers Owe More Than They Pay",
    excerpt: "Permit fees and code-required upgrades are legitimate claim items that adjusters routinely exclude. Here's how to document and argue for them.",
    category: "Supplements",
    date: "July 14, 2026",
    image: "/images/blog/permit-fees-code-upgrades.png",
    content: (
      <>
        <p>
          Permit fees and code-required upgrades are legitimate claim items that often get left off the initial estimate. This usually isn't a fight, it's a documentation gap. Adjusters work from what's submitted to them, and these costs frequently aren't part of the original scope until a contractor provides the paperwork to support them.
        </p>
        <p>
          Understanding which code upgrades are insurance-covered and how to document permit fees is the difference between a break-even job and a profitable one. Here's how to protect your margin.
        </p>

        <h2>When Permit Fees Are Covered</h2>
        <p>
          A permit fee is a cost imposed by the local jurisdiction to allow construction work to happen. It's not optional and it's not something the homeowner can waive. If the roof is being replaced due to a covered loss, the permit is a necessary cost to complete the repair. Therefore, it's part of the claim.
        </p>
        <p>
          Some adjusters argue that permit fees are overhead or the contractor's responsibility. This argument doesn't hold up. The homeowner didn't incur this cost before the loss occurred. It exists specifically because of the claim. It's directly caused by the loss, which makes it insurable. Carriers don't get to exclude costs just because they fall outside the typical category of materials and labor.
        </p>

        <h2>How to Document Permit Fees</h2>
        <p>
          The first step is to know what the actual permit fee is before you submit your estimate. Call the local building department, confirm the roof replacement requires a permit, get the fee in writing, and attach that documentation to your supplement. This is non-negotiable. A screenshot from a website or an estimate that says "typical permit fee is $150" is not sufficient.
        </p>
        <p>
          If the permit fee is questioned, you'll have proof that it's real, that it's required, and that it's the exact amount. Having this documentation ready upfront can help move the conversation along.           Adjusters are often more receptive when presented with actual permit documentation.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Some jurisdictions charge different permit fees based on the estimated project cost. If your bid is higher than the estimate the adjuster used, the permit fee might be higher too. Factor this into your calculations and document it.
          </p>
        </div>

        <h2>Code Upgrades Are Claim Items, Not Change Orders</h2>
        <p>
          When a roof is damaged and needs replacement, the rebuild must comply with the building code currently in effect. If the original roof was built under an older code, and the new code requires a different installation method, a specific material type, additional structural support, or upgraded ventilation, those upgrades are driven by the loss, not by choice.
        </p>
        <p>
          Common code-required upgrades on roof replacements include impact-resistant shingles in coastal zones, specific nailing patterns or fastener types, updated flashing standards, improved ventilation, and structural reinforcement if the inspector flags existing defects. These are not upgrades you're offering the homeowner. These are upgrades the jurisdiction requires.
        </p>

        <h2>Documenting Code Upgrades</h2>
        <p>
          Documentation is everything. When you identify a code upgrade, pull the actual code section that requires it. Most jurisdictions maintain online building code databases. Print or screenshot the relevant code language and attach it to your supplement. Include the specific code section number, the requirement, and a clear explanation of how the original roof violates that requirement.
        </p>
        <p>
          In your estimate narrative, don't present this as a suggestion. Say something like: "Code Section [X] requires impact-resistant shingles for this risk address. The original roof does not meet this standard. Replacement roofing must comply with current code." This frames the upgrade as mandatory, not optional.
        </p>

        <h2>Common Code Upgrades You're Likely Missing</h2>
        <p>
          If your estimates don't regularly include code upgrade line items, you're leaving money on the table. Common code requirements that often get missed include:
        </p>
        <ul>
          <li><strong>Wind or impact resistance.</strong> Coastal and high-wind areas often require rated shingles. High hail areas may require impact-resistant materials.</li>
          <li><strong>Fastener specifications.</strong> Updated codes often require specific fastener types, sizes, or spacing patterns that differ from older installations.</li>
          <li><strong>Ventilation upgrades.</strong> Modern codes require balanced ventilation and specific ratios of intake to exhaust. Older roofs often don't meet this standard.</li>
          <li><strong>Flashing and water management.</strong> Updated flashing standards, ice and water barriers in specific zones, and gutter integration may be code-required in your jurisdiction.</li>
          <li><strong>Deck nailing or reinforcement.</strong> Some jurisdictions require ring-shank nails or specific attachment methods if structural defects are discovered during removal.</li>
          <li><strong>Seismic or snow-load upgrades.</strong> Areas with high seismic activity or heavy snow loads may require upgraded roof framing or attachment methods.</li>
        </ul>

        <h2>If the Code Upgrade Is Questioned</h2>
        <p>
          Sometimes code compliance costs get questioned as the contractor's or homeowner's responsibility rather than the claim's. Whether they're covered typically depends on the policy's Ordinance or Law coverage, which many policies include with a set limit, often a percentage of the dwelling coverage. Confirming this coverage exists and understanding its limit is a useful first step before submitting code upgrade line items.
        </p>
        <p>
          If the code upgrade is still in question, requesting a supervisor review or having the local building official confirm the requirement in writing can help clarify things. Official documentation from the jurisdiction is often the clearest way to support the line item.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          Permit fees and code upgrades are driven by law and regulation, not choice. Your job is to identify them, document them clearly, and present them as what they are: costs required to complete the repair within the bounds of the law.
        </p>
        <p>
          When you include these items in your estimate and back them up with permit quotes, code citations, and confirmation of applicable Ordinance or Law coverage, you give the carrier what it needs to properly evaluate them. The point is to make sure this money isn't left off the table simply because it wasn't documented.
        </p>
      </>
    ),
  },
  "how-to-read-adjuster-estimate": {
    title: "How to Read an Adjuster's Estimate Line by Line",
    excerpt: "Most roofing contractors glance at the bottom line. Here's how to read the full estimate, spot what's missing, and know exactly what to submit.",
    category: "Supplements",
    date: "July 7, 2026",
    image: "/images/blog/how-to-read-adjuster-estimate.png",
    content: (
      <>
        <p>
          Most roofing contractors look at two numbers on an adjuster's estimate: the total and the deductible. Everything in between gets skimmed or ignored. That habit is expensive. The gaps in an adjuster's scope are almost never at the bottom of the page. They're buried in the line items, in the measurements, and in the things that simply aren't there at all.
        </p>
        <p>
          Learning to read an estimate like an estimator, not a contractor, is one of the highest-value skills you can develop. Here's how to do it.
        </p>

        <h2>Start With the Summary Page</h2>
        <p>
          Before you go line by line, read the summary page first. This gives you the claim's total replacement cost value (RCV), the depreciation withheld, the actual cash value (ACV) payout, and the deductible. Understanding the structure of the estimate before reading the details helps you see where the money is and where it might be missing.
        </p>
        <p>
          Note the trade breakdown. Most estimates separate the claim into sections by trade. For a roofing claim you should see a roofing section. If you also see sections for gutters, siding, or interior damage, read those too. Missed items in adjacent trades are common and often recoverable.
        </p>

        <h2>Check the Measurements First</h2>
        <p>
          Before reading a single line item, verify the measurements. The adjuster's square count drives everything. If the square footage is wrong, every line item calculated from it is also wrong. Pull your own measurements from the inspection or from a measurement report and compare them directly.
        </p>
        <p>
          Common measurement errors include using only the field of the roof without including the waste factor, calculating a lower pitch than the roof actually has, and undercounting the number of penetrations, valleys, or hips. Each of these errors compounds across the estimate.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            A one-square measurement error on a 30-square roof might seem minor, but it affects the shingle count, the underlayment, the starter strip, and every other line item tied to area. Small measurement errors are rarely small dollar errors.
          </p>
        </div>

        <h2>Read Every Line Item in the Roofing Section</h2>
        <p>
          Go through the estimate line by line and ask a simple question for each one: is this quantity correct, and is the scope complete? Common line items to scrutinize include:
        </p>
        <ul>
          <li><strong>Shingles.</strong> Check the square count, the waste factor, and the unit price. Waste factors should account for hip and ridge complexity, valleys, and cut lines around penetrations.</li>
          <li><strong>Underlayment.</strong> Confirm the type (synthetic or felt), the coverage area, and whether the estimate includes ice and water shield in the appropriate zones.</li>
          <li><strong>Drip edge.</strong> This is one of the most commonly omitted items. It should appear on all eave and rake edges. Check the linear footage and confirm it's present.</li>
          <li><strong>Starter strip.</strong> Often omitted or priced as shingles instead of starter-specific material. Verify it's included at the correct lineal footage.</li>
          <li><strong>Ridge cap.</strong> Confirm the type (standard or high-profile) and the lineal footage across all ridges, hips, and any applicable dormers.</li>
          <li><strong>Pipe boots and flashings.</strong> These are easy to undercount. Cross-reference against your inspection photos and note every penetration on the roof.</li>
          <li><strong>Decking.</strong> If any decking needed replacement, confirm it's in the estimate at the correct square footage and board type.</li>
        </ul>

        <h2>Look for What Isn't There</h2>
        <p>
          Missing line items are a bigger source of underpayment than incorrect quantities. Run through this checklist against every estimate you receive:
        </p>
        <ul>
          <li>Is O&P (overhead and profit) included? If a GC or specialty subcontractor is involved, O&P is typically owed.</li>
          <li>Are there code upgrade line items? Many municipalities require permit fees, decking upgrades, or specific installation methods on replacement roofs.</li>
          <li>Is there a line for roof deck nailing if the code requires ring-shank nails or a specific nailing pattern?</li>
          <li>Is there a permit fee? Carriers should include the actual permit cost for the jurisdiction.</li>
          <li>Are there charges for debris removal, dump fees, or haul-away? These are often missing or priced well below actual cost.</li>
          <li>Is there a line for temporary protection or tarping if interim work was needed?</li>
        </ul>

        <h2>Check the Unit Prices</h2>
        <p>
          Even when the right items are included, the pricing can be wrong. Xactimate prices are based on regional cost data that updates periodically, but the adjuster's estimate may use an older price list, the wrong location, or a category that doesn't accurately reflect the actual material or labor involved.
        </p>
        <p>
          When a unit price looks low, document the actual market rate for the item and include that in your supplement narrative. Carriers are often more willing to adjust prices when you provide clear evidence that the estimate doesn't reflect actual costs in the local market.
        </p>

        <h2>Document Your Findings Before You Call</h2>
        <p>
          Once you've gone through the estimate, make a list of every discrepancy: wrong measurements, missing items, incorrect quantities, and pricing gaps. Assign a dollar figure to each one. This gives you a structured supplement rather than a general complaint, and it gives the adjuster something specific to respond to.
        </p>
        <p>
          Adjusters are more receptive to a contractor who says "your measurement shows 28 squares but our certified report shows 31.4, and drip edge is missing from all four eave edges at 148 linear feet" than one who says the estimate seems low. Specificity wins. The line-by-line read is what makes specificity possible.
        </p>
      </>
    ),
  },
  "recoverable-vs-non-recoverable-depreciation": {
    title: "Understanding Depreciation: Recoverable vs. Non-Recoverable",
    excerpt: "Carriers hold back depreciation on almost every claim. Here's how it works, what you can recover, and how to make sure your customers get what they're owed.",
    category: "Supplements",
    date: "June 30, 2026",
    image: "/images/blog/recoverable-depreciation.png",
    content: (
      <>
        <p>
          Almost every homeowner gets confused when they receive their insurance payout. The estimate looks reasonable, but then they notice the carrier withheld thousands in depreciation. Your customers ask you why, and if you can't explain it clearly or recover it for them, they feel cheated. Understanding how depreciation works and what you can actually recover is one of the most important skills in roofing.
        </p>

        <h2>What Depreciation Is</h2>
        <p>
          Depreciation is the carrier's way of accounting for the reduced value of an existing roof due to age and wear. A brand new roof is worth 100 percent. A ten-year-old roof might be worth 70 percent of replacement cost, according to the carrier's schedule. When a loss occurs, the carrier pays for the damaged portion at its depreciated value, not full replacement cost.
        </p>
        <p>
          This creates a gap between what the roof actually costs to replace and what the carrier initially pays. Recoverable depreciation is the portion of that gap the homeowner can get back. Non-recoverable depreciation is the portion they cannot.
        </p>

        <h2>Recoverable Depreciation</h2>
        <p>
          Recoverable depreciation is paid back when the homeowner actually completes the repairs. The carrier withholds it initially as an incentive for the work to be done. Once you invoice the homeowner for the completed job and they submit proof of payment to the carrier, the depreciation gets released.
        </p>
        <p>
          This applies to the direct cost of the repairs themselves. If a roof replacement costs $15,000 and the carrier depreciates it by $3,000, making the initial payout $12,000, that $3,000 is recoverable. The homeowner pays their deductible, you do the work, and when the claim is settled and proof of completion is submitted, the $3,000 comes back to them.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            Recoverable depreciation only applies to the actual work that gets done. If you supplement items that weren't originally scoped and approved, the depreciation on those items typically won't be recoverable, because the homeowner wasn't charged for them in the initial estimate.
          </p>
        </div>

        <h2>Non-Recoverable Depreciation</h2>
        <p>
          Non-recoverable depreciation is the portion the homeowner simply cannot recover, no matter what. This usually applies to items that are considered part of the home's natural wear and tear, items that weren't part of the direct loss, or items that fall outside the policy coverage.
        </p>
        <p>
          Some carriers also apply non-recoverable depreciation to supplemental items that are added after the initial estimate is written. The logic is that these items weren't damaged by the covered loss, so the depreciation is permanent. This varies significantly by carrier and by state, so it's worth checking how a given carrier typically handles supplemental depreciation before setting expectations with the homeowner. This is a key point for negotiation.
        </p>

        <h2>How Depreciation Gets Applied</h2>
        <p>
          A typical claim payout looks like this. Original estimate: $20,000. Carrier's depreciation schedule shows 35 percent for a 12-year-old roof. Initial payout: $13,000. The $7,000 difference is recoverable depreciation if you're repairing the damage that triggered the claim.
        </p>
        <p>
          Now you supplement with $2,000 in missed items like drip edge and ice and water shield. The question becomes: will the carrier depreciate those supplemental items? Some will. Some won't. Some will offer a split where you recover half. This is where your documentation, negotiation, and understanding of the claim becomes critical.
        </p>

        <h2>How to Recover Depreciation</h2>
        <p>
          The process is straightforward in theory but requires attention to detail. First, document everything. Take photos of completed work, keep invoices, and create a clear record showing what was done and what it cost. Second, submit proof of payment to the carrier. This triggers the release of recoverable depreciation. Third, follow up if the payment doesn't come within the expected timeframe.
        </p>
        <p>
          For supplements, be strategic. If you're adding items that weren't damaged by the original loss, justify why they're necessary. Items like proper waterproofing, code upgrades, or items that failed due to the damage you're documenting are often easier to justify to carriers as part of the original loss.
        </p>

        <h2>Common Mistakes Contractors Make</h2>
        <p>
          The biggest mistake is assuming depreciation is gone forever. Many contractors don't even mention recoverable depreciation to homeowners, leaving money on the table. Another common mistake is billing the homeowner for the full supplemental amount and not negotiating depreciation terms with the carrier upfront. A third mistake is not keeping clear documentation of what was done, making it impossible to prove completion and trigger the depreciation release.
        </p>

        <h2>Make Sure Your Customer Gets What They're Owed</h2>
        <p>
          Understanding depreciation protects your relationship with your customer. They know their roof was damaged and needs to be fixed. When you explain that their carrier is withholding depreciation but that most of it will come back after the work is complete, they see you as someone who understands the process and is fighting for them.
        </p>
        <p>
          Walk them through the math early. Show them the initial estimate, point out the depreciation line, explain which items are recoverable, and set clear expectations about when they'll see that money back. When you get the depreciation release after completion, their confidence in you stays high, and they're more likely to recommend you to neighbors and friends. That's the kind of repeat business that makes insurance work profitable in the long term.
        </p>
      </>
    ),
  },
  "how-roofing-companies-use-ai-for-supplements": {
    title: "How Roofing Companies Are Using AI to Speed Up the Supplement Process",
    excerpt: "From identifying missed line items to generating documentation, AI is changing how contractors approach insurance claims. Here's what that looks like in practice.",
    category: "Industry Trends",
    date: "June 23, 2026",
    image: "/images/blog/ai-for-supplements.png",
    content: (
      <>
        <p>
          Supplementing has always been one of the most time-consuming parts of running an insurance-focused roofing business. Reviewing estimates line by line, cross-referencing photos, pulling code requirements, and writing it all up takes hours per claim. AI is starting to compress that work, and the contractors adopting it are turning around supplements faster without cutting corners.
        </p>
        <p>
          This isn't about replacing experienced estimators. It's about handing the repetitive parts of the process to software so your team can focus on judgment, relationships, and the claims that actually need a human touch. Here's what that looks like in practice.
        </p>

        <h2>Catching Missed Line Items Automatically</h2>
        <p>
          The most immediate use of AI is flagging items that should be on an estimate but aren't. By comparing a carrier's scope against a typical scope for the same type of loss, AI tools can surface commonly missed items like drip edge, ice and water shield, starter strip, or proper O&P before the supplement ever goes out.
        </p>
        <p>
          For a busy estimator reviewing dozens of claims a week, this acts as a safety net. The software doesn't decide what belongs on the claim, but it makes sure nothing obvious slips through, which directly protects revenue that would otherwise be left on the table.
        </p>

        <h2>Reading Estimates and Documents Faster</h2>
        <p>
          Carrier estimates, policy documents, and inspection reports are dense and inconsistent. AI tools can now parse a Xactimate estimate or a PDF scope in seconds, pulling out quantities, line items, and pricing into a structured format your team can actually work with.
        </p>
        <p>
          Instead of manually reading through pages of documentation to find the gaps, an estimator can start from a clean summary and spend their time on analysis rather than data entry.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="font-semibold text-foreground mb-2">Worth Noting</p>
          <p className="text-muted-foreground m-0">
            The biggest time savings come from the boring parts of the process, not the complex ones. Document parsing, line-item comparison, and first-draft write-ups are exactly the tasks AI handles well, and they're also the tasks that eat the most hours.
          </p>
        </div>

        <h2>Generating First-Draft Documentation</h2>
        <p>
          Writing the narrative that justifies a supplement is often the slowest step. AI can produce a clear first draft that explains why each item is necessary, references the relevant codes, and ties the work back to the documented loss. Your estimator then reviews, corrects, and finalizes it.
        </p>
        <p>
          Starting from a solid draft instead of a blank page can cut the writing time on a supplement dramatically, and it helps keep the tone consistent across everyone on your team.
        </p>

        <h2>Organizing Photos and Evidence</h2>
        <p>
          Photo documentation is critical to getting items approved, but organizing it is tedious. AI tools can help sort and label inspection photos, match them to the relevant line items, and flag areas where documentation is thin before the claim goes to the adjuster.
        </p>
        <p>
          A supplement that arrives with clearly organized, well-matched evidence is easier for an adjuster to approve, which reduces back-and-forth and shortens the cycle time on every claim.
        </p>

        <h2>Keeping the Human in the Loop</h2>
        <p>
          AI is a tool, not a decision-maker. It can miss context, misread a document, or suggest an item that doesn't actually apply to a specific loss. The contractors getting the most out of it treat AI output as a starting point that a knowledgeable estimator always reviews.
        </p>
        <p>
          The combination matters. AI handles speed and consistency, your team handles judgment and accountability. Leaning entirely on either one is where companies get into trouble.
        </p>

        <h2>What This Means for Your Business</h2>
        <p>
          Faster supplements mean faster approvals, faster billing, and the ability to handle more claims with the same team. For a residential roofing company that lives on insurance work, even a modest reduction in time per claim adds up across a busy storm season.
        </p>
        <p>
          You don't need to overhaul your entire process to start. Pick one slow step, whether it's reading estimates, drafting narratives, or organizing photos, and test an AI tool there. Measure the time saved and the approval results, then expand from what actually works. The goal isn't to chase technology for its own sake. It's to get accurate supplements out the door faster and get your crews paid sooner.
        </p>
      </>
    ),
  },
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

        <h2>Don't React. Read First.</h2>
        <p>
          The first mistake contractors make is firing back an angry email the moment a denial lands. Instead, slow down and read the denial carefully. Carriers are required to explain why something was denied, and that explanation tells you exactly what you're up against. The reason behind the denial determines your entire next move, so understand it before you respond.
        </p>

        <h2>Identify the Real Reason for the Denial</h2>
        <p>
          Most supplement denials fall into a handful of categories. Knowing which one you're dealing with tells you how to respond:
        </p>
        <ul>
          <li><strong>Insufficient documentation.</strong> The adjuster didn't see enough photos, measurements, or evidence to justify the item.</li>
          <li><strong>Disagreement on scope.</strong> The adjuster doesn't believe the work is necessary or related to the covered loss.</li>
          <li><strong>Pricing disputes.</strong> The adjuster agrees the item is needed but disputes the rate or quantity.</li>
          <li><strong>Policy or coverage limits.</strong> The item genuinely isn't covered under the policy or falls outside the claim.</li>
          <li><strong>Code interpretation.</strong> The adjuster disputes whether a building code actually requires the work.</li>
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
          Keep the tone factual and professional. You're not accusing the adjuster of anything. You're giving them what they need to approve the item. Every point you make should be backed by something they can verify.
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
          If you've provided solid evidence and the adjuster still won't budge, it may be time to escalate. Escalation isn't about going over someone's head out of spite. It's about getting a fresh set of eyes on a claim that's stuck.
        </p>
        <ul>
          <li><strong>Request a supervisor or re-inspection.</strong> Ask the carrier to have a supervisor review the file or send a different adjuster to re-inspect.</li>
          <li><strong>Invoke the appraisal clause.</strong> Most policies include an appraisal process for resolving disagreements on the amount of loss. This can break a stalemate without litigation.</li>
          <li><strong>Encourage the homeowner to engage.</strong> It's the policyholder's claim, and a call from the insured carries weight a contractor's email sometimes doesn't.</li>
        </ul>
        <p>
          Escalate in steps. Exhaust the straightforward options before moving to formal processes, and document each one.
        </p>

        <h2>Stay Professional. You'll See This Adjuster Again.</h2>
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
