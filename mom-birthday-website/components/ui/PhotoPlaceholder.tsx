'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PhotoPlaceholderProps {
  src?: string
  alt: string
  label: string
  hint?: string
  aspect?: string
  priority?: boolean
  sizes?: string
  className?: string
  rounded?: string
}

function FrameIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M21 16.5l-5.5-5-9.5 8.5" />
    </svg>
  )
}

export default function PhotoPlaceholder({
  src,
  alt,
  label,
  hint,
  aspect = 'aspect-[4/5]',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  rounded = 'rounded-[1.75rem]',
}: PhotoPlaceholderProps) {
  const [errored, setErrored] = useState(false)
  const showPlaceholder = !src || errored

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group relative overflow-hidden', aspect, rounded, className)}
    >
      {!showPlaceholder && src && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setErrored(true)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {showPlaceholder && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-petal-100 via-cream to-champagne-100 p-6 text-center">
          <FrameIcon className="h-7 w-7 text-honey-500/60" />
          <p className="font-display text-lg italic text-ink/70">{label}</p>
          {hint && (
            <span className="rounded-full bg-white/60 px-3 py-1 font-mono text-[10px] tracking-wide text-ink/40">
              {hint}
            </span>
          )}
        </div>
      )}

      <div className={cn('pointer-events-none absolute inset-0 border border-white/40', rounded)} />
    </motion.div>
  )
}
