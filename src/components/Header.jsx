'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import logoImageLight from '@/images/logo.png';
import logoImageDark from '@/images/logo_dark.png';

const navigation = [
  { label: 'Work', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
  {
    label: 'Clients',
    href: 'https://portal.deschutesdesigngroup.com',
    external: true,
  },
];

function CloseIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox='0 0 8 6' aria-hidden='true' {...props}>
      <path
        d='M1.75 1.75 4 4.25l2.25-2.5'
        fill='none'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z' />
      <path
        d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
        fill='none'
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function MobileNavItem({ href, external, children }) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className='block py-2 text-muted-foreground transition hover:text-foreground'
      >
        {children}
      </PopoverButton>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className='group flex items-center rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:border-spark/40'>
        Menu
        <ChevronDownIcon className='ml-3 h-auto w-2 stroke-muted-foreground group-hover:stroke-foreground' />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in'
      />
      <PopoverPanel
        focus
        transition
        className='fixed inset-x-4 top-8 z-50 origin-top rounded-2xl border border-border bg-popover p-8 ring-1 ring-border duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in'
      >
        <div className='flex flex-row-reverse items-center justify-between'>
          <PopoverButton aria-label='Close menu' className='-m-1 p-1'>
            <CloseIcon className='h-6 w-6 text-muted-foreground' />
          </PopoverButton>
          <h2 className='font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            Navigation
          </h2>
        </div>
        <nav className='mt-6'>
          <ul className='-my-2 divide-y divide-border text-base text-foreground'>
            <MobileNavItem href='/'>Home</MobileNavItem>
            {navigation.map((item) => (
              <MobileNavItem
                key={item.label}
                href={item.href}
                external={item.external}
              >
                {item.label}
              </MobileNavItem>
            ))}
            <MobileNavItem href='/support'>Support</MobileNavItem>
            <MobileNavItem href='/contact'>Contact</MobileNavItem>
          </ul>
          <PopoverButton as={Link} href='/contact' className='mt-6 block'>
            <Button className='w-full'>Start a project</Button>
          </PopoverButton>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

function NavItem({ href, external, children }) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        {children}
        {isActive && (
          <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-spark/0 via-spark/50 to-spark/0' />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav aria-label='Main' {...props}>
      <ul className='flex rounded-full border border-border bg-card/70 px-3 text-sm font-medium backdrop-blur'>
        {navigation.map((item) => (
          <NavItem key={item.label} href={item.href} external={item.external}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <button
      type='button'
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className='group rounded-full border border-border bg-card/70 px-3 py-2 backdrop-blur transition hover:border-spark/40'
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className='h-5 w-5 fill-muted stroke-muted-foreground transition group-hover:stroke-foreground dark:hidden' />
      <MoonIcon className='hidden h-5 w-5 fill-muted stroke-muted-foreground transition group-hover:stroke-foreground dark:block' />
    </button>
  );
}

function Logo({ className, ...props }) {
  return (
    <Link
      href='/'
      aria-label='Home'
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={logoImageLight}
        alt='Deschutes Design Group LLC'
        sizes='(max-width: 640px) 32rem, 44rem'
        className='h-8 w-auto object-contain sm:h-9 dark:hidden'
        priority
      />
      <Image
        src={logoImageDark}
        alt='Deschutes Design Group LLC'
        sizes='(max-width: 640px) 32rem, 44rem'
        className='hidden h-8 w-auto object-contain sm:h-9 dark:block'
        priority
      />
    </Link>
  );
}

export function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'>
      <Container className='w-full'>
        <div className='flex h-16 items-center gap-4'>
          <div className='flex flex-1 items-center'>
            <Logo />
          </div>
          <div className='hidden md:flex md:justify-center'>
            <DesktopNavigation className='pointer-events-auto' />
          </div>
          <div className='flex flex-1 items-center justify-end gap-3'>
            <ThemeToggle />
            <Button href='/contact' className='hidden sm:inline-flex'>
              Start a project
            </Button>
            <MobileNavigation className='pointer-events-auto md:hidden' />
          </div>
        </div>
      </Container>
    </header>
  );
}
