import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/components/Container';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function ArticleCard({ article }) {
  return (
    <Card hover className='group relative flex flex-col p-6 sm:p-8'>
      <time
        dateTime={article.date}
        className='font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'
      >
        {formatDate(article.date)}
      </time>
      <h2 className='mt-4 text-xl font-semibold tracking-tight text-foreground'>
        <Link
          href={`/articles/${article.slug}`}
          className='transition-colors focus-visible:outline-none group-hover:text-spark'
        >
          <span className='absolute inset-0 z-10' />
          {article.title}
        </Link>
      </h2>
      <p className='mt-3 flex-1 text-sm leading-relaxed text-muted-foreground'>
        {article.description}
      </p>
      <div className='mt-6 flex items-center font-mono text-sm text-spark'>
        Read article
        <ArrowRight className='ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5' />
      </div>
    </Card>
  );
}

export const metadata = {
  title: 'Articles',
  description:
    'Some writings on our most recent work and things we find exciting.',
  alternates: { canonical: '/articles' },
  openGraph: {
    title: 'Articles',
    description:
      'Some writings on our most recent work and things we find exciting.',
    url: '/articles',
  },
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 left-1/3 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='max-w-3xl'>
            <Eyebrow className='animate-fade-up'>Writing</Eyebrow>
            <h1 className='mt-6 text-5xl font-semibold tracking-tight sm:text-6xl'>
              <span className='text-gradient'>Notes on building </span>
              <span className='text-gradient-spark'>software</span>
              <span className='text-gradient'> for the web.</span>
            </h1>
            <p className='mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              Insights from our recent work, a few things that excite us, and
              the occasional client success story along the way.
            </p>
          </div>
        </Container>
      </section>

      {/* Article grid */}
      <Container className='py-20 sm:py-24'>
        {articles.length > 0 ? (
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className='max-w-3xl text-base text-muted-foreground'>
            No articles yet — we&apos;re heads-down building. Check back soon.
          </p>
        )}
      </Container>
    </>
  );
}
