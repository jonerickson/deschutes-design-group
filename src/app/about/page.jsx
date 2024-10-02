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
  description: 'We are Deschutes Design Group LLC.',
};

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src={portraitImage}
              alt=''
              sizes='(min-width: 1024px) 32rem, 20rem'
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
            We are Deschutes Design Group LLC. We love web development.
          </h1>
          <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
            <p>
              We’re passionate about creating standout web applications and
              innovative design ideas that truly resonate. Our friendly team is
              here to provide personalized services that will help your business
              shine in a competitive landscape.
            </p>
            <p>
              From the very first idea to the final touches, we build powerful,
              adaptable web applications that are as unique as you are. By using
              the latest technologies and best practices, we ensure your users
              enjoy a seamless experience while helping your business thrive.
              We’re excited to turn your vision into reality!
            </p>
            <p>
              Our team is also dedicated to helping you refine your online
              presence. We’ll dive into your goals, review your current
              strategies, and share tailored insights to elevate your digital
              impact. With our support, you can achieve lasting growth and make
              a meaningful impression online.
            </p>
            <p>
              We invite you to explore our projects page, where you can find
              inspiration and see some of our latest work. Each project reflects
              our commitment to creativity and excellence, showcasing how we
              bring unique visions to life. Take a look and imagine what we
              could create together!
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
