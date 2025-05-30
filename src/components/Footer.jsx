import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/Container';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className='transition hover:text-blue-600 dark:hover:text-blue-400'
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className='mt-32 flex-none'>
      <ContainerOuter>
        <div className='border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40'>
          <ContainerInner>
            <div className='flex flex-col items-center justify-between gap-6 md:items-start'>
              <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/articles'>Articles</NavLink>
                <NavLink href='/projects'>Projects</NavLink>
                <NavLink href='/technology'>Technology</NavLink>
                <NavLink
                  href='https://store.deschutesdesigngroup.com'
                  target='_blank'
                >
                  Store
                </NavLink>
                <NavLink
                  href='https://store.deschutesdesigngroup.com/affiliates'
                  target='_blank'
                >
                  Affiliate Program
                </NavLink>
                <NavLink
                  href='https://portal.deschutesdesigngroup.com'
                  target='_blank'
                >
                  Clients
                </NavLink>
                <NavLink href='/support'>Support</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
              </div>
              <p className='text-sm text-zinc-400 dark:text-zinc-500'>
                &copy; {new Date().getFullYear()} Deschutes Design Group LLC.
                All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
