'use client';

import { useEffect, useRef, useState } from 'react';
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
import logoImageLight from '@/images/logo.png';
import logoImageDark from '@/images/logo_dark.png';

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

function MobileNavItem({ href, children }) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className='block py-2'>
        {children}
      </PopoverButton>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        Menu
        <ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80'
      />
      <PopoverPanel
        focus
        transition
        className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800'
      >
        <div className='flex flex-row-reverse items-center justify-between'>
          <PopoverButton aria-label='Close menu' className='-m-1 p-1'>
            <CloseIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
          </PopoverButton>
          <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
            Navigation
          </h2>
        </div>
        <nav className='mt-6'>
          <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
            <MobileNavItem href='/about'>About</MobileNavItem>
            <MobileNavItem href='/articles'>Articles</MobileNavItem>
            <MobileNavItem href='/projects'>Projects</MobileNavItem>
            <MobileNavItem href='/technology'>Technology</MobileNavItem>
            <MobileNavItem
              href='https://portal.deschutesdesigngroup.com'
              target='_blank'
            >
              Clients
            </MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

function NavItem({ href, children }) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'hover:text-blue-600 dark:hover:text-blue-400'
        )}
      >
        {children}
        {isActive && (
          <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0' />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/articles'>Articles</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        <NavItem href='/technology'>Technology</NavItem>
        <NavItem href='https://portal.deschutesdesigngroup.com' target='_blank'>
          Clients
        </NavItem>
      </ul>
    </nav>
  );
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type='button'
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className='h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-blue-50 [@media(prefers-color-scheme:dark)]:stroke-blue-600 [@media(prefers-color-scheme:dark)]:group-hover:fill-blue-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-600' />
      <MoonIcon className='hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-blue-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-blue-600' />
    </button>
  );
}

function clamp(number, a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function Logo({ className, ...props }) {
  let { resolvedTheme, setTheme } = useTheme();

  return (
    <Link
      href='/'
      aria-label='Home'
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      {resolvedTheme === 'light' ? (
        <Image
          src={logoImageLight}
          alt='Deschutes Design Group LLC'
          sizes='(max-width: 640px) 32rem, 44rem'
          className={clsx('h-8 w-auto object-contain sm:h-10')}
          priority
        />
      ) : (
        <Image
          src={logoImageDark}
          alt='Deschutes Design Group LLC'
          sizes='(max-width: 640px) 32rem, 44rem'
          className={clsx('h-8 w-auto object-contain sm:h-10')}
          priority
        />
      )}
    </Link>
  );
}

export function Header() {
  let isHomePage = usePathname() === '/';

  return (
    <>
      <header className='pointer-events-none relative z-50 flex flex-none flex-col'>
        {isHomePage && (
          <>
            <div className='order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]' />
            <Container className='top-0 order-last -mb-3 pt-3'>
              <Logo className='block h-6 w-auto origin-left sm:h-10' />
            </Container>
          </>
        )}
        <div className='top-0 z-10 h-16 pt-6'>
          <Container className='w-full'>
            <div className='relative flex gap-4'>
              <div className='flex items-center sm:flex-1'>
                {!isHomePage && <Logo />}
              </div>
              <div className='flex flex-1 justify-end md:justify-center'>
                <MobileNavigation className='pointer-events-auto md:hidden' />
                <DesktopNavigation className='pointer-events-auto hidden md:block' />
              </div>
              <div className='flex justify-end md:flex-1'>
                <div className='pointer-events-auto'>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div className='flex-none' />}
    </>
  );
}
