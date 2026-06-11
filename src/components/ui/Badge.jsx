import { cn } from '@/lib/utils';

const badgeVariants = {
  default: 'border-border bg-muted text-muted-foreground',
  spark: 'border-spark/30 bg-spark/10 text-spark',
  outline: 'border-border bg-transparent text-foreground',
};

export function Badge({ variant = 'default', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
