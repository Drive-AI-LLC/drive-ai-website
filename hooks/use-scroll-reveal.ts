"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    console.log("[v0] Setting up IntersectionObserver for:", el)
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("[v0] IntersectionObserver fired:", { isIntersecting: entry.isIntersecting, target: el })
        if (entry.isIntersecting) {
          console.log("[v0] Element is visible, setting visible to true")
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
