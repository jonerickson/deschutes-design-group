import Image from 'next/image';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Card } from '@/components/ui/Card';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import logoTf from '@/images/logos/terraform.svg';
import logoExergy from '@/images/logos/exergy.svg';
import logoDiscord from '@/images/logos/discord.png';
import logoNitro from '@/images/logos/nitro.svg';
import logoPerscom from '@/images/logos/perscom.svg';
import logoCommunityHive from '@/images/logos/communityhive.svg';
import logoElios from '@/images/logos/elios.png';
import logoAws from '@/images/logos/aws.svg';
import logoWordpress from '@/images/logos/wordpress.svg';
import logoReactStudios from '@/images/logos/react-studios.svg';
import logoLaravel from '@/images/logos/laravel.svg';
import logoOpenApi from '@/images/logos/openapi.svg';
import logoVue from '@/images/logos/vue.svg';
import logoNext from '@/images/logos/nextjs.svg';

const projects = [
  {
    name: 'REACT Studios™',
    category: 'SaaS Platforms',
    description:
      'A feature-rich gaming community platform combining forums, subscriptions, content management, and e-commerce. Built with Laravel and React to deliver a blazing-fast, immersive member experience.',
    link: { href: 'https://reactstudios.com', label: 'reactstudios.com' },
    logo: logoReactStudios,
  },
  {
    name: 'Elios Fund',
    category: 'SaaS Platforms',
    description:
      'Specialized SaaS platform for solar energy project financing. Streamlines residential and commercial lending workflows with Laravel, deployed serverless on AWS Lambda for infinite scalability.',
    link: { href: 'https://eliosfund.com', label: 'eliosfund.com' },
    logo: logoElios,
  },
  {
    name: 'Nitro Energy',
    category: 'SaaS Platforms',
    description:
      'High-performance sales pipeline management SaaS for the solar industry. Built with Laravel and deployed on AWS, empowering sales teams to close deals faster with intelligent lead tracking and automation.',
    link: { href: 'https://nitroenergy.com', label: 'nitroenergy.com' },
    logo: logoNitro,
  },
  {
    name: 'PERSCOM Personnel Management System',
    category: 'SaaS Platforms',
    description:
      'Comprehensive personnel management SaaS designed for first-responder organizations. Built with the TALL stack and deployed on AWS via Laravel Forge, streamlining rosters, certifications, and operations.',
    link: { href: 'https://perscom.io', label: 'perscom.io' },
    logo: logoPerscom,
  },
  {
    name: 'Laravel Community',
    category: 'Open Source & Infrastructure',
    description:
      'A comprehensive open-source platform unifying e-commerce, user marketplace, community forums, and CMS into a single cohesive ecosystem. The all-in-one solution for building thriving online communities.',
    link: {
      href: 'https://github.com/jonerickson/laravel-community',
      label: 'github.com',
    },
    logo: logoLaravel,
  },
  {
    name: 'Deploy Laravel with EKS and Terraform',
    category: 'Open Source & Infrastructure',
    description:
      'Production-ready infrastructure-as-code template for deploying Laravel applications to AWS EKS. Includes Terraform modules, Helm charts, and CI/CD pipelines for enterprise-grade Kubernetes deployments.',
    link: {
      href: 'https://github.com/jonerickson/laravel-k8s-tf-eks',
      label: 'github.com',
    },
    logo: logoTf,
  },
  {
    name: 'API Playground',
    category: 'Open Source & Infrastructure',
    description:
      'Open-source reference implementations for building and deploying production-ready APIs. Explore patterns and best practices across Laravel, Express, FastAPI, and more.',
    link: {
      href: 'https://github.com/jonerickson/api-playground',
      label: 'github.com',
    },
    logo: logoOpenApi,
  },
  {
    name: 'WordPress Plugin Template',
    category: 'Open Source & Infrastructure',
    description:
      "Modern WordPress plugin starter kit powered by Roots Acorn. Brings Laravel's elegant architecture, dependency injection, and blade templating to WordPress plugin development.",
    link: {
      href: 'http://github.com/DeschutesDesignGroupLLC/wordpress-plugin-template',
      label: 'github.com',
    },
    logo: logoWordpress,
  },
  {
    name: 'Discord for Invision Community',
    category: 'Integrations',
    description:
      'Seamless Discord integration for Invision Community platforms. Sync users, roles, and channels automatically while driving engagement through real-time notifications and unified member experiences.',
    logo: logoDiscord,
  },
  {
    name: 'Community Hive WP Plugin',
    category: 'Integrations',
    description:
      'WordPress plugin enabling seamless integration with the Community Hive service. Sync users, content, and engagement metrics between your WordPress site and community platform effortlessly.',
    link: {
      href: 'https://github.com/DeschutesDesignGroupLLC/wordpress-community-hive',
      label: 'github.com',
    },
    logo: logoCommunityHive,
  },
  {
    name: 'AWS Simple Email Service for Invision Community',
    category: 'Integrations',
    description:
      'Enterprise-grade email integration for Invision Community platforms. Leverage AWS SES for reliable, scalable transactional emails with advanced deliverability, tracking, and cost optimization.',
    logo: logoAws,
  },
  {
    name: 'Exergy Health',
    category: 'SaaS Platforms',
    description:
      'A functional medicine platform delivering a 360° approach to personalized healthcare — finding and fixing the root cause. Built on Laravel with a Statamic-powered content engine and deployed on Laravel Cloud, pairing patient engagement with seamless content management.',
    link: { href: 'https://www.exergyhealth.org/', label: 'exergyhealth.org' },
    logo: logoExergy,
  },
  {
    name: 'Campbell Wallace Foundation',
    category: 'Sites',
    description:
      'Clean, accessible website for a 501(c)(3) nonprofit organization. Built with Next.js and deployed on Vercel, delivering lightning-fast performance and optimal SEO for mission-critical outreach.',
    link: { href: 'https://www.thecwf.org/', label: 'thecwf.org' },
    logo: logoNext,
  },
  {
    name: "Levi's Sawmill",
    category: 'Sites',
    description:
      'Modern, responsive landing page for a local sawmill business. Built with Laravel, Inertia.js, and Vue.js to showcase products and services with a smooth, app-like user experience.',
    link: { href: 'https://levissawmill.com', label: 'levissawmill.com' },
    logo: logoVue,
  },
];

