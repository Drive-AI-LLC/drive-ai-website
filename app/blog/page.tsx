"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, ChevronDown } from "lucide-react"

const categories = [
  "All",
  "Supplements",
  "Storm Response",
  "Operations",
  "Workflows",
  "Industry Trends",
]

const blogPosts = [
  {
    slug: "crew-scheduling-mistakes-costing-you-time",
    title: "Crew Scheduling Mistakes Costing You Time and Money",
    excerpt: "Poor scheduling creates downtime, travel gaps, and missed revenue opportunities. Here's how to optimize crew allocation and maximize productivity.",
    category: "Operations",
    date: "May 5, 2026",
    image: "/images/blog/crew-scheduling.jpg",
  },
  {
    slug: "why-roofing-companies-leave-money-on-the-table",
    title: "Why Roofing Companies Leave Money on the Table",
    excerpt: "Most roofers miss supplement opportunities on every claim. Here's how to identify gaps in your current process and recover what you're owed.",
    category: "Supplements",
    date: "April 28, 2026",
    image: "/images/blog/supplements.jpg",
  },
  {
    slug: "storm-response-speed-matters",
    title: "Storm Response: Why Speed Matters More Than You Think",
    excerpt: "The first 48 hours after a storm determine who wins the neighborhood. Learn how top roofing companies structure their outreach.",
    category: "Storm Response",
    date: "April 21, 2026",
    image: "/images/blog/storm-response.jpg",
  },
  {
    slug: "production-bottlenecks-killing-your-margins",
    title: "5 Production Bottlenecks Killing Your Margins",
    excerpt: "From sales-to-production handoffs to crew scheduling gaps, these common operational issues cost roofing companies thousands every month.",
    category: "Operations",
    date: "April 14, 2026",
    image: "/images/blog/production.jpg",
  },
  {
    slug: "automating-lead-follow-up-without-losing-the-human-touch",
    title: "Automating Lead Follow-Up Without Losing the Human Touch",
    excerpt: "Homeowners want fast responses, but they also want to feel heard. Here's how to balance automation with authentic communication.",
    category: "Workflows",
    date: "April 7, 2026",
    image: "/images/blog/follow-up.jpg",
  },
  {
    slug: "xactimate-cross-reference-explained",
    title: "Xactimate Cross-Reference: What Most Adjusters Miss",
    excerpt: "A breakdown of the most commonly missed line items in roofing estimates and how systematic cross-referencing increases claim value.",
    category: "Supplements",
    date: "March 30, 2026",
    image: "/images/blog/xactimate.jpg",
  },
  {
    slug: "roofing-industry-trends-2026",
    title: "Roofing Industry Trends to Watch in 2026",
    excerpt: "From labor shortages to insurance tightening, here are the operational shifts every roofing company should be preparing for.",
    category: "Industry Trends",
    date: "March 22, 2026",
    image: "/images/blog/trends.jpg",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-muted/30">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.02em] font-serif mb-6 whitespace-nowrap">
              Roofing Industry Insights
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Understanding modern operations.
            </p>
            <div className="flex justify-center">
              <ChevronDown className="w-5 h-5 text-primary/60 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-border/50 bg-background"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-background border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-foreground/[0.03] hover:border-border transition-all duration-300"
              >
                {/* Featured Image */}
                <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}
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
