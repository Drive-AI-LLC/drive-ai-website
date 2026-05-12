"use client"

import Image from "next/image"

// 18 shingle rects from Group 2.svg (viewBox="0 0 516 226")
// Rendered inline so each rect can be individually animated with staggered delay
const shingles = [
  { x: 1.5,   y: 40.5,  w: 79,  h: 36 },
  { x: 32.5,  y: 1.5,   w: 79,  h: 36 },
  { x: 40.5,  y: 77.5,  w: 71,  h: 36 },
  { x: 81.5,  y: 40.5,  w: 68,  h: 36 },
  { x: 112.5, y: 77.5,  w: 64,  h: 36 },
  { x: 303.5, y: 77.5,  w: 68,  h: 36 },
  { x: 207.5, y: 114.5, w: 68,  h: 36 },
  { x: 275.5, y: 114.5, w: 68,  h: 36 },
  { x: 343.5, y: 114.5, w: 68,  h: 36 },
  { x: 411.5, y: 114.5, w: 62,  h: 36 },
  { x: 473.5, y: 114.5, w: 31,  h: 36 },
  { x: 234.5, y: 151.5, w: 68,  h: 36 },
  { x: 302.5, y: 151.5, w: 68,  h: 36 },
  { x: 370.5, y: 151.5, w: 68,  h: 36 },
  { x: 438.5, y: 151.5, w: 76,  h: 36 },
  { x: 265.5, y: 188.5, w: 60,  h: 36 },
  { x: 325.5, y: 188.5, w: 58,  h: 36 },
  { x: 383.5, y: 188.5, w: 46,  h: 36 },
]

export function HouseIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Floating wrapper */}
      <div className="animate-house-float relative w-full max-w-[500px]">
        {/* Base house image — Group 1.png */}
        <Image
          src="/images/house.png"
          alt="Cartoon house with damaged roof being repaired"
          width={500}
          height={560}
          className="w-full h-auto object-contain"
          priority
        />

        {/* Group 2.svg overlay — exact same size/position as the base image */}
        {/* Uses absolute inset-0 so it maps 1:1 over the house */}
        <svg
          viewBox="0 0 516 226"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            // The damaged roof patch in Group 1.png sits in the upper-right
            // quadrant. Group 2.svg viewBox covers exactly that patch region.
            // Position and size the overlay to match that area precisely.
            top: "12.5%",
            left: "44%",
            width: "57%",
            height: "auto",
          }}
          preserveAspectRatio="xMinYMin meet"
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
              style={{ animationDelay: `${0.5 + i * 0.07}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
