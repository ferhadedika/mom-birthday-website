'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export default function BloomingVine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.65'],
  })
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  // A gentle, wandering line. preserveAspectRatio="none" lets it stretch
  // to whatever height the timeline list ends up rendering at.
  const d =
    'M20 0 C 32 30, 8 60, 20 90 C 32 120, 8 150, 20 180 C 32 210, 8 240, 20 270 C 32 300, 8 330, 20 360 C 30 385, 12 400, 20 420'

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-14">
      <svg viewBox="0 0 40 420" preserveAspectRatio="none" className="h-full w-full text-honey-300/80" aria-hidden="true">
        <motion.path
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={shouldReduceMotion ? false : { pathLength: 0 }}
          style={shouldReduceMotion ? undefined : { pathLength }}
        />
      </svg>
    </div>
  )
}
