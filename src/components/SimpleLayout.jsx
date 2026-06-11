import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export function SimpleLayout({ eyebrow, title, intro, children }) {
  return (
    <Container className='mt-16 sm:mt-32'>
      <header className='max-w-2xl'>
        {eyebrow && <Eyebrow className='mb-4'>{eyebrow}</Eyebrow>}
        <h1 className='text-4xl font-semibold tracking-tight text-foreground sm:text-5xl'>
          {title}
        </h1>
        <p className='mt-6 text-base leading-relaxed text-muted-foreground'>
          {intro}
        </p>
      </header>
      {children && <div className='mt-16 sm:mt-20'>{children}</div>}
    </Container>
  );
}
