import Link from 'next/link';
import { cn } from '@/lib/utils';

const variantStyles = {
  // Monochrome primary — white-on-dark / black-on-light. The brand discipline:
  // the spark accent is reserved, not spent on every button.
  primary:
    'bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80',
  secondary:
    'border border-border bg-card text-foreground hover:bg-accent active:bg-accent/70',
  ghost:
    'text-muted-foreground hover:bg-accent hover:text-foreground active:bg-accent/70',
  outline:
    'border border-border bg-transparent text-foreground hover:bg-accent active:bg-accent/70',
  // Rare, high-impact electric accent.
  spark:
    'bg-spark text-primary-foreground shadow-glow hover:bg-spark/90 active:bg-spark/80',
};

const sizeStyles = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
  lg: 'h-11 gap-2 px-5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  className = cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
