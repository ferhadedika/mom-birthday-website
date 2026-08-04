'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder'
import { memories } from '@/lib/content'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function FavoriteMemories() {
  return (
    <section id="memories" className="relative overflow-hidden bg-ivory px-6 py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={memories.eyebrow}
            title={memories.title}
            description={memories.description}
            align="center"
          />
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-5"
        >
          {memories.items.map((item, index) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className={index === 0 ? 'col-span-2 sm:col-span-1 lg:col-span-2' : ''}
            >
              <PhotoPlaceholder
                src={item.src}
                alt={item.alt}
                label={item.label}
                hint={item.hint}
                aspect={index === 0 ? 'aspect-[4/3] lg:aspect-[4/5]' : 'aspect-[4/5]'}
              />
              <p className="mt-4 text-center text-sm text-ink/60">{item.caption}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
