import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-600'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-600' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

export const metadata = {
  title: 'About',
  description:
    'Deschutes Design Group is a software development and web design agency that partners with businesses to build high-performance digital products.',
};

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src={portraitImage}
              alt='Portrait image'
              sizes='(min-width: 1024px) 32rem, 20rem'
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
            We build the software that powers your business.
          </h1>
          <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
            <p>
              Deschutes Design Group is a software development and web design
              agency based in Central Oregon. We partner with startups,
              established companies, and organizations to design, build, and
              scale custom digital products that solve real business problems.
            </p>
            <p>
              Our work spans full-stack web applications, marketing websites,
              e-commerce platforms, and internal tools — built on modern
              frameworks like Next.js, Laravel, and React. We focus on clean
              architecture, performance, and maintainability so your investment
              compounds over time rather than becoming technical debt.
            </p>
            <p>
              What sets us apart is how we work. We operate as an extension of
              your team, not a vendor handing off a deliverable. From discovery
              through launch and beyond, we stay closely aligned with your goals
              and provide the strategic guidance needed to make confident
              technology decisions.
            </p>
            <p>
              Whether you need to ship a new product, modernize a legacy system,
              or establish a stronger digital presence, we bring the technical
              depth and design sensibility to make it happen. Take a look at our{' '}
              <Link
                href='/projects'
                className='font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-blue-600 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-blue-400'
              >
                projects
              </Link>{' '}
              to see what that looks like in practice.
            </p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul role='list'>
            <SocialLink href='http://x.com/jonericksonx' icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href='http://github.com/jonerickson'
              icon={GitHubIcon}
              className='mt-4'
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href='http://linkedin.com/in/jonericksonx'
              icon={LinkedInIcon}
              className='mt-4'
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href='mailto:info@deschutesdesigngroup.com'
              icon={MailIcon}
              className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
            >
              info@deschutesdesigngroup.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
