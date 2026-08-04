'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { admire } from '@/lib/content'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function ThingsIAdmire() {
  return (
    <section id="admire" className="relative overflow-hidden bg-ivory px-6 py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={admire.eyebrow}
            title={admire.title}
            description={admire.description}
            align="center"
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 max-w-3xl divide-y divide-honey-200/60"
        >
          {admire.items.map((item) => (
            <motion.div key={item.title} variants={fadeInUp} className="py-8 first:pt-0 last:pb-0">
              <h3 className="font-display text-2xl italic text-ink sm:text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
