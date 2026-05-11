"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // TEMPORARY: Always show banner for design preview
    setVisible(true)
    // const accepted = localStorage.getItem("cookie-consent")
    // if (!accepted) {
    //   setVisible(true)
    // }
  }, [])

  const accept = () => {
    localStorage.setItem("cookie-consent", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div className="bg-[#1e2a38] text-white rounded-lg px-3 py-2 flex items-center gap-2 shadow-md whitespace-nowrap">
        <p className="text-[11px] text-white/60">
          This site uses cookies.{" "}
          <Link
            href="/privacy"
            className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
          >
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="text-[11px] font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded hover:bg-primary/90 transition-colors flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
