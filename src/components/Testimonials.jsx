import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const featuredTestimonial = {
  body: 'Jon Erickson and the team at Deschutes Design Group built the foundational platform that propelled REACT Studios into a successful future. Our complex operations required a highly robust web application built on the Laravel framework, and Jon delivered an incredible custom solution. His exceptional technical skills directly enabled us to scale our infrastructure and achieve a 7-figure revenue. I cannot recommend Jon highly enough for any business seeking top-tier web development.',
  author: {
    name: 'David',
    source: 'REACT Studios',
    imageUrl:
      'https://ui-avatars.com/api/?name=David&rounded=true&background=f4f4f5&color=a1a1aa',
  },
};

const testimonials = [
  {
    body: 'Working with Jon was exceptional. He addressed the issue, asked the right questions and demonstrated mastery of this space. Cannot recommend him highly enough.',
    author: {
      name: 'Hugh',
      source: 'SAML Single Sign-On (SSO)',
      imageUrl:
        'https://ui-avatars.com/api/?name=Hugh&rounded=true&background=f4f4f5&color=a1a1aa',
    },
  },
  {
    body: "Jon is an incredible software developer! He delivered exactly what I wanted with exceptional expertise and exceeded all my expectations. Working with him was a pleasure—he was quick, polite, and extremely cooperative. Honestly, I couldn't have found a better person for the job...",
    author: {
      name: 'Abdul',
      source: 'Custom Web App',
      imageUrl:
        'https://ui-avatars.com/api/?name=Abdul&rounded=true&background=f4f4f5&color=a1a1aa',
    },
  },
  {
    body: 'It was perfect to work with this company/seller. Great communication, advices, work and the most importantly - the result. Definitely recommended!',
    author: {
      name: 'Walt',
      source: 'Configure Web Server',
      imageUrl:
        'https://ui-avatars.com/api/?name=Walt&rounded=true&background=f4f4f5&color=a1a1aa',
    },
  },
];

export function Testimonials() {
  return (
    <div className='relative isolate'>
      <SectionHeading
        eyebrow='Proof'
        title='Trusted to build what matters.'
        description="We take on a focused set of clients and treat every platform like it's our own. Here's what partners say about building with us."
      />

      <div className='mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2'>
        {/* Featured testimonial — full width */}
        <figure className='relative col-span-1 overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-spark/40 lg:col-span-2'>
          <div className='absolute right-6 top-6 sm:right-10 sm:top-10'>
            <Quote className='h-12 w-12 text-spark/10' />
          </div>
          <div className='relative p-8 sm:p-10'>
            <blockquote className='text-lg font-medium leading-relaxed text-foreground sm:text-xl'>
              <p>&ldquo;{featuredTestimonial.body}&rdquo;</p>
            </blockquote>
            <figcaption className='mt-8 flex items-center gap-x-4'>
              <img
                alt=''
                src={featuredTestimonial.author.imageUrl}
                className='size-12 flex-none rounded-full bg-muted ring-2 ring-border'
              />
              <div className='flex-auto'>
                <div className='text-sm font-semibold text-foreground'>
                  {featuredTestimonial.author.name}
                </div>
                <div className='font-mono text-xs text-muted-foreground'>
                  {featuredTestimonial.author.source}
                </div>
              </div>
            </figcaption>
          </div>
        </figure>

        {/* Regular testimonials */}
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author.source}
            className='group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-spark/40'
          >
            <div className='absolute right-6 top-6'>
              <Quote className='h-8 w-8 text-spark/10' />
            </div>
            <div className='relative flex h-full flex-col p-8'>
              <blockquote className='flex-1 text-sm leading-relaxed text-muted-foreground'>
                <p>&ldquo;{testimonial.body}&rdquo;</p>
              </blockquote>
              <figcaption className='mt-6 flex items-center gap-x-4 border-t border-border pt-6'>
                <img
                  alt=''
                  src={testimonial.author.imageUrl}
                  className='size-10 rounded-full bg-muted ring-2 ring-border'
                />
                <div>
                  <div className='text-sm font-semibold text-foreground'>
                    {testimonial.author.name}
                  </div>
                  <div className='font-mono text-xs text-muted-foreground'>
                    {testimonial.author.source}
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
