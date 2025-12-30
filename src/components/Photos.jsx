'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import react from '@/images/photos/react.png';
import elios from '@/images/photos/elios.png';
import perscom from '@/images/photos/perscom.png';
import levis from '@/images/photos/levis.png';
import nitro from '@/images/photos/nitro.png';
import exergy from '@/images/photos/exergy.png';

export function Photos() {
  const images = [react, perscom, levis, nitro, exergy, elios];

  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 overflow-hidden pb-6 pt-4'>
        <div className='hover:pause flex animate-scroll gap-5 sm:gap-8'>
          {duplicatedImages.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={clsx(
                'relative aspect-[9/10] h-36 w-60 flex-none overflow-hidden rounded-xl bg-zinc-100 shadow-lg sm:h-60 sm:w-[24rem] sm:rounded-2xl dark:bg-zinc-800',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt='Recent project image'
                sizes='(max-width: 640px) 12rem, 28rem'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
