import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoTf from '@/images/logos/terraform.svg';
import logoExergy from '@/images/logos/exergy.png';
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
    name: 'Laravel Community',
    description:
      'A comprehensive open-source platform unifying e-commerce, user marketplace, community forums, and CMS into a single cohesive ecosystem. The all-in-one solution for building thriving online communities.',
    link: {
      href: 'https://github.com/jonerickson/laravel-community',
      label: 'github.com',
    },
    logo: logoLaravel,
  },
  {
    name: 'REACT Studios™',
    description:
      'A feature-rich gaming community platform combining forums, subscriptions, content management, and e-commerce. Built with Laravel and React to deliver a blazing-fast, immersive member experience.',
    link: {
      href: 'https://reactstudios.com',
      label: 'reactstudios.com',
    },
    logo: logoReactStudios,
  },
  {
    name: 'API Playground',
    description:
      'Open-source reference implementations for building and deploying production-ready APIs. Explore patterns and best practices across Laravel, Express, FastAPI, and more.',
    link: {
      href: 'https://github.com/jonerickson/api-playground',
      label: 'github.com',
    },
    logo: logoOpenApi,
  },
  {
    name: 'Deploy Laravel with EKS and Terraform',
    description:
      'Production-ready infrastructure-as-code template for deploying Laravel applications to AWS EKS. Includes Terraform modules, Helm charts, and CI/CD pipelines for enterprise-grade Kubernetes deployments.',
    link: {
      href: 'https://github.com/jonerickson/laravel-k8s-tf-eks',
      label: 'github.com',
    },
    logo: logoTf,
  },
  {
    name: 'Exergy Health',
    description:
      'Modern medical practice website delivering a 360° approach to personalized healthcare. Built with Laravel and Statamic CMS, deployed on Laravel Cloud for seamless content management and patient engagement.',
    link: {
      href: 'https://www.exergyhealth.org/',
      label: 'exergyhealth.org',
    },
    logo: logoExergy,
  },
  {
    name: 'Campbell Wallace Foundation',
    description:
      'Clean, accessible website for a 501(c)(3) nonprofit organization. Built with Next.js and deployed on Vercel, delivering lightning-fast performance and optimal SEO for mission-critical outreach.',
    link: {
      href: 'https://www.thecwf.org/',
      label: 'thecwf.org',
    },
    logo: logoNext,
  },
  {
    name: 'Discord for Invision Community',
    description:
      'Seamless Discord integration for Invision Community platforms. Sync users, roles, and channels automatically while driving engagement through real-time notifications and unified member experiences.',
    link: {
      href: 'https://store.deschutesdesigngroup.com/buy/eaaa476c-201a-438a-8896-61898ae6fab1',
      label: 'store.deschutesdesigngroup.com',
    },
    logo: logoDiscord,
  },
  {
    name: 'Elios Fund',
    description:
      'Specialized SaaS platform for solar energy project financing. Streamlines residential and commercial lending workflows with Laravel, deployed serverless on AWS Lambda for infinite scalability.',
    link: { href: 'https://eliosfund.com', label: 'eliosfund.com' },
    logo: logoElios,
  },
  {
    name: 'Nitro Energy',
    description:
      'High-performance sales pipeline management SaaS for the solar industry. Built with Laravel and deployed on AWS, empowering sales teams to close deals faster with intelligent lead tracking and automation.',
    link: { href: 'https://nitroenergy.com', label: 'nitroenergy.com' },
    logo: logoNitro,
  },
  {
    name: "Levi's Sawmill",
    description:
      'Modern, responsive landing page for a local sawmill business. Built with Laravel, Inertia.js, and Vue.js to showcase products and services with a smooth, app-like user experience.',
    link: { href: 'https://levissawmill.com', label: 'levissawmill.com' },
    logo: logoVue,
  },
  {
    name: 'PERSCOM Personnel Management System',
    description:
      'Comprehensive personnel management SaaS designed for first-responder organizations. Built with the TALL stack and deployed on AWS via Laravel Forge, streamlining rosters, certifications, and operations.',
    link: { href: 'https://perscom.io', label: 'perscom.io' },
    logo: logoPerscom,
  },
  {
    name: 'Community Hive WP Plugin',
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
    description:
      'Enterprise-grade email integration for Invision Community platforms. Leverage AWS SES for reliable, scalable transactional emails with advanced deliverability, tracking, and cost optimization.',
    link: {
      href: 'https://store.deschutesdesigngroup.com/buy/0182a1f0-48ea-4438-9b40-293441be9f85',
      label: 'store.deschutesdesigngroup.com',
    },
    logo: logoAws,
  },
  {
    name: 'Wordpress Plugin Template',
    description:
      "Modern WordPress plugin starter kit powered by Roots Acorn. Brings Laravel's elegant architecture, dependency injection, and blade templating to WordPress plugin development.",
    link: {
      href: 'http://github.com/DeschutesDesignGroupLLC/wordpress-plugin-template',
      label: 'github.com',
    },
    logo: logoWordpress,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
        fill='currentColor'
      />
    </svg>
  );
}

export const metadata = {
  title: 'Projects',
  description: 'Our proudest, most recent work.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Some clients we've helped and projects we've developed."
      intro='We have a diverse array of client markets, each with its own unique technology needs. Our goal is simple: we want to match the right technology to the right job, helping your business thrive and succeed.'
    >
      <ul
        role='list'
        className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
      >
        {projects.map((project) => {
          return (
            <Card as='li' key={project.name}>
              <div className='relative z-10 flex h-12 w-auto items-center justify-center'>
                {project.logoType !== undefined &&
                project.logoType === 'icon' ? (
                  <project.logo className='size-10 text-zinc-700 dark:text-zinc-100' />
                ) : (
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className='h-8 w-auto'
                    unoptimized
                  />
                )}
              </div>
              <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                <Card.Link href={project.link.href} target='_blank'>
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-600 dark:text-zinc-200'>
                <LinkIcon className='h-6 w-6 flex-none' target='_blank' />
                <span className='ml-2'>{project.link.label}</span>
              </p>
            </Card>
          );
        })}
      </ul>
    </SimpleLayout>
  );
}
