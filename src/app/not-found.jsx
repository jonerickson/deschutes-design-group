import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container className='flex h-full items-center pt-16 sm:pt-32'>
      <div className='flex flex-col items-center text-center'>
        <p className='font-mono text-sm font-medium tabular-nums tracking-[0.2em] text-spark'>
          404
        </p>
        <h1 className='mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-4 text-base text-muted-foreground'>
          That route doesn’t exist — or hasn’t shipped yet.
        </p>
        <Button href='/' variant='secondary' className='mt-6'>
          Go back home
        </Button>
      </div>
    </Container>
  );
}
