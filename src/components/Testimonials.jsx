import logoIdc from '@/images/logos/idc.svg';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const featuredTestimonial = {
  body: 'Working with Jon was exceptional. He addressed the issue, asked the right questions and demonstrated mastery of this space. Cannot recommend him highly enough.',
  author: {
    name: 'Hugh',
    source: 'SAML Single Sign-On (SSO)',
    imageUrl:
      'https://ui-avatars.com/api/?name=Hugh&rounded=true&background=f4f4f5&color=a1a1aa',
    logoUrl: logoIdc,
  },
};

const testimonials = [
  {
    body: "Jon is an incredible software developer! He delivered exactly what I wanted with exceptional expertise and exceeded all my expectations. Working with him was a pleasure\u2014he was quick, polite, and extremely cooperative. Honestly, I couldn't have found a better person for the job...",
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

function Stars() {
  return (
    <div className='flex gap-0.5'>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className='h-4 w-4 fill-amber-400 text-amber-400' />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className='relative isolate pt-20 sm:pt-28'>
      <div className='max-w-2xl border-l-2 border-blue-500 pl-5 text-left sm:pl-6'>
        <h2 className='text-base/7 font-semibold text-blue-600'>
          Testimonials
        </h2>
        <h3 className='mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
          We have worked with thousands of amazing people
        </h3>
        <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
          We deeply value every client we work with, treating each relationship
          with the respect it deserves. Our team is committed to giving every
          project the personalized attention and care needed to bring your
          vision to life.
        </p>
      </div>

      <div className='mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2'>
        {/* Featured testimonial — full width */}
        <figure className='relative col-span-1 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl lg:col-span-2 dark:border-zinc-700/40 dark:bg-zinc-800/50 dark:hover:border-blue-400/30'>
          <div className='absolute right-6 top-6 sm:right-10 sm:top-10'>
            <Quote className='h-12 w-12 text-blue-500/10 dark:text-blue-400/10' />
          </div>
          <div className='relative p-8 sm:p-10'>
            <Stars />
            <blockquote className='mt-6 text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl dark:text-zinc-200'>
              <p>&ldquo;{featuredTestimonial.body}&rdquo;</p>
            </blockquote>
            <figcaption className='mt-8 flex items-center gap-x-4'>
              <img
                alt=''
                src={featuredTestimonial.author.imageUrl}
                className='size-12 flex-none rounded-full bg-zinc-50 shadow-sm ring-2 ring-white dark:ring-zinc-700'
              />
              <div className='flex-auto'>
                <div className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                  {featuredTestimonial.author.name}
                </div>
                <div className='text-sm text-zinc-500 dark:text-zinc-400'>
                  {featuredTestimonial.author.source}
                </div>
              </div>
              <Image
                alt={featuredTestimonial.author.name}
                src={featuredTestimonial.author.logoUrl}
                className='h-6 w-auto flex-none opacity-40 dark:invert'
                unoptimized
              />
            </figcaption>
          </div>
        </figure>

        {/* Regular testimonials */}
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author.source}
            className='group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl dark:border-zinc-700/40 dark:bg-zinc-800/50 dark:hover:border-blue-400/30'
          >
            <div className='absolute right-6 top-6'>
              <Quote className='h-8 w-8 text-blue-500/10 dark:text-blue-400/10' />
            </div>
            <div className='relative flex h-full flex-col p-8'>
              <Stars />
              <blockquote className='mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400'>
                <p>&ldquo;{testimonial.body}&rdquo;</p>
              </blockquote>
              <figcaption className='mt-6 flex items-center gap-x-4 border-t border-zinc-100 pt-6 dark:border-zinc-700/40'>
                <img
                  alt=''
                  src={testimonial.author.imageUrl}
                  className='size-10 rounded-full bg-zinc-50 shadow-sm ring-2 ring-white dark:ring-zinc-700'
                />
                <div>
                  <div className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                    {testimonial.author.name}
                  </div>
                  <div className='text-sm text-zinc-500 dark:text-zinc-400'>
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
