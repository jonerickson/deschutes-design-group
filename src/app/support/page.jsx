import { Mail, Slack, SquarePen } from 'lucide-react';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';

export const metadata = {
  title: 'Support',
  description: 'Get help on a project or with a service.',
  alternates: { canonical: '/support' },
  openGraph: {
    title: 'Support',
    description: 'Get help on a project or with a service.',
    url: '/support',
  },
};

const channels = [
  {
    icon: Slack,
    title: 'Slack',
    body: "A collaborative, community-driven space to ask questions and get support from our team and fellow users. It's often the quickest way to get assistance.",
  },
  {
    icon: Mail,
    title: 'Email',
    body: 'For complex issues or when sensitive information needs to be exchanged securely, email gives us a private, direct channel to resolve your concerns.',
  },
  {
    icon: SquarePen,
    title: 'Contact Form',
    body: "Prefer the web? Use the contact form to reach our support team directly and we'll route it to the right place.",
  },
];

export default function Support() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 left-1/3 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='max-w-3xl'>
            <Eyebrow className='animate-fade-up'>Support</Eyebrow>
            <h1 className='mt-6 text-5xl font-semibold tracking-tight sm:text-6xl'>
              <span className='text-gradient'>Get </span>
              <span className='text-gradient-spark'>help</span>
              <span className='text-gradient'>.</span>
            </h1>
            <p className='mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              We stay with our clients long after launch. Choose the channel
              that fits — and if you can&apos;t find what you need, email us
              directly.
            </p>
          </div>
        </Container>
      </section>

      {/* Channels + actions */}
      <Container className='py-20 sm:py-24'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {channels.map(({ icon: Icon, title, body }) => (
            <Card key={title} hover className='flex flex-col p-6'>
              <div className='flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground'>
                <Icon className='h-5 w-5' />
              </div>
              <h2 className='mt-6 text-lg font-medium tracking-tight text-foreground'>
                {title}
              </h2>
              <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                {body}
              </p>
            </Card>
          ))}
        </div>

        <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center'>
          <Button href='https://slack.deschutesdesigngroup.com' target='_blank'>
            <Slack className='size-4' />
            Join Slack
          </Button>
          <Button
            variant='secondary'
            href='mailto:support@deschutesdesigngroup.com'
          >
            <Mail className='size-4' />
            Email us
          </Button>
          <Button variant='secondary' href='/contact'>
            <SquarePen className='size-4' />
            Contact form
          </Button>
        </div>
      </Container>
    </>
  );
}
