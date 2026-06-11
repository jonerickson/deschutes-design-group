'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/app/providers';
import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { GridBackground } from '@/components/ui/GridBackground';
import { formatDate } from '@/lib/formatDate';

function ArrowLeftIcon(props) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ArticleLayout({ article, children }) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  return (
    <Container className='relative mt-16 lg:mt-24'>
      <div className='xl:relative'>
        <div className='mx-auto max-w-2xl'>
          {previousPathname ? (
            <button
              type='button'
              onClick={() => router.back()}
              aria-label='Go back to articles'
              className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-md shadow-black/5 transition hover:border-spark/40 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
            >
              <ArrowLeftIcon className='h-4 w-4 stroke-muted-foreground transition group-hover:stroke-foreground' />
            </button>
          ) : (
            <Link
              href='/articles'
              className='group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground'
            >
              <ArrowLeftIcon className='h-4 w-4 stroke-current' />
              All articles
            </Link>
          )}

          <article>
            <header className='relative flex flex-col'>
              <GridBackground
                variant='dot'
                fade='radial'
                className='-top-10 opacity-40'
              />
              <time
                dateTime={article.date}
                className='relative order-first font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'
              >
                {formatDate(article.date)}
              </time>
              <h1 className='relative mt-4 text-4xl font-semibold tracking-tight sm:text-5xl'>
                <span className='text-gradient'>{article.title}</span>
              </h1>
              {article.author && (
                <p className='relative mt-4 text-sm text-muted-foreground'>
                  By{' '}
                  <span className='font-medium text-foreground'>
                    {article.author}
                  </span>
                </p>
              )}
            </header>
            <hr className='mt-8 border-border' />
            <Prose className='mt-8' data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
