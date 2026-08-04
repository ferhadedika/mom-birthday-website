'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface CatIllustrationProps {
  variant?: 'sitting' | 'curled'
  className?: string
  floating?: boolean
}

export default function CatIllustration({
  variant = 'sitting',
  className = '',
  floating = false,
}: CatIllustrationProps) {
  const shouldReduceMotion = useReducedMotion()

  const svg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden="true"
    >
      {variant === 'sitting' ? (
        <>
          <path d="M30 86 C 18 85, 13 70, 16 55 C 19 41, 28 31, 41 29 C 45 21, 56 21, 60 29 C 73 31, 82 42, 81 58 C 80 72, 74 86, 61 86 Z" />
          <path d="M40 29 L 35 13 L 47 25 Z" />
          <path d="M61 29 L 66 13 L 54 25 Z" />
          <path d="M61 86 C 70 89, 79 84, 83 74 C 86 66, 83 57, 76 55" />
          <circle cx="44" cy="50" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="58" cy="50" r="1.4" fill="currentColor" stroke="none" />
        </>
      ) : (
        <>
          <path d="M50 74 C 28 76, 15 63, 18 47 C 20 34, 33 25, 48 27 C 39 32, 33 41, 35 52 C 37 63, 46 70, 59 69 C 70 68, 78 60, 79 49 C 82 60, 75 73, 62 75 C 58 77, 54 76, 50 74 Z" />
          <path d="M46 27 L 41 18 L 51 24 Z" />
        </>
      )}
    </svg>
  )

  if (!floating || shouldReduceMotion) {
    return <div className={className}>{svg}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
      {svg}
    </motion.div>
  )
}
