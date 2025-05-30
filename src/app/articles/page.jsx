import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function Article({ article }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.date}
          className='md:hidden'
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.date}
        className='mt-1 hidden md:block'
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export const metadata = {
  title: 'Articles',
  description:
    'Some writings on our most recent work and things we find exciting.',
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <SimpleLayout
      title='Writing on web application development, design and recent work.'
      intro='We like to share some insights from our recent work and a few things that excite us. We also enjoy highlighting our clients’ successes along the way.'
    >
      <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
        <div className='flex max-w-3xl flex-col space-y-16'>
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
