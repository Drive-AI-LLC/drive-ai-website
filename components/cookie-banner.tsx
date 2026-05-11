"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent")
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-5 pb-5 sm:px-6 pointer-events-none">
      <div className="max-w-xl mx-auto sm:mx-0 bg-[#1e2a38] text-white rounded-lg px-5 py-4 flex items-center justify-between gap-4 shadow-lg pointer-events-auto">
        <p className="text-sm text-white/70 leading-relaxed">
          This site uses cookies and analytics to improve your experience.{" "}
          <Link
            href="/privacy"
            className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
          >
            Learn More
          </Link>
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={accept}
            className="text-xs font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={accept}
            aria-label="Dismiss"
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
