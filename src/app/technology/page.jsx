import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Card } from '@/components/ui/Card';
import { GridBackground, SparkGlow } from '@/components/ui/GridBackground';

function ToolsSection({ title, children, divided = true }) {
  return (
    <section
      className={`grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-4 ${
        divided ? 'border-t border-border pt-12' : ''
      }`}
    >
      <h2 className='font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
        <span className='text-spark'>{'// '}</span>
        {title}
      </h2>
      <ul role='list' className='space-y-4 md:col-span-3'>
        {children}
      </ul>
    </section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as='li' hover className='p-6'>
      {href ? (
        <h3 className='text-base font-semibold tracking-tight text-foreground'>
          <a
            href={href}
            className='transition-colors duration-200 hover:text-spark'
          >
            {title}
          </a>
        </h3>
      ) : (
        <h3 className='text-base font-semibold tracking-tight text-foreground'>
          {title}
        </h3>
      )}
      <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
        {children}
      </p>
    </Card>
  );
}

export const metadata = {
  title: 'Technology',
  description:
    'Software we use, gadgets we love, and other things we recommend.',
  alternates: { canonical: '/technology' },
  openGraph: {
    title: 'Technology — Deschutes Design Group LLC',
    description:
      'Software we use, gadgets we love, and other things we recommend.',
    url: '/technology',
  },
};

