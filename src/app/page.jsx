import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Testimonials } from '@/components/Testimonials';
import { Photos } from '@/components/Photos';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BentoCard } from '@/components/ui/BentoCard';
import { TerminalCard } from '@/components/ui/TerminalCard';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';
import { Card } from '@/components/ui/Card';
import {
  WebAppIllustration,
  InfraIllustration,
  DesignIllustration,
  SupportIllustration,
} from '@/components/ui/Illustrations';
import {
  Code2,
  Server,
  Paintbrush,
  LifeBuoy,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

export const metadata = {
  description:
    'A software engineering firm in Bozeman, Montana. We build custom web applications — SaaS platforms, internal tools, and the sites that front them — on Next.js, Laravel, and React.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Deschutes Design Group LLC — We build software on the web',
    description:
      'Custom web applications engineered on Next.js, Laravel, and React. Built to perform, built to scale, supported long after launch.',
    url: '/',
  },
};

const iconClass = 'h-5 w-5';

const capabilities = [
  {
    icon: <Code2 className={iconClass} />,
    title: 'Custom Web Applications',
    body: 'Full-stack products engineered on Next.js, Laravel, and React — built for performance, scalability, and a clean architecture that compounds in value instead of becoming technical debt.',
    illustration: (
      <WebAppIllustration className='absolute left-1/2 top-2 hidden w-[28rem] -translate-x-1/2 opacity-60 transition-opacity duration-500 [mask-image:radial-gradient(115%_120%_at_50%_28%,black_55%,transparent_88%)] group-hover:opacity-100 lg:block lg:w-[34rem]' />
    ),
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    icon: <Server className={iconClass} />,
    title: 'Platforms & Infrastructure',
    body: 'SaaS platforms and internal tools deployed to scale — AWS, serverless, and infrastructure-as-code. Foundations that hold up under real load.',
    illustration: (
      <InfraIllustration className='absolute left-1/2 top-4 hidden w-40 -translate-x-[42%] opacity-60 transition-opacity duration-500 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] group-hover:opacity-100 lg:block lg:w-44 xl:top-7 xl:-translate-x-1/2' />
    ),
    className: 'lg:col-span-1 lg:row-span-2',
  },
  {
    icon: <Paintbrush className={iconClass} />,
    title: 'Product & Web Design',
    body: 'Conversion-focused interfaces and brand-grade marketing sites — designed and engineered together.',
    illustration: (
      <DesignIllustration className='absolute right-3 top-3 hidden w-32 opacity-60 transition-opacity duration-500 [mask-image:radial-gradient(125%_125%_at_100%_0%,black_45%,transparent_82%)] group-hover:opacity-100 lg:block' />
    ),
    className: 'lg:col-span-1',
  },
  {
    icon: <LifeBuoy className={iconClass} />,
    title: 'Support & Partnership',
    body: 'Dedicated maintenance, hosting, and technical support. We operate as an extension of your team, long after launch.',
    illustration: (
      <SupportIllustration className='absolute -right-4 top-1/2 hidden w-56 -translate-y-1/2 opacity-60 transition-opacity duration-500 [mask-image:linear-gradient(to_left,black_45%,transparent)] group-hover:opacity-100 lg:block lg:w-64' />
    ),
    className: 'lg:col-span-2',
  },
];

const stats = [
  { value: '7', unit: '-figure', label: 'Revenue enabled for clients' },
  { value: '14', unit: '+', label: 'Products & projects shipped' },
  { value: '3', unit: '', label: 'Core stacks: Next.js · Laravel · React' },
  { value: 'Bozeman', unit: ', MT', label: 'Where we engineer' },
];

function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-border'>
      <GridBackground variant='dot' fade='radial' className='opacity-70' />
      <SparkGlow className='-top-40 left-1/4 h-96 w-96' />
      <Container className='relative py-20 sm:py-28 lg:py-32'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='max-w-xl'>
            <Eyebrow className='animate-fade-up'>Software engineering</Eyebrow>
            <h1 className='mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl'>
              <span className='text-gradient'>We build software</span>
              <br />
              on the <span className='text-gradient-spark'>web</span>
              <span className='text-gradient'>.</span>
            </h1>
            <p className='mt-6 animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              Deschutes Design Group is a software engineering firm building
              custom web applications — SaaS platforms, internal tools, and the
              sites that front them — on Next.js, Laravel, and React. Engineered
              to perform, built to scale, supported long after launch.
            </p>
            <div className='mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:160ms]'>
              <Button href='/contact' size='lg'>
                Start a project
                <ArrowRight className='h-4 w-4' />
              </Button>
              <Button href='/projects' variant='ghost' size='lg'>
                View our work
              </Button>
            </div>
          </div>

          <TerminalCard className='w-full animate-fade-up [animation-delay:240ms]' />
        </div>
      </Container>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className='border-b border-border py-16 sm:py-20'>
      <Container>
        <Eyebrow>Selected work</Eyebrow>
      </Container>
      <div className='mt-8'>
        <Photos />
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className='border-b border-border py-20 sm:py-28'>
      <Container>
        <SectionHeading
          eyebrow='Capabilities'
          title='What we build'
          description='We partner with startups and established companies to design, build, and scale the custom software their business runs on — from first commit to production and beyond.'
        />
        <div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(13rem,auto)] lg:grid-cols-3'>
          {capabilities.map((c) => (
            <BentoCard
              key={c.title}
              icon={c.icon}
              title={c.title}
              body={c.body}
              illustration={c.illustration}
              className={c.className}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  return (
    <section className='border-b border-border py-20'>
      <Container>
        <Eyebrow>By the numbers</Eyebrow>
        <dl className='mt-10 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-border'>
          {stats.map((s) => (
            <div key={s.label} className='lg:px-8 lg:first:pl-0'>
              <dt className='font-mono text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-5xl'>
                {s.value}
                <span className='text-spark'>{s.unit}</span>
              </dt>
              <dd className='mt-3 text-sm text-muted-foreground'>{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function TechStack() {
  return (
    <section className='border-b border-border py-20'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'>
          <SectionHeading
            eyebrow='The stack'
            title='Modern tools, chosen on purpose.'
          />
          <Button href='/technology' variant='ghost'>
            Explore the stack
            <ArrowUpRight className='h-4 w-4' />
          </Button>
        </div>
      </Container>
      <div className='mt-12'>
        <TechMarquee />
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <Container className='py-20 sm:py-28'>
      <Card className='relative overflow-hidden px-6 py-16 text-center sm:px-8 sm:py-20'>
        <GridBackground variant='dot' fade='radial' className='opacity-40' />
        <SparkGlow className='left-1/2 top-0 h-64 w-64 -translate-x-1/2' />
        <div className='relative'>
          <Eyebrow className='justify-center'>Let&apos;s talk</Eyebrow>
          <h2 className='text-gradient mx-auto mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl'>
            Ready to build something that lasts?
          </h2>
          <p className='mx-auto mt-4 max-w-md text-muted-foreground'>
            Have a product to build or a platform to scale? Tell us what
            you&apos;re working on — we&apos;ll tell you how we&apos;d engineer
            it.
          </p>
          <div className='mt-8 flex justify-center gap-3'>
            <Button href='/contact' size='lg'>
              Start a project
              <ArrowRight className='h-4 w-4' />
            </Button>
            <Button href='/support' variant='ghost' size='lg'>
              Get support
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Stats />
      <TechStack />
      <Container className='py-20 sm:py-28'>
        <Testimonials />
      </Container>
      <CallToAction />
    </>
  );
}
