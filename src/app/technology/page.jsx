import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: 'Uses',
  description:
    'Software we use, gadgets we love, and other things we recommend.',
};

export default function Uses() {
  return (
    <SimpleLayout
      title='Software we use, technology we love, and other things we recommend.'
      intro='As a design agency, we work with clients who have diverse needs for each project. Here are some of the technologies we often rely on when kicking off a new project.'
    >
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title='16” MacBook Pro, Intel, 32GB RAM (2019)'>
            We have been an Apple-based design agency from the start. Apple
            offers a reliable solution that makes building powerful web
            applications a breeze.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Development'>
          <Tool title='PHP Storm'>
            Most of our work is done using the PHP language. The IDE from
            IntelliJ is a one-stop shop for everything PHP.
          </Tool>
          <Tool title='Laravel Herd'>
            Local development doesn&apos;t get any easier than with Laravel
            Herd. You can easily spin up your projects with Nginx, MySQL, Redis,
            and a plethora of other services.
          </Tool>
          <Tool title='TablePlus'>
            TablePlus is the best tool available for managing your database
            infrastructure.
          </Tool>
          <Tool title='Postman'>
            We love working with API&apos;s and Postman provides us with every
            tool we need to build and develop a robust API.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Tailwind CSS'>
            This utility-first framework offers the cleanest CSS API for rapidly
            developing and designing web interfaces.
          </Tool>
          <Tool title='Heroicons'>
            If you’re looking for clean, fresh, and developer-friendly icons,
            look no further than Heroicons, created by the makers of Tailwind
            CSS.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Stacks'>
          <Tool title='Laravel'>
            Our go-to solution is Laravel—the most popular open-source PHP
            framework. It allows us to rapidly scale and build projects without
            compromising on performance and features.
          </Tool>
          <Tool title='Livewire'>
            Livewire enables us to build JavaScript-like UIs without the
            overhead of using a frontend framework like Vue.js or React. It
            integrates seamlessly into the Blade templating system and offers
            component-based UIs.
          </Tool>
          <Tool title='Inertia.js / Vue.js / React'>
            If our client prefers a notable frontend framework such as Vue.js or
            React, there’s no better option to connect it with Laravel than
            Inertia.js. This allows us to rapidly build a backend that we know
            and love while leveraging the features of a powerful frontend
            framework.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Deployment'>
          <Tool title='Laravel Forge / Vapor'>
            Before Forge and Vapor, deploying infrastructure was a nightmare.
            Laravel offers these bespoke one-click deployment solutions that are
            a no-brainer.
          </Tool>
          <Tool title='AWS'>
            We firmly rely on AWS as our cloud provider. It has consistently
            proven reliable and never failed us.
          </Tool>
          <Tool title='Vercel'>
            When shipping a JS-powered project such as Next.js or Remix, we turn
            to Vercel for their ease-of-deployment capabilities and
            developer-friendly experience.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
