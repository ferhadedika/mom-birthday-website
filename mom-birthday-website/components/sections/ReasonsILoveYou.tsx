'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { reasons } from '@/lib/content'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

const sizeStyles: Record<'lg' | 'md' | 'sm', string> = {
  lg: 'font-display italic text-2xl sm:text-3xl text-ink leading-snug',
  md: 'font-display text-xl sm:text-2xl text-ink/85 leading-snug',
  sm: 'text-base sm:text-lg text-ink/60 leading-relaxed',
}

export default function ReasonsILoveYou() {
  return (
    <section id="reasons" className="relative overflow-hidden bg-cream px-6 py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={reasons.eyebrow}
            title={reasons.title}
            description={reasons.description}
            align="center"
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 max-w-4xl columns-1 gap-10 sm:columns-2"
        >
          {reasons.items.map((item, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className={cn('mb-9 break-inside-avoid', sizeStyles[item.size])}
            >
              {item.text}
            </motion.p>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
