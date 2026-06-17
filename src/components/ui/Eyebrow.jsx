import { cn } from '@/lib/utils';

/**
 * Monospace section label — the "we are engineers" signal.
 * Renders as `// LABEL` with the slashes in the spark accent.
 */
export function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        'flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground',
        className
      )}
    >
      <span className='text-spark'>{'//'}</span>
      <span>{children}</span>
    </p>
  );
}
