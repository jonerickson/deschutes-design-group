import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-12'>
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
      <div className='space-y-16'>
        <ToolsSection title='Workstation'>
          <Tool title='14" MacBook Pro M4 Pro, Apple Silicon, 24GB RAM (2024)'>
            We've been an Apple-based agency from day one. The M4 Pro delivers
            incredible performance for development, design, and deployment
            workflows. With 24GB of unified memory, we can run multiple Docker
            containers, dev servers, and design tools simultaneously without
            breaking a sweat.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Development'>
          <Tool title='PHP Storm'>
            Our primary IDE for PHP development. PhpStorm's intelligent code
            completion, deep Laravel integration, and powerful refactoring tools
            make it indispensable for building robust server-side applications.
          </Tool>
          <Tool title='Laravel Herd'>
            Local development has never been easier. Herd provides a native
            macOS environment with Nginx, PHP, MySQL, Redis, and more—all
            configured and ready to go in seconds. No Docker overhead, just pure
            speed.
          </Tool>
          <Tool title='Postman'>
            Our go-to tool for API development and testing. From building
            request collections to automating tests and generating
            documentation, Postman streamlines our entire API workflow.
          </Tool>
          <Tool title='TablePlus'>
            A beautifully designed database management tool that supports MySQL,
            PostgreSQL, Redis, and more. Fast, native, and intuitive—it's
            replaced every other database GUI we've tried.
          </Tool>
          <Tool title='Tinkerwell'>
            The ultimate PHP REPL and debugging companion. Run code directly in
            your application's context, test functions on the fly, and inspect
            data without writing throwaway test scripts.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Tailwind CSS'>
            The utility-first CSS framework that revolutionized our design
            workflow. Build modern, responsive interfaces faster than ever with
            its intuitive class-based approach—no context switching between
            files required.
          </Tool>
          <Tool title='Heroicons'>
            Beautiful, hand-crafted SVG icons designed by the makers of Tailwind
            CSS. Available in outline, solid, and mini variants, they integrate
            seamlessly into any design system and scale perfectly at any size.
          </Tool>
          <Tool title='Lucide'>
            An extensive open-source icon library with over 1,400 consistently
            designed icons. Community-driven and actively maintained, Lucide
            provides clean, customizable SVG icons that work beautifully with
            React, Vue, and beyond.
          </Tool>
          <Tool title='Shadcn UI'>
            Not a component library—it's better. Shadcn provides beautifully
            designed, accessible components built with Radix UI and Tailwind CSS
            that you copy directly into your project. Full ownership, zero
            dependencies, complete control.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Stacks'>
          <Tool title='Laravel'>
            The PHP framework that powers our most ambitious projects. With an
            elegant syntax, robust ecosystem, and world-class ORM, Laravel lets
            us ship features fast while maintaining clean, maintainable code
            that scales effortlessly.
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
        <ToolsSection title='Deployment'>
          <Tool title='Laravel Cloud / Forge / Vapor'>
            Laravel's deployment ecosystem transformed infrastructure management
            from a headache into a pleasure. Cloud for a hands-off solution,
            Forge for traditional servers, and Vapor for serverless—all with the
            same elegant DX we expect from Laravel.
          </Tool>
          <Tool title='AWS'>
            Our foundational cloud infrastructure provider. From EC2 and RDS to
            Lambda and SES, AWS gives us the reliability, scalability, and
            comprehensive service catalog we need for mission-critical
            applications.
          </Tool>
          <Tool title='Railway'>
            Deploy from Git in seconds with zero DevOps overhead. Railway's
            exceptional developer experience and instant preview environments
            make it perfect for rapid prototyping and production deployments
            alike.
          </Tool>
          <Tool title='Vercel'>
            The deployment platform built for the modern web. When building with
            Next.js or React, Vercel's edge network, instant rollbacks, and
            automatic preview deployments provide an unmatched developer
            experience.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