const categoryOrder = [
  'SaaS Platforms',
  'Open Source & Infrastructure',
  'Integrations',
  'Sites',
];

export const metadata = {
  title: 'Work',
  description:
    'A look at the platforms, products, and tools we have engineered — SaaS applications, infrastructure, integrations, and the sites that front them. Real software, in production.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: "Software we've shipped — Deschutes Design Group LLC",
    description:
      'A look at the platforms, products, and tools we have engineered — SaaS applications, infrastructure, integrations, and the sites that front them. Real software, in production.',
    url: '/projects',
  },
};

function ProjectCard({ project }) {
  const isSvg =
    typeof project.logo === 'object' &&
    typeof project.logo.src === 'string' &&
    project.logo.src.endsWith('.svg');

  return (
    <li>
      <Card hover className='group flex h-full flex-col p-6'>
        <div className='flex h-12 w-auto items-center justify-start'>
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            className='h-8 w-auto'
            sizes='32px'
            {...(isSvg ? { unoptimized: true } : {})}
          />
        </div>
        <h3 className='mt-6 text-base font-semibold tracking-tight text-foreground'>
          {project.link ? (
            <a
              href={project.link.href}
              target='_blank'
              rel='noreferrer'
              className='transition-colors hover:text-spark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className='mt-2 flex-1 text-sm leading-relaxed text-muted-foreground'>
          {project.description}
        </p>
        {project.link && (
          <p className='mt-6 flex items-center font-mono text-sm text-muted-foreground transition-colors group-hover:text-spark'>
            <span>{project.link.label}</span>
            <ArrowUpRight className='ml-1 h-4 w-4 flex-none' />
          </p>
        )}
      </Card>
    </li>
  );
}

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 left-1/3 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='max-w-3xl'>
            <Eyebrow className='animate-fade-up'>Selected work</Eyebrow>
            <h1 className='mt-6 text-5xl font-semibold tracking-tight sm:text-6xl'>
              <span className='text-gradient'>Software we&apos;ve </span>
              <span className='text-gradient-spark'>shipped</span>
              <span className='text-gradient'>.</span>
            </h1>
            <p className='mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              A look at the platforms, products, and tools we&apos;ve engineered
              — SaaS applications, infrastructure, integrations, and the sites
              that front them. Real software, in production.
            </p>
          </div>
        </Container>
      </section>

      {/* Grouped projects */}
      <Container className='py-20 sm:py-24'>
        <div className='space-y-20'>
          {categoryOrder.map((category) => {
            const items = projects.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return (
              <section key={category}>
                <div className='flex items-baseline justify-between'>
                  <Eyebrow>{category}</Eyebrow>
                  <span className='font-mono text-xs tabular-nums text-muted-foreground'>
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul
                  role='list'
                  className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                >
                  {items.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>

      {/* CTA */}
      <Container className='pb-24'>
        <Card className='relative overflow-hidden px-6 py-14 text-center sm:px-8'>
          <SparkGlow className='left-1/2 top-0 h-56 w-56 -translate-x-1/2' />
          <div className='relative'>
            <h2 className='text-gradient text-3xl font-semibold tracking-tight sm:text-4xl'>
              Your product could be next.
            </h2>
            <div className='mt-6 flex justify-center'>
              <Button href='/contact' size='lg'>
                Start a project
                <ArrowRight className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
