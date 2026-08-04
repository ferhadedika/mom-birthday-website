'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import BloomingVine from '@/components/ui/BloomingVine'
import { timeline } from '@/lib/content'
import { EASE } from '@/lib/motion'

function BloomMarker() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -25 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10"
    >
      <svg viewBox="0 0 40 40" className="absolute h-full w-full text-petal-300" aria-hidden="true">
        <g fill="currentColor" opacity="0.85">
          <ellipse cx="20" cy="11" rx="4.2" ry="8.5" />
          <ellipse cx="20" cy="11" rx="4.2" ry="8.5" transform="rotate(72 20 20)" />
          <ellipse cx="20" cy="11" rx="4.2" ry="8.5" transform="rotate(144 20 20)" />
          <ellipse cx="20" cy="11" rx="4.2" ry="8.5" transform="rotate(216 20 20)" />
          <ellipse cx="20" cy="11" rx="4.2" ry="8.5" transform="rotate(288 20 20)" />
        </g>
      </svg>
      <span className="relative h-2 w-2 rounded-full bg-honey-500" />
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-champagne-50 px-6 py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={timeline.eyebrow} title={timeline.title} align="center" />
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-2xl">
          <BloomingVine />

          <ol className="relative flex flex-col gap-10 sm:gap-12">
            {timeline.items.map((item, index) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
                className="flex items-start gap-5 sm:gap-7"
              >
                <div className="flex w-10 shrink-0 justify-center pt-1 sm:w-14">
                  <BloomMarker />
                </div>
                <div className="glass-panel flex-1 rounded-3xl px-6 py-6 sm:px-8">
                  <p className="font-display text-sm uppercase tracking-[0.15em] text-honey-600">
                    {item.year}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-ink/75 sm:text-lg">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
