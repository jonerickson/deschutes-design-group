const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.deschutesdesigngroup.com';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
