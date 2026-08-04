'use client'

import AmbientBackground from '@/components/ui/AmbientBackground'
import FloralSprig from '@/components/ui/FloralSprig'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { finalMessage } from '@/lib/content'

export default function FinalMessage() {
  return (
    <section
      id="final-message"
      className="relative overflow-hidden bg-gradient-to-b from-champagne-100 via-petal-50 to-honey-50 px-6 py-28 md:py-40"
    >
      <AmbientBackground />
      <FloralSprig
        variant="bloom"
        floating
        className="pointer-events-none absolute -top-8 left-1/2 w-20 -translate-x-1/2 text-honey-300/60 md:w-28"
      />

      <Container className="relative text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-honey-600">
            {finalMessage.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl space-y-6">
          {finalMessage.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-ink/75 md:text-xl">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-xl">
          <p className="text-gradient-gold text-display-sm font-display italic">
            {finalMessage.closingLine}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
