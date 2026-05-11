"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

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
    <div className="fixed bottom-4 left-4 z-50 max-w-[280px]">
      <div className="bg-[#1e2a38] text-white rounded-lg px-4 py-3 flex flex-col gap-2.5 shadow-md">
        <p className="text-[11px] text-white/60 leading-relaxed">
          This site uses cookies to improve your experience.{" "}
          <Link
            href="/privacy"
            className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
          >
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="self-start text-[11px] font-semibold bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
