import logoIdc from '@/images/logos/idc.svg';
import Image from 'next/image';

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
  [
    [
      {
        body: "Jon is an incredible software developer! He delivered exactly what I wanted with exceptional expertise and exceeded all my expectations. Working with him was a pleasure—he was quick, polite, and extremely cooperative. Honestly, I couldn't have found a better person for the job...",
        author: {
          name: 'Abdul',
          source: 'Custom Web App',
          imageUrl:
            'https://ui-avatars.com/api/?name=Abdul&rounded=true&background=f4f4f5&color=a1a1aa',
        },
      },
    ],
    [
      {
        body: 'It was perfect to work with this company/seller. Great communication, advices, work and the most importantly - the result. Definitely recommended!',
        author: {
          name: 'Walt',
          source: 'Configure Web Server',
          imageUrl:
            'https://ui-avatars.com/api/?name=Abdul&rounded=true&background=f4f4f5&color=a1a1aa',
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Testimonials() {
  return (
    <div className='relative isolate pt-24 sm:pt-32'>
      <div className='max-w-2xl text-left'>
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
      <div className='mx-auto mt-16 grid grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-zinc-900 sm:mt-20 xl:grid-cols-2'>
        <figure className='col-span-full rounded-2xl ring-1 ring-zinc-100 dark:ring-zinc-700/40'>
          <blockquote className='p-6 text-lg font-semibold tracking-tight text-zinc-800 sm:p-12 sm:text-xl/8 dark:text-zinc-400'>
            <p>{`“${featuredTestimonial.body}”`}</p>
          </blockquote>
          <figcaption className='flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-zinc-100 px-6 py-4 sm:flex-nowrap'>
            <img
              alt=''
              src={featuredTestimonial.author.imageUrl}
              className='size-10 flex-none rounded-full bg-zinc-50'
            />
            <div className='flex-auto'>
              <div className='font-semibold text-zinc-800 dark:text-zinc-100'>
                {featuredTestimonial.author.name}
              </div>
              <div className='text-zinc-600 dark:text-zinc-400'>
                {featuredTestimonial.author.source}
              </div>
            </div>
            <Image
              alt={featuredTestimonial.author.name}
              src={featuredTestimonial.author.logoUrl}
              className='h-6 w-auto flex-none'
              unoptimized
            />
          </figcaption>
        </figure>
        {testimonials.map((columnGroup, columnGroupIdx) => (
          <div
            key={columnGroupIdx}
            className='space-y-8 xl:contents xl:space-y-0'
          >
            {columnGroup.map((column, columnIdx) => (
              <div key={columnIdx} className='space-y-8'>
                {column.map((testimonial) => (
                  <figure
                    key={testimonial.author.source}
                    className='rounded-2xl p-6 ring-1 ring-zinc-100 dark:ring-zinc-700/40'
                  >
                    <blockquote className='text-zinc-600 dark:text-zinc-400'>
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                      <img
                        alt=''
                        src={testimonial.author.imageUrl}
                        className='size-10 rounded-full bg-zinc-50'
                      />
                      <div>
                        <div className='font-semibold text-zinc-800 dark:text-zinc-100'>
                          {testimonial.author.name}
                        </div>
                        <div className='text-zinc-600 dark:text-zinc-400'>
                          {testimonial.author.source}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
