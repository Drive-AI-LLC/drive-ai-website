"use client"

import Image from "next/image"

// Each shingle: width (inner fill px from SVG viewBox), row, col-offset
// The shingles are laid in 3 rows over the damaged dark patch on the right roof section.
// At 500px display width the house image (originally ~1080px wide) scales to ~0.463x.
// Damaged patch center: ~61% x, ~26% y of the image.
// We tile shingles left-to-right across 3 rows, staggered by index for animation.

const shingles = [
  // Row 1 — top of patch
  { w: 82, h: 39, x: 54.5, y: 19.5 },
  { w: 79, h: 39, x: 70.5, y: 19.5 },
  { w: 74, h: 39, x: 86.0, y: 19.5 },
  { w: 71, h: 39, x: 101.0, y: 19.5 },
  { w: 68, h: 39, x: 115.5, y: 19.5 },
  { w: 64, h: 39, x: 129.5, y: 19.5 },

  // Row 2 — middle of patch
  { w: 62, h: 39, x: 48.0, y: 56.5 },
  { w: 60, h: 39, x: 63.0, y: 56.5 },
  { w: 58, h: 39, x: 77.5, y: 56.5 },
  { w: 76, h: 39, x: 93.5, y: 56.5 },
  { w: 71, h: 39, x: 109.0, y: 56.5 },
  { w: 49, h: 39, x: 123.0, y: 56.5 },

  // Row 3 — bottom of patch
  { w: 46, h: 39, x: 53.0, y: 93.5 },
  { w: 64, h: 39, x: 67.5, y: 93.5 },
  { w: 68, h: 39, x: 83.0, y: 93.5 },
  { w: 74, h: 39, x: 99.5, y: 93.5 },
  { w: 34, h: 39, x: 114.5, y: 93.5 },
]

export function HouseIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Floating wrapper */}
      <div className="animate-house-float relative w-full max-w-[500px]">
        {/* Base house image */}
        <Image
          src="/images/house.png"
          alt="Cartoon house with damaged roof being repaired"
          width={500}
          height={560}
          className="w-full h-auto object-contain"
          priority
        />

        {/* Shingle overlay — absolutely positioned over the damaged roof patch */}
        {/* The patch sits at roughly 51% from left, 19% from top of the image */}
        <div
          className="absolute"
          style={{ top: "19%", left: "51%", width: "34%", height: "21%" }}
        >
          <svg
            viewBox="0 0 160 132"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            {shingles.map((s, i) => (
              <rect
                key={i}
                x={s.x - s.w / 2}
                y={s.y - s.h / 2}
                width={s.w}
                height={s.h}
                fill="#868686"
                stroke="black"
                strokeWidth="2"
                rx="1"
                className="animate-shingle-in"
                style={{
                  animationDelay: `${0.6 + i * 0.08}s`,
                  transformOrigin: `${s.x}px ${s.y + 10}px`,
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