export default function Technology() {
  return (
    <>
      <section className='relative overflow-hidden border-b border-border'>
        <GridBackground variant='dot' fade='radial' className='opacity-70' />
        <SparkGlow className='-top-40 left-1/4 h-96 w-96' />
        <Container className='relative py-20 sm:py-28'>
          <div className='max-w-2xl'>
            <Eyebrow className='animate-fade-up'>The stack</Eyebrow>
            <h1 className='mt-6 text-4xl font-semibold tracking-tight sm:text-5xl'>
              <span className='text-gradient'>
                Software we use, technology we love, and other things we
              </span>{' '}
              <span className='text-gradient-spark'>recommend</span>
              <span className='text-gradient'>.</span>
            </h1>
            <p className='mt-6 animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:80ms]'>
              We&apos;re an engineering firm, and our tools are chosen on
              purpose. Here&apos;s the stack we reach for when we start a new
              build — and why.
            </p>
          </div>
        </Container>
      </section>

      <Container className='py-20 sm:py-28'>
        <div className='space-y-16'>
          <ToolsSection title='Workstation' divided={false}>
            <Tool title='14" MacBook Pro M4 Pro, Apple Silicon, 24GB RAM (2024)'>
              We&apos;ve been an Apple-based agency from day one. The M4 Pro
              delivers incredible performance for development, design, and
              deployment workflows. With 24GB of unified memory, we can run
              multiple Docker containers, dev servers, and design tools
              simultaneously without breaking a sweat.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Development'>
            <Tool title='PHP Storm'>
              Our primary IDE for PHP development. PhpStorm&apos;s intelligent
              code completion, deep Laravel integration, and powerful
              refactoring tools make it indispensable for building robust
              server-side applications.
            </Tool>
            <Tool title='Laravel Herd'>
              Local development has never been easier. Herd provides a native
              macOS environment with Nginx, PHP, MySQL, Redis, and more—all
              configured and ready to go in seconds. No Docker overhead, just
              pure speed.
            </Tool>
            <Tool title='Postman'>
              Our go-to tool for API development and testing. From building
              request collections to automating tests and generating
              documentation, Postman streamlines our entire API workflow.
            </Tool>
            <Tool title='TablePlus'>
              A beautifully designed database management tool that supports
              MySQL, PostgreSQL, Redis, and more. Fast, native, and intuitive—it
              has replaced every other database GUI we&apos;ve tried.
            </Tool>
            <Tool title='Tinkerwell'>
              The ultimate PHP REPL and debugging companion. Run code directly
              in your application&apos;s context, test functions on the fly, and
              inspect data without writing throwaway test scripts.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Design'>
            <Tool title='Tailwind CSS'>
              The utility-first CSS framework that revolutionized our design
              workflow. Build modern, responsive interfaces faster than ever
              with its intuitive class-based approach—no context switching
              between files required.
            </Tool>
            <Tool title='Heroicons'>
              Beautiful, hand-crafted SVG icons designed by the makers of
              Tailwind CSS. Available in outline, solid, and mini variants, they
              integrate seamlessly into any design system and scale perfectly at
              any size.
            </Tool>
            <Tool title='Lucide'>
              An extensive open-source icon library with over 1,400 consistently
              designed icons. Community-driven and actively maintained, Lucide
              provides clean, customizable SVG icons that work beautifully with
              React, Vue, and beyond.
            </Tool>
            <Tool title='Shadcn UI'>
              Not a component library—it&apos;s better. Shadcn provides
              beautifully designed, accessible components built with Radix UI
              and Tailwind CSS that you copy directly into your project. Full
              ownership, zero dependencies, complete control.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Stacks'>
            <Tool title='Laravel'>
              The PHP framework that powers our most ambitious projects. With an
              elegant syntax, robust ecosystem, and world-class ORM, Laravel
              lets us ship features fast while maintaining clean, maintainable
              code that scales effortlessly.
            </Tool>
            <Tool title='Tailwind / Alpine.js / Livewire (TALL)'>
              The perfect stack for reactive, modern UIs without the JavaScript
              framework overhead. Livewire brings the power of component-based
              architecture to the server side, while Alpine adds just the right
              amount of client-side interactivity.
            </Tool>
            <Tool title='Inertia.js / Vue.js / React (VILT/RILT)'>
              When projects demand a full-featured frontend framework, Inertia
              bridges Laravel and React/Vue seamlessly. Build SPAs with familiar
              routing, validation, and middleware on the backend—no API layer
              required.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Databases'>
            <Tool title='PostgreSQL'>
              Our default relational database for new builds. Postgres pairs
              rock-solid reliability with advanced features—JSONB, full-text
              search, and powerful indexing—that scale gracefully from prototype
              to production.
            </Tool>
            <Tool title='MySQL'>
              The world&apos;s most popular open-source database. We reach for
              MySQL when a project calls for a battle-tested, widely-supported
              datastore—powering everything from content platforms to
              high-traffic SaaS applications.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Deployment'>
            <Tool title='Laravel Cloud / Forge / Vapor'>
              Laravel&apos;s deployment ecosystem transformed infrastructure
              management from a headache into a pleasure. Cloud for a hands-off
              solution, Forge for traditional servers, and Vapor for
              serverless—all with the same elegant DX we expect from Laravel.
            </Tool>
            <Tool title='AWS'>
              Our foundational cloud infrastructure provider. From EC2 and RDS
              to Lambda and SES, AWS gives us the reliability, scalability, and
              comprehensive service catalog we need for mission-critical
              applications.
            </Tool>
            <Tool title='Railway'>
              Deploy from Git in seconds with zero DevOps overhead.
              Railway&apos;s exceptional developer experience and instant
              preview environments make it perfect for rapid prototyping and
              production deployments alike.
            </Tool>
            <Tool title='Vercel'>
              The deployment platform built for the modern web. When building
              with Next.js or React, Vercel&apos;s edge network, instant
              rollbacks, and automatic preview deployments provide an unmatched
              developer experience.
            </Tool>
            <Tool title='Kubernetes'>
              When an application needs to scale horizontally and self-heal, we
              deploy to Kubernetes. Container orchestration gives us rolling
              releases, autoscaling, and resilience for the most demanding
              production workloads.
            </Tool>
            <Tool title='Helm'>
              The package manager for Kubernetes. We template and version our
              cluster deployments with Helm charts, making complex,
              multi-service releases repeatable, reviewable, and easy to roll
              back.
            </Tool>
            <Tool title='Google Cloud Platform'>
              A powerful complement to AWS. We tap GCP for its best-in-class
              data tooling, global networking, and managed Kubernetes (GKE) when
              a project&apos;s requirements call for it.
            </Tool>
          </ToolsSection>
        </div>
      </Container>
    </>
  );
}
