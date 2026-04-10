import Link from 'next/link';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
} from '@/components/SocialIcons';
import { Testimonials } from '@/components/Testimonials';
import { Photos } from '@/components/Photos';
import {
  Code2,
  Paintbrush,
  ShoppingCart,
  LifeBuoy,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description:
      'Full-stack web applications built with modern frameworks like Next.js, Laravel, and React — engineered for performance, scalability, and long-term maintainability.',
    color: 'blue',
  },
  {
    icon: Paintbrush,
    title: 'Web Design',
    description:
      'Thoughtful, conversion-focused design that reflects your brand identity. From landing pages to full marketing sites, we create experiences that leave an impression.',
    color: 'violet',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Online stores and digital storefronts powered by platforms like Shopify and custom solutions — complete with payment processing, inventory, and analytics.',
    color: 'amber',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description:
      'Dedicated maintenance, hosting, and technical support to keep your applications running smoothly. We stay with you long after launch.',
    color: 'emerald',
  },
];

const colorMap = {
  blue: {
    icon: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-400/10',
    ring: 'ring-blue-500/20 dark:ring-blue-400/20',
    glow: 'group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-400/10',
    border:
      'group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30',
  },
  violet: {
    icon: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500/10 dark:bg-violet-400/10',
    ring: 'ring-violet-500/20 dark:ring-violet-400/20',
    glow: 'group-hover:shadow-violet-500/10 dark:group-hover:shadow-violet-400/10',
    border:
      'group-hover:border-violet-500/30 dark:group-hover:border-violet-400/30',
  },
  amber: {
    icon: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10 dark:bg-amber-400/10',
    ring: 'ring-amber-500/20 dark:ring-amber-400/20',
    glow: 'group-hover:shadow-amber-500/10 dark:group-hover:shadow-amber-400/10',
    border:
      'group-hover:border-amber-500/30 dark:group-hover:border-amber-400/30',
  },
  emerald: {
    icon: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
    ring: 'ring-emerald-500/20 dark:ring-emerald-400/20',
    glow: 'group-hover:shadow-emerald-500/10 dark:group-hover:shadow-emerald-400/10',
    border:
      'group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30',
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  const colors = colorMap[service.color];
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-700/40 dark:bg-zinc-800/50 ${colors.glow} ${colors.border}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ring-1 ${colors.ring} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className={`h-6 w-6 ${colors.icon}`} />
      </div>
      <h3 className='mt-5 text-base font-semibold text-zinc-900 dark:text-zinc-100'>
        {service.title}
      </h3>
      <p className='mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
        {service.description}
      </p>
    </div>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function StartProject() {
  return (
    <Link
      href='/contact'
      className='group relative block overflow-hidden rounded-3xl bg-zinc-900 p-px dark:bg-white/5'
    >
      {/* Animated gradient border */}
      <div
        className='absolute inset-0 animate-gradient-rotate rounded-3xl'
        style={{
          background:
            'conic-gradient(from var(--gradient-angle, 0deg), #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Glow effect */}
      <div className='absolute -inset-1 animate-pulse-glow rounded-3xl bg-blue-500/20 blur-xl' />

      {/* Content */}
      <div className='relative flex flex-col items-center gap-6 rounded-3xl bg-zinc-900 px-8 py-14 text-center dark:bg-zinc-900'>
        <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/25'>
          <Sparkles className='h-7 w-7 text-blue-400' />
        </div>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Let&apos;s build something great
          </h2>
          <p className='mx-auto mt-3 max-w-md text-base text-zinc-400'>
            Have a vision? We turn ambitious ideas into polished,
            high&#8209;performance digital products.
          </p>
        </div>
        <div className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all group-hover:gap-4 group-hover:bg-blue-500 group-hover:shadow-blue-500/40'>
          Start your project
          <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
            Software development and web application design agency
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            We're passionate about creating standout web applications and
            innovative web design ideas that truly resonate. Our friendly team
            is here to provide personalized services that will help your
            business shine in a competitive landscape.
          </p>
          <div className='mt-6 flex flex-row gap-2'>
            <Button href='/contact'>Contact us</Button>
            <Button variant='secondary' href='/support'>
              Get support
            </Button>
          </div>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://x.com/jonericksonx'
              aria-label='Follow on X'
              icon={XIcon}
            />
            <SocialLink
              href='https://github.com/jonerickson'
              aria-label='Follow on GitHub'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://linkedin.com/in/jonericksonx'
              aria-label='Follow on LinkedIn'
              icon={LinkedInIcon}
            />
            <SocialLink
              href='mailto:info@deschutesdesigngroup.com'
              aria-label='Contact us by email'
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />

      {/* Services + CTA band */}
      <div className='mt-20 border-y border-zinc-200 bg-zinc-50/50 py-20 sm:mt-24 sm:py-28 dark:border-zinc-700/40 dark:bg-zinc-800/20'>
        <Container>
          <div className='mx-auto max-w-xl lg:max-w-none'>
            <div className='max-w-2xl border-l-2 border-blue-500 pl-5 sm:pl-6'>
              <h2 className='text-base/7 font-semibold text-blue-600'>
                Services
              </h2>
              <h3 className='mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                What we do
              </h3>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                We partner with businesses of all sizes to design, build, and
                maintain digital products that drive real results.
              </p>
            </div>
            <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2'>
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </Container>

        <Container className='mt-16 sm:mt-20'>
          <StartProject />
        </Container>
      </div>

      <Container>
        <Testimonials />
      </Container>
    </>
  );
}
