import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
} from '@/components/SocialIcons';
import { ArrowRight, Code2, Server, Paintbrush, LifeBuoy } from 'lucide-react';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-muted-foreground transition hover:text-foreground'
      >
        <Icon className='h-6 w-6 flex-none fill-muted-foreground transition group-hover:fill-foreground' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

const principles = [
  {
    icon: Code2,
    title: 'Engineering Depth, Not Templates',
    body: 'Full-stack custom development on Next.js, Laravel, and React. Clean architecture and performance that compound in value instead of becoming technical debt.',
  },
  {
    icon: Server,
    title: 'Products That Scale',
    body: 'Platforms built to hold up under real load — serverless, AWS, Kubernetes, and infrastructure-as-code. Foundations that grow with you.',
  },
  {
    icon: Paintbrush,
    title: 'Design That Ships',
    body: 'Conversion-focused interfaces and brand-grade marketing sites — designed and engineered together, so the mockup is what reaches production.',
  },
  {
    icon: LifeBuoy,
    title: 'A Partner Past Launch',
    body: 'Maintenance, hosting, and technical support. We operate as an extension of your team, long after the first deploy.',
  },
];

export const metadata = {
  title: 'About',
  description:
    'A software engineering firm in Bozeman, Montana building custom web applications on Next.js, Laravel, and React.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Deschutes Design Group LLC',
    description:
      'A software engineering firm in Bozeman, Montana building custom web applications on Next.js, Laravel, and React.',
    url: '/about',
  },
};

export default function About() {
  return (
    <>
      {/* Hero + portrait + narrative */}
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 right-1/4 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16'>
            <div className='lg:order-last lg:pl-10'>
              <div className='relative mx-auto max-w-xs lg:max-w-sm'>
                <div className='absolute -inset-4 -z-10 rounded-3xl bg-spark/5 blur-2xl' />
                <Image
                  src={portraitImage}
                  alt='Jon Erickson, founder of Deschutes Design Group'
                  sizes='(min-width: 1024px) 24rem, 18rem'
                  className='aspect-square rotate-3 rounded-2xl border border-border bg-muted object-cover'
                />
              </div>
            </div>

            <div>
              <Eyebrow className='animate-fade-up'>Who we are</Eyebrow>
              <h1 className='mt-6 text-4xl font-semibold tracking-tight sm:text-5xl'>
                <span className='text-gradient'>
                  We build the software that powers your{' '}
                </span>
                <span className='text-gradient-spark'>business</span>
                <span className='text-gradient'>.</span>
              </h1>
              <div className='mt-6 space-y-6 text-base leading-relaxed text-muted-foreground'>
                <p>
                  Deschutes Design Group is a software engineering firm based in
                  Bozeman, Montana. We partner with startups, established
                  companies, and organizations to design, build, and scale
                  custom digital products that solve real business problems.
                </p>
                <p>
                  Our work spans full-stack web applications, marketing
                  websites, e-commerce platforms, and internal tools — built on
                  modern frameworks like Next.js, Laravel, and React. We focus
                  on clean architecture, performance, and maintainability so
                  your investment compounds over time rather than becoming
                  technical debt.
                </p>
                <p>
                  What sets us apart is how we work. We operate as an extension
                  of your team, not a vendor handing off a deliverable. From
                  discovery through launch and beyond, we stay closely aligned
                  with your goals and provide the strategic guidance needed to
                  make confident technology decisions.
                </p>
              </div>
              <ul role='list' className='mt-8 flex flex-wrap gap-x-8 gap-y-3'>
                <SocialLink href='https://x.com/jonericksonx' icon={XIcon}>
                  Follow on X
                </SocialLink>
                <SocialLink
                  href='https://github.com/jonerickson'
                  icon={GitHubIcon}
                >
                  GitHub
                </SocialLink>
                <SocialLink
                  href='https://linkedin.com/in/jonericksonx'
                  icon={LinkedInIcon}
                >
                  LinkedIn
                </SocialLink>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className='border-b border-border py-20 sm:py-28'>
        <Container>
          <Eyebrow>How we work</Eyebrow>
          <h2 className='text-gradient mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl'>
            The principles behind every build.
          </h2>
          <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title} hover className='flex flex-col p-6'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <h3 className='mt-6 text-lg font-medium tracking-tight text-foreground'>
                    {p.title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                    {p.body}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <Container className='py-20 sm:py-28'>
        <Card className='relative overflow-hidden px-6 py-16 text-center sm:px-8'>
          <GridBackground variant='dot' fade='radial' className='opacity-40' />
          <SparkGlow className='left-1/2 top-0 h-56 w-56 -translate-x-1/2' />
          <div className='relative'>
            <h2 className='text-gradient text-3xl font-semibold tracking-tight sm:text-4xl'>
              Let&apos;s build something that lasts.
            </h2>
            <p className='mx-auto mt-4 max-w-md text-muted-foreground'>
              See what that looks like in practice, or tell us what you&apos;re
              working on.
            </p>
            <div className='mt-8 flex flex-wrap justify-center gap-3'>
              <Button href='/contact' size='lg'>
                Start a project
                <ArrowRight className='h-4 w-4' />
              </Button>
              <Button href='/projects' variant='ghost' size='lg'>
                View our work
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
