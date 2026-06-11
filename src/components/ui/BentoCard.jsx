'use client';

import { cn } from '@/lib/utils';

/**
 * Monochrome bento cell with a cursor-tracked spotlight (the Linear/Vercel
 * signature). Spotlight is pure CSS opacity and hidden under reduced-motion
 * and on no-hover devices.
 */
export function BentoCard({
  icon,
  title,
  body,
  illustration,
  className,
  children,
}) {
  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-spark/40',
        className
      )}
    >
      {illustration && (
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 overflow-hidden'
        >
          {illustration}
        </div>
      )}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden'
        style={{
          background:
            'radial-gradient(260px circle at var(--mx) var(--my), hsl(var(--spark) / 0.1), transparent 70%)',
        }}
      />
      <div className='relative'>
        {icon && (
          <div className='flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground'>
            {icon}
          </div>
        )}
      </div>
      <div className='relative mt-6 max-w-md'>
        <h3 className='text-lg font-medium tracking-tight text-foreground'>
          {title}
        </h3>
        {body && (
          <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
            {body}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
