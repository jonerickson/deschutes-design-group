import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata = {
  title: {
    template: 'Deschutes Design Group LLC',
    default:
      'Deschutes Design Group LLC - Software developer, web applications, and consulting',
  },
  description:
    'A premier web development firm located in the picturesque city of Bend, Oregon. Our expertise lies in crafting exceptional web applications and revolutionary web design concepts.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
