'use client'

import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import FloralSprig from '@/components/ui/FloralSprig'
import { thankYou } from '@/lib/content'

export default function ThankYou() {
  return (
    <section id="thank-you" className="relative overflow-hidden bg-petal-50 px-6 py-28 md:py-36">
      <FloralSprig
        variant="branch"
        floating
        className="pointer-events-none absolute -right-10 top-10 w-36 rotate-[110deg] text-petal-300/50 md:w-48"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={thankYou.eyebrow} title={thankYou.title} align="center" />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl space-y-6 text-center">
          {thankYou.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-ink/75 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-gradient-gold font-display text-2xl italic sm:text-3xl">
            {thankYou.closingLine}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
