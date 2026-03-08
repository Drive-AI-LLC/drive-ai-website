"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"

const categories = [
  "All",
  "AI Basics",
  "Automation",
  "Small Business Tips",
  "Productivity",
  "Case Studies",
]

const blogPosts = [
  {
    slug: "5-ways-small-businesses-can-use-ai-right-now",
    title: "5 Ways Small Businesses Can Use AI Right Now",
    excerpt: "Discover practical, actionable ways to implement AI in your small business today without a massive budget or technical expertise.",
    category: "AI Basics",
    date: "March 5, 2026",
    image: "/images/blog/ai-small-business.jpg",
  },
  {
    slug: "what-ai-automation-actually-looks-like",
    title: "What AI Automation Actually Looks Like",
    excerpt: "Forget the hype. Here's what AI automation looks like in practice for real businesses with real constraints.",
    category: "Automation",
    date: "February 28, 2026",
    image: "/images/blog/automation.jpg",
  },
  {
    slug: "how-to-save-time-by-connecting-your-business-tools",
    title: "How to Save Time by Connecting Your Business Tools",
    excerpt: "Learn how integrating your existing tools can eliminate manual data entry and save hours every week.",
    category: "Productivity",
    date: "February 20, 2026",
    image: "/images/blog/tools.jpg",
  },
  {
    slug: "common-misconceptions-about-ai-for-small-business",
    title: "Common Misconceptions About AI for Small Business",
    excerpt: "We break down the biggest myths about AI adoption and show you what's actually possible for businesses of any size.",
    category: "AI Basics",
    date: "February 15, 2026",
    image: "/images/blog/misconceptions.jpg",
  },
  {
    slug: "where-to-start-with-ai-in-your-company",
    title: "Where to Start with AI in Your Company",
    excerpt: "Feeling overwhelmed? Here's a simple framework to identify the best opportunities for AI in your business.",
    category: "Small Business Tips",
    date: "February 10, 2026",
    image: "/images/blog/getting-started.jpg",
  },
  {
    slug: "case-study-chamber-of-commerce-automation",
    title: "Case Study: How We Saved a Chamber of Commerce 100+ Hours",
    excerpt: "A deep dive into how Drive AI automated lead generation and data collection for the Clemson Area Chamber.",
    category: "Case Studies",
    date: "February 5, 2026",
    image: "/images/blog/case-study.jpg",
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-[-0.02em] font-serif mb-6">
              Insights on AI for Small Business
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Practical ideas, automation tips, and real-world guidance for using AI in your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary font-serif">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>
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

      <Footer />
    </main>
  )
}
