"use client"

import Image from "next/image"

// 18 shingle rects from Shingles.svg (viewBox="0 0 2032 2235")
const shingles = [
  { x: 1100.5, y: 576.5, w: 79,  h: 36 },
  { x: 1131.5, y: 537.5, w: 79,  h: 36 },
  { x: 1139.5, y: 613.5, w: 71,  h: 36 },
  { x: 1180.5, y: 576.5, w: 68,  h: 36 },
  { x: 1402.5, y: 613.5, w: 68,  h: 36 },
  { x: 1306.5, y: 650.5, w: 68,  h: 36 },
  { x: 1374.5, y: 650.5, w: 68,  h: 36 },
  { x: 1333.5, y: 687.5, w: 68,  h: 36 },
  { x: 1401.5, y: 687.5, w: 68,  h: 36 },
  { x: 1469.5, y: 687.5, w: 68,  h: 36 },
  { x: 1537.5, y: 687.5, w: 76,  h: 36 },
  { x: 1364.5, y: 724.5, w: 60,  h: 36 },
  { x: 1424.5, y: 724.5, w: 58,  h: 36 },
  { x: 1482.5, y: 724.5, w: 46,  h: 36 },
  { x: 1442.5, y: 650.5, w: 68,  h: 36 },
  { x: 1510.5, y: 650.5, w: 62,  h: 36 },
  { x: 1572.5, y: 650.5, w: 31,  h: 36 },
  { x: 1211.5, y: 613.5, w: 64,  h: 36 },
]

export function HouseIllustration() {
  return (
    <div className="relative w-full flex items-center justify-end">
      <div className="relative w-full max-w-[520px] translate-x-8 translate-y-10">
        {/* Aspect-ratio box — matches shared Figma canvas 2032 × 2235 */}
        <div style={{ position: "relative", paddingBottom: "110.02%", width: "100%" }}>

          {/* Layer 1 — house base PNG */}
          <Image
            src="/images/house-base.png"
            alt="Cartoon house with damaged roof being repaired"
            fill
            className="object-contain"
            priority
          />

          {/* Layer 2 — shingles overlay, same viewBox as PNG canvas */}
          <svg
            viewBox="0 0 2032 2235"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            aria-hidden="true"
          >
            {shingles.map((s, i) => (
              <rect
                key={i}
                x={s.x}
                y={s.y}
                width={s.w}
                height={s.h}
                fill="#868686"
                stroke="black"
                strokeWidth="3"
                className="animate-shingle-in"
                style={{ animationDelay: `${0.5 + i * 0.25}s` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
