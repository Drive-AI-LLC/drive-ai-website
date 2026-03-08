import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance">
              AI Solutions That Actually Work for Small Businesses.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We help businesses save time, automate repetitive work, and use AI tools to operate more efficiently.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#how-it-works">
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 via-accent to-secondary rounded-3xl p-8 lg:p-12">
              {/* Abstract AI Visualization */}
              <div className="aspect-square relative">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-background rounded-xl shadow-md flex items-center justify-center border border-border">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </div>
                
                <div className="absolute top-8 right-8 w-12 h-12 bg-background rounded-xl shadow-md flex items-center justify-center border border-border">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-background rounded-xl shadow-md flex items-center justify-center border border-border">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-background rounded-xl shadow-md flex items-center justify-center border border-border">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                  <line x1="20" y1="20" x2="45" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                  <line x1="80" y1="20" x2="55" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                  <line x1="20" y1="80" x2="45" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                  <line x1="80" y1="80" x2="55" y2="55" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                </svg>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-lg border border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">40+ Hours Saved</p>
                  <p className="text-xs text-muted-foreground">Per month, on average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
