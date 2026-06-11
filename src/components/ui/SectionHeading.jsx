import { cn } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/Eyebrow';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={align === 'center' ? 'justify-center' : undefined}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className='text-gradient mt-4 text-3xl font-semibold tracking-tight sm:text-4xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-4 text-base leading-relaxed text-muted-foreground'>
          {description}
        </p>
      )}
    </div>
  );
}
