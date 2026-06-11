import { cn } from '@/lib/utils';

/**
 * Base surface — hairline border on a near-flat fill. Separation comes from
 * the border, not the fill (the Linear/Vercel dark-card convention).
 */
export function Card({ hover = false, className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card',
        hover && 'transition-colors duration-300 hover:border-spark/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
