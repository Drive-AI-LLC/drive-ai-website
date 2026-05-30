"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" })

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/96 backdrop-blur-md border-b border-border/30">
      <nav className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center shrink-0" onClick={scrollToTop}>
            <Image
              src="/images/logo.png"
              alt="Drive AI"
              width={120}
              height={44}
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={scrollToTop}
                  className={`relative text-sm transition-colors duration-150 pb-0.5 ${
                    isActive
                      ? "text-foreground font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="px-5 h-9 text-sm hover:-translate-y-1">
              <a href="https://supplement.driveai.llc" target="_blank" rel="noopener noreferrer">Try It Free</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-foreground bg-muted/60"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                    onClick={() => { setIsMenuOpen(false); scrollToTop() }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button asChild className="mt-3 text-sm h-10">
                <a href="https://supplement.driveai.llc" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Try It Free
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
