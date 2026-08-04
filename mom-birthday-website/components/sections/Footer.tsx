'use client'

import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import CatIllustration from '@/components/ui/CatIllustration'
import { footer, hero } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-honey-200/50 bg-cream px-6 py-16 text-center">
      <Container>
        <Reveal>
          <p className="font-display text-xl italic text-ink sm:text-2xl">
            Happy Birthday, {hero.headline}
          </p>
          <div className="mx-auto mt-8 flex flex-col items-center gap-1">
            <p className="text-sm text-ink/60">{footer.line1}</p>
            <p className="font-display text-lg italic text-ink">{footer.line2}</p>
          </div>

          <CatIllustration variant="curled" className="mx-auto mt-8 w-10 text-ink/20" />

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-ink/35">{footer.note}</p>
        </Reveal>
      </Container>
    </footer>
  )
}
