import { getAllArticles } from '@/lib/articles';

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.deschutesdesigngroup.com';

const routes = [
  '/',
  '/about',
  '/projects',
  '/technology',
  '/contact',
  '/support',
  '/articles',
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${base}${route === '/' ? '' : route}`,
    lastModified: now,
  }));

  const articles = await getAllArticles();
  const articleEntries = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticEntries, ...articleEntries];
}
