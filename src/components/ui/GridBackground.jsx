import { cn } from '@/lib/utils';

/**
 * Decorative dot/line grid that fades out toward the edges.
 * Always render inside a `relative` parent; sits behind content.
 */
export function GridBackground({
  variant = 'dot',
  fade = 'radial',
  className,
}) {
  return (
    <div
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute inset-0',
        variant === 'dot' ? 'bg-dot' : 'bg-grid',
        fade === 'radial' ? 'mask-radial-faded' : 'mask-b-faded',
        className
      )}
    />
  );
}

/** A single, very diffuse spark glow — the one bit of color in a section. */
export function SparkGlow({ className }) {
  return (
    <div
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute rounded-full bg-spark/15 blur-[120px]',
        className
      )}
    />
  );
}
