import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
} from '@/components/SocialIcons';

function NavLink({ href, external, children }) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className='text-sm text-muted-foreground transition hover:text-foreground'
    >
      {children}
    </Link>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-5 w-5 fill-muted-foreground transition group-hover:fill-foreground' />
    </Link>
  );
}

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Work', href: '/projects' },
      { label: 'Technology', href: '/technology' },
      { label: 'About', href: '/about' },
      { label: 'Articles', href: '/articles' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'External',
    links: [
      {
        label: 'Client Portal',
        href: 'https://portal.deschutesdesigngroup.com',
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className='mt-32 flex-none border-t border-border'
      aria-label='Footer'
    >
      <ContainerOuter>
        <ContainerInner>
          <div className='py-16'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]'>
              <div className='max-w-xs'>
                <p className='text-base font-semibold tracking-tight text-foreground'>
                  Deschutes Design Group
                </p>
                <p className='mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                  We build software on the web
                </p>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Bozeman, Montana
                </p>
                <div className='mt-5 flex gap-5'>
                  <SocialLink
                    href='https://x.com/jonericksonx'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Follow on X'
                    icon={XIcon}
                  />
                  <SocialLink
                    href='https://github.com/jonerickson'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Follow on GitHub'
                    icon={GitHubIcon}
                  />
                  <SocialLink
                    href='https://linkedin.com/in/jonericksonx'
                    target='_blank'
                    rel='noopener noreferrer'
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

              {columns.map((column) => (
                <div key={column.heading}>
                  <h3 className='font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                    {column.heading}
                  </h3>
                  <ul className='mt-4 flex flex-col gap-3'>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <NavLink href={link.href} external={link.external}>
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='mt-14 border-t border-border pt-8'>
              <p className='text-sm text-muted-foreground'>
                &copy; {new Date().getFullYear()} Deschutes Design Group LLC.
                All rights reserved.
              </p>
            </div>
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  );
}
