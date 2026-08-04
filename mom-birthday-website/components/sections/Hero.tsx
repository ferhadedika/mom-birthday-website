'use client'

import { motion, useReducedMotion } from 'framer-motion'
import AmbientBackground from '@/components/ui/AmbientBackground'
import FloralSprig from '@/components/ui/FloralSprig'
import CatIllustration from '@/components/ui/CatIllustration'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder'
import Container from '@/components/ui/Container'
import { hero } from '@/lib/content'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-champagne-50 via-cream to-cream pb-20 pt-32">
      <AmbientBackground />

      <FloralSprig
        variant="branch"
        floating
        className="pointer-events-none absolute -left-8 -top-4 w-40 text-petal-300/60 md:w-52"
      />
      <CatIllustration
        variant="sitting"
        className="pointer-events-none absolute bottom-8 left-6 hidden w-16 text-ink/[0.08] sm:block md:w-20"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-honey-600"
            >
              {hero.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-display-xl font-display italic text-ink">
              {hero.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70 md:text-xl"
            >
              {hero.message}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp}>
            <PhotoPlaceholder
              src={hero.photo.src}
              alt={hero.photo.alt}
              label={hero.photo.label}
              hint={hero.photo.hint}
              aspect="aspect-[4/5]"
              priority
              className="shadow-soft"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-20 flex justify-center lg:justify-start"
        >
          <a
            href="#letter"
            className="group flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/50 transition-colors hover:text-honey-600"
          >
            <span>{hero.scrollHint}</span>
            <motion.span
              animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 w-px bg-current"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
