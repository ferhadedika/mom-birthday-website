'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface FloralSprigProps {
  variant?: 'bloom' | 'branch' | 'leaf'
  className?: string
  floating?: boolean
  duration?: number
}

function BloomPaths() {
  return (
    <>
      <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M60 158 C 57 120, 64 92, 60 62" />
      </g>
      <g fill="currentColor" opacity="0.45">
        <path d="M60 128 C 44 124, 33 113, 29 98 C 40 100, 50 108, 55 122 Z" />
        <path d="M62 108 C 78 103, 88 92, 91 78 C 79 81, 68 90, 62 108 Z" />
      </g>
      <g fill="currentColor">
        <ellipse cx="60" cy="34" rx="9" ry="21" transform="rotate(0 60 55)" opacity="0.85" />
        <ellipse cx="60" cy="34" rx="9" ry="21" transform="rotate(72 60 55)" opacity="0.85" />
        <ellipse cx="60" cy="34" rx="9" ry="21" transform="rotate(144 60 55)" opacity="0.85" />
        <ellipse cx="60" cy="34" rx="9" ry="21" transform="rotate(216 60 55)" opacity="0.85" />
        <ellipse cx="60" cy="34" rx="9" ry="21" transform="rotate(288 60 55)" opacity="0.85" />
        <circle cx="60" cy="55" r="5" opacity="0.95" />
      </g>
    </>
  )
}

function BranchPaths() {
  return (
    <>
      <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M10 20 C 40 30, 70 50, 95 90 C 110 115, 118 140, 120 165" />
        <path d="M55 45 C 45 35, 38 28, 36 18" />
        <path d="M80 78 C 90 70, 96 62, 96 52" />
      </g>
      <g fill="currentColor" opacity="0.9">
        <ellipse cx="36" cy="14" rx="5" ry="11" transform="rotate(-20 36 14)" />
        <ellipse cx="36" cy="14" rx="5" ry="11" transform="rotate(30 36 14)" />
        <ellipse cx="36" cy="14" rx="5" ry="11" transform="rotate(80 36 14)" />
        <circle cx="36" cy="18" r="2.5" />
      </g>
      <g fill="currentColor" opacity="0.9">
        <ellipse cx="98" cy="46" rx="4.5" ry="10" transform="rotate(-20 98 46)" />
        <ellipse cx="98" cy="46" rx="4.5" ry="10" transform="rotate(30 98 46)" />
        <ellipse cx="98" cy="46" rx="4.5" ry="10" transform="rotate(80 98 46)" />
        <circle cx="98" cy="50" r="2.2" />
      </g>
      <g fill="currentColor" opacity="0.35">
        <path d="M60 60 C 52 56, 46 48, 46 40 C 54 42, 61 49, 60 60 Z" />
        <path d="M105 120 C 97 116, 92 108, 92 100 C 100 102, 107 109, 105 120 Z" />
      </g>
    </>
  )
}

function LeafPaths() {
  return (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <path d="M20 100 C 30 70, 45 40, 60 10" />
      <path d="M35 75 C 25 70, 18 62, 17 52 C 27 54, 35 62, 35 75 Z" fill="currentColor" opacity="0.4" stroke="none" />
      <path d="M48 45 C 38 40, 31 32, 30 22 C 40 24, 48 32, 48 45 Z" fill="currentColor" opacity="0.4" stroke="none" />
    </g>
  )
}

export default function FloralSprig({
  variant = 'bloom',
  className = '',
  floating = false,
  duration = 9,
}: FloralSprigProps) {
  const shouldReduceMotion = useReducedMotion()

  const svg = (
    <svg viewBox="0 0 130 170" className="h-full w-full" aria-hidden="true">
      {variant === 'bloom' && <BloomPaths />}
      {variant === 'branch' && <BranchPaths />}
      {variant === 'leaf' && <LeafPaths />}
    </svg>
  )

  if (!floating || shouldReduceMotion) {
    return <div className={className}>{svg}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {svg}
    </motion.div>
  )
}
