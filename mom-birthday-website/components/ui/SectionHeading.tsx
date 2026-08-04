import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <div
        className={cn(
          'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-honey-500',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-px w-8 bg-honey-300/70" aria-hidden="true" />
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-honey-300/70" aria-hidden="true" />}
      </div>
      <h2 className="mt-5 text-display-md font-display italic text-ink">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink/60 md:text-lg">{description}</p>
      )}
    </div>
  )
}
