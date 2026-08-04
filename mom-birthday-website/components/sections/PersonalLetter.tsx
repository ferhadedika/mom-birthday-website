'use client'

import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import FloralSprig from '@/components/ui/FloralSprig'
import { letter, site } from '@/lib/content'

export default function PersonalLetter() {
  return (
    <section id="letter" className="relative overflow-hidden bg-champagne-50 px-6 py-28 md:py-36">
      <FloralSprig
        variant="leaf"
        className="pointer-events-none absolute -bottom-6 -right-10 w-32 text-champagne-300/50 md:w-44"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={letter.eyebrow} title={letter.title} align="center" />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-panel relative mx-auto max-w-2xl rounded-[2rem] px-8 py-12 sm:px-14 sm:py-16">
            <FloralSprig
              variant="bloom"
              className="pointer-events-none absolute -top-10 left-8 w-14 -rotate-12 text-petal-300/70"
            />
            <p className="font-display text-2xl italic text-ink">{letter.salutation}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              {letter.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 text-right">
              <p className="font-display italic text-ink/70">{letter.signoff}</p>
              <p className="mt-1 font-display text-xl italic text-ink">{site.signature}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
