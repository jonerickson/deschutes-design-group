'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Hero visual — a floating editor/terminal panel that rotates through the
 * stacks we build on (Laravel, Next.js, Terraform, Pest, Docker, CI). Every
 * snippet is themed around shipping and creating products. Monochrome chrome,
 * a single spark accent, one scoped shimmer. Auto-rotation pauses under
 * prefers-reduced-motion; first frame is identical on server + client.
 */
const snippets = [
  {
    file: 'app/Actions/ShipProduct.php',
    lang: 'Laravel',
    status: 'forge · shipped',
    code: (
      <>
        {'$product = '}
        <span className='text-spark'>Product</span>
        {'::create($validated);'}
        {'\n\n'}
        {'$product->'}
        <span className='text-spark'>ship</span>
        {'();'}
      </>
    ),
  },
  {
    file: 'app/page.tsx',
    lang: 'Next.js',
    status: 'vercel · live',
    code: (
      <>
        <span className='text-spark'>export default</span>
        {' function App() {'}
        {'\n  '}
        {'return launch('}
        <span className='text-spark'>&lt;Product /&gt;</span>
        {')'}
        {'\n}'}
      </>
    ),
  },
  {
    file: 'main.tf',
    lang: 'Terraform',
    status: 'aws · provisioned',
    code: (
      <>
        <span className='text-spark'>module</span>{' '}
        <span className='text-foreground'>&quot;product&quot;</span>
        {' {'}
        {'\n  '}
        {'source = '}
        <span className='text-foreground'>&quot;./ship&quot;</span>
        {'\n}'}
      </>
    ),
  },
  {
    file: 'tests/Feature/ShipTest.php',
    lang: 'Pest',
    status: 'ci · passing',
    code: (
      <>
        <span className='text-spark'>it</span>
        {'('}
        <span className='text-foreground'>&apos;ships the product&apos;</span>
        {', function () {'}
        {'\n  '}
        {'expect($product)->'}
        <span className='text-spark'>toBeShipped</span>
        {'();'}
        {'\n});'}
      </>
    ),
  },
  {
    file: 'Dockerfile',
    lang: 'Docker',
    status: 'registry · pushed',
    code: (
      <>
        <span className='text-spark'>FROM</span>
        {' php:8.3-fpm-alpine '}
        <span className='text-spark'>AS</span>
        {' product'}
        {'\n'}
        <span className='text-spark'>RUN</span>
        {' php artisan app:ship'}
      </>
    ),
  },
  {
    file: '.github/workflows/ship.yml',
    lang: 'CI/CD',
    status: 'actions · deployed',
    code: (
      <>
        {'- '}
        <span className='text-spark'>name</span>
        {': Ship to production'}
        {'\n  '}
        <span className='text-spark'>run</span>
        {': ./ship --release'}
      </>
    ),
  },
];

export function TerminalCard({ className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % snippets.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const snippet = snippets[index];

  return (
    <div
      className={cn(
        'relative min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-card shadow-glow',
        className
      )}
    >
      {/* chrome bar */}
      <div className='flex items-center gap-2 border-b border-border px-5 py-4'>
        <span className='h-3.5 w-3.5 rounded-full bg-muted-foreground/30' />
        <span className='h-3.5 w-3.5 rounded-full bg-muted-foreground/30' />
        <span className='h-3.5 w-3.5 rounded-full bg-muted-foreground/30' />
        <span className='ml-3 min-w-0 truncate font-mono text-sm text-muted-foreground'>
          {snippet.file}
        </span>
        <span className='ml-auto shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/70'>
          {snippet.lang}
        </span>
      </div>

      {/* code body */}
      <pre
        key={index}
        className='animate-fade-in overflow-x-auto p-7 font-mono text-base leading-loose text-muted-foreground sm:text-lg'
      >
        <code>{snippet.code}</code>
      </pre>

      {/* deploy status row */}
      <div className='border-t border-border px-7 py-5'>
        <div className='flex items-center gap-2 font-mono text-sm'>
          <span className='h-2.5 w-2.5 animate-spark-pulse rounded-full bg-spark' />
          <span className='text-foreground'>Deploying</span>
          <span key={index} className='animate-fade-in text-muted-foreground'>
            — {snippet.status}
          </span>
        </div>
        <div className='relative mt-3 h-1 overflow-hidden rounded-full bg-muted'>
          <div className='absolute inset-y-0 left-0 w-2/5 rounded-full bg-spark/70' />
          <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-spark/40 to-transparent motion-reduce:hidden' />
        </div>
      </div>
    </div>
  );
}
