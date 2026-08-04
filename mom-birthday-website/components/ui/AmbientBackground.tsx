'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface AmbientBackgroundProps {
  className?: string
}

export default function AmbientBackground({ className = '' }: AmbientBackgroundProps) {
  const shouldReduceMotion = useReducedMotion()

  const blobs = [
    { className: 'left-[-10rem] top-[-8rem] h-96 w-96 bg-petal-200/40', x: [0, 40, 0], y: [0, 30, 0], duration: 22 },
    { className: 'right-[-10rem] top-1/4 h-[28rem] w-[28rem] bg-champagne-200/40', x: [0, -30, 0], y: [0, 40, 0], duration: 26 },
    { className: 'bottom-[-6rem] left-1/4 h-80 w-80 bg-honey-100/50', x: [0, 25, 0], y: [0, -25, 0], duration: 19 },
  ]

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={shouldReduceMotion ? undefined : { x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
