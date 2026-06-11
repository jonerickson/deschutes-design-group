import clsx from 'clsx';

/**
 * Merge class names. Thin wrapper around clsx so components can use the
 * familiar shadcn `cn()` API without pulling in tailwind-merge.
 */
export function cn(...inputs) {
  return clsx(inputs);
}
