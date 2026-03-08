import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag, User } from "lucide-react"

// Sample blog post data - in production this would come from a CMS
const blogPosts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  content: React.ReactNode
}> = {
  "5-ways-small-businesses-can-use-ai-right-now": {
    title: "5 Ways Small Businesses Can Use AI Right Now",
    excerpt: "Discover practical, actionable ways to implement AI in your small business today without a massive budget or technical expertise.",
    category: "AI Basics",
    date: "March 5, 2026",
    content: (
      <>
        <p>
          Artificial intelligence isn't just for tech giants anymore. Small businesses across every industry are discovering practical ways to use AI tools that save time, reduce costs, and improve customer experiences.
        </p>
        <p>
          The key is starting small and focusing on high-impact areas where automation can make an immediate difference. Here are five ways you can begin implementing AI in your business today.
        </p>

        <h2>1. Automate Customer Support with AI Chatbots</h2>
        <p>
          AI-powered chatbots have come a long way from the frustrating bots of the past. Modern conversational AI can handle common customer questions, book appointments, and even process simple transactions—all without human intervention.
        </p>
        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-xl">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            Start with your top 10 most frequently asked questions. A well-trained chatbot can handle 60-80% of routine inquiries, freeing your team for complex issues.
          </p>
        </div>

        <h2>2. Streamline Email and Communication</h2>
        <p>
          AI writing assistants can help you draft professional emails, respond to customer inquiries faster, and maintain consistent communication across your team. Tools like smart compose and email categorization can save hours each week.
        </p>

        <h2>3. Automate Data Entry and Document Processing</h2>
        <p>
          If your team spends hours manually entering data from invoices, receipts, or forms, AI-powered document processing can transform this workflow. Modern OCR and extraction tools can:
        </p>
        <ul>
          <li>Extract data from invoices and receipts automatically</li>
          <li>Categorize and file documents without manual sorting</li>
          <li>Sync information directly to your accounting software</li>
          <li>Flag anomalies or errors for human review</li>
        </ul>

        <h2>4. Enhance Your Marketing with AI Insights</h2>
        <p>
          AI tools can analyze your customer data to identify trends, predict behavior, and personalize marketing messages. Even simple applications like AI-powered subject line testing or content recommendations can significantly improve your marketing ROI.
        </p>
        <blockquote>
          "The businesses that thrive in the next decade won't be the ones with the biggest budgets—they'll be the ones that use AI to work smarter, not harder."
        </blockquote>

        <h2>5. Optimize Scheduling and Resource Management</h2>
        <p>
          AI scheduling tools can automatically find optimal meeting times, balance workloads across your team, and even predict busy periods so you can staff accordingly. This is especially valuable for service businesses where efficient scheduling directly impacts revenue.
        </p>

        <h2>Getting Started</h2>
        <p>
          The best approach is to start with one area where you feel the most pain. Look for tasks that are:
        </p>
        <ul>
          <li>Repetitive and time-consuming</li>
          <li>Rule-based (even if the rules are complex)</li>
          <li>Currently creating bottlenecks in your workflow</li>
        </ul>
        <p>
          Once you've identified a starting point, reach out to an AI consulting firm like Drive AI to help you evaluate options and implement a solution that fits your specific needs.
        </p>
      </>
    ),
  },
  "what-ai-automation-actually-looks-like": {
    title: "What AI Automation Actually Looks Like",
    excerpt: "Forget the hype. Here's what AI automation looks like in practice for real businesses with real constraints.",
    category: "Automation",
    date: "February 28, 2026",
    content: (
      <>
        <p>
          When most people think of AI automation, they imagine robots replacing workers or complex systems that require a team of engineers to maintain. The reality for most small businesses is much more practical—and much more accessible.
        </p>
        <p>
          Let's walk through what AI automation actually looks like in the real world.
        </p>

        <h2>It's About Connecting, Not Replacing</h2>
        <p>
          The most effective AI automations don't replace your existing tools—they connect them. A typical automation might take data from your email, process it with AI, and update your CRM automatically. No new systems to learn, just smarter connections between what you already use.
        </p>
        <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-xl">
          <p className="font-semibold text-foreground mb-2">Key Takeaway</p>
          <p className="text-muted-foreground m-0">
            The best automations are invisible. Your team keeps working the way they always have, but manual steps happen automatically in the background.
          </p>
        </div>

        <h2>Real Example: Lead Processing</h2>
        <p>
          Here's a concrete example. A service business receives leads through their website form. Before automation:
        </p>
        <ul>
          <li>Someone checks the form submissions manually</li>
          <li>They copy information into their CRM</li>
          <li>They send a templated response email</li>
          <li>They add a follow-up task to their calendar</li>
        </ul>
        <p>
          With AI automation, all of this happens instantly when a form is submitted. The AI can even qualify the lead based on their responses and route it to the right team member.
        </p>

        <h2>The 80/20 Rule of Automation</h2>
        <p>
          Not everything should be automated. The goal is to identify the 20% of tasks that consume 80% of your team's time on repetitive work. Focus there first, and you'll see the biggest return on your investment.
        </p>
      </>
    ),
  },
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]

  // Fallback content for posts without full content
  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">This blog post doesn't exist or has been removed.</p>
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
      
      {/* Article Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em] font-serif mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Drive AI</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="aspect-[2/1] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary font-serif">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:not-italic prose-blockquote:font-normal prose-ul:text-muted-foreground prose-li:marker:text-primary">
            {post.content}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground tracking-[-0.02em] font-serif mb-4">
            Want to explore AI in your business?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a consultation with Drive AI to discover practical ways to save time and improve efficiency.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link href="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
