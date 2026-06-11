import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';
import { Affiliates } from '@/components/Affiliates';
import { cn } from '@/lib/utils';

import '@/styles/tailwind.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.deschutesdesigngroup.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s — Deschutes Design Group LLC',
    default: 'Deschutes Design Group LLC — We build software on the web',
  },
  description:
    'A software engineering firm in Bozeman, Montana. We build custom web applications — SaaS platforms, internal tools, and marketing sites — on Next.js, Laravel, and React.',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Deschutes Design Group LLC',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jonericksonx',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'Organization'],
  name: 'Deschutes Design Group LLC',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bozeman',
    addressRegion: 'MT',
    addressCountry: 'US',
  },
  areaServed: 'US',
  email: 'info@deschutesdesigngroup.com',
  sameAs: [
    'https://x.com/jonericksonx',
    'https://github.com/jonerickson',
    'https://linkedin.com/in/jonericksonx',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className='flex h-full bg-background font-sans'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Affiliates />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
