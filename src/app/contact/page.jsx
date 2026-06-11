import Link from 'next/link';
import { revalidatePath } from 'next/cache';

import { Container } from '@/components/Container';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';
import { ContactUsForm } from '@/components/ContactUsForm';
import { sendContactFormMessage } from '@/lib/mail';

export const metadata = {
  title: 'Contact',
  description: 'Start a project or send us a message.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact',
    description: 'Start a project or send us a message.',
    url: '/contact',
  },
};

export default function Contact() {
  const siteKey = process.env.CLOUDFLARE_TURNSTILE_SITE_KEY;

  async function sendMessage(formData) {
    'use server';

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const result = await sendContactFormMessage(
      rawFormData.name,
      rawFormData.email,
      rawFormData.message
    );

    if (result.ok) {
      revalidatePath('/contact');
    }

    return result;
  }

  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 left-1/3 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='max-w-3xl'>
            <Eyebrow className='animate-fade-up'>Let&apos;s talk</Eyebrow>
            <h1 className='mt-6 text-5xl font-semibold tracking-tight sm:text-6xl'>
              <span className='text-gradient'>Start a </span>
              <span className='text-gradient-spark'>project</span>
              <span className='text-gradient'>.</span>
            </h1>
            <p className='mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              Tell us what you&apos;re building — a new product, a platform to
              scale, or a site to ship. Questions and support requests are
              welcome too.
            </p>
          </div>
        </Container>
      </section>

      {/* Details + form */}
      <Container className='py-20 sm:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16'>
          <div className='flex flex-col gap-10'>
            <div>
              <Eyebrow>Email</Eyebrow>
              <a
                href='mailto:info@deschutesdesigngroup.com'
                className='mt-3 block text-base text-foreground transition-colors hover:text-spark'
              >
                info@deschutesdesigngroup.com
              </a>
            </div>
            <div>
              <Eyebrow>Existing project</Eyebrow>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                Need help with something we&apos;ve already shipped? Check the{' '}
                <Link
                  href='/support'
                  className='font-medium text-spark underline decoration-spark/40 underline-offset-4 transition-colors hover:decoration-spark'
                >
                  support
                </Link>{' '}
                page first.
              </p>
            </div>
            <div>
              <Eyebrow>What to expect</Eyebrow>
              <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                We read every message and typically reply within one business
                day — usually with a few questions about how we&apos;d engineer
                it.
              </p>
            </div>
          </div>

          <Card className='p-6 sm:p-8'>
            <ContactUsForm siteKey={siteKey} sendMessage={sendMessage} />
          </Card>
        </div>
      </Container>
    </>
  );
}
