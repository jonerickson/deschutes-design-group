import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function Layout({ children }) {
  return (
    <div className='relative flex min-h-full w-full flex-col bg-background'>
      {/* full-bleed dark canvas with a single, faint top glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-x-0 top-0 z-0 h-[40rem] bg-[radial-gradient(60rem_30rem_at_50%_-10rem,hsl(var(--spark)/0.08),transparent)]'
      />
      <div className='relative z-10 flex w-full flex-col'>
        <Header />
        <main className='flex-auto'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
