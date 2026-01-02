'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { X, Loader2 } from 'lucide-react';
import react from '@/images/photos/react.png';
import elios from '@/images/photos/elios.png';
import perscom from '@/images/photos/perscom.png';
import levis from '@/images/photos/levis.png';
import community from '@/images/photos/laravel-community.png';
import nitro from '@/images/photos/nitro.png';
import exergy from '@/images/photos/exergy.png';
import { Button } from '@/components/Button';

export function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const photos = [
    {
      image: react,
      title: 'REACT Studios™',
      url: 'https://reactstudios.com',
    },
    {
      image: levis,
      title: "Levi's Sawmill",
      url: 'https://levissawmill.com',
    },
    {
      image: perscom,
      title: 'PERSCOM',
      url: 'https://perscom.io',
    },
    {
      image: community,
      title: 'Laravel Community',
      url: 'https://laravel-community.com',
    },
    {
      image: nitro,
      title: 'Nitro Energy',
      url: 'https://nitroenergy.com',
    },
    {
      image: exergy,
      title: 'Exergy Health',
      url: 'https://www.exergyhealth.org/',
    },
    {
      image: elios,
      title: 'Elios Fund',
      url: 'https://eliosfund.com',
    },
  ];

  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const duplicatedPhotos = [...photos, ...photos];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    if (selectedPhoto !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  return (
    <>
      <div className='mt-16 sm:mt-20'>
        <div className='-my-4 overflow-hidden pb-6 pt-4'>
          <div className='hover:pause flex animate-scroll gap-5 sm:gap-8'>
            {duplicatedPhotos.map((photo, photoIndex) => (
              <div
                key={photoIndex}
                onClick={() => {
                  setIsLoading(true);
                  setSelectedPhoto(photos[photoIndex % photos.length]);
                }}
                className={clsx(
                  'relative aspect-[9/10] h-36 w-60 flex-none cursor-pointer overflow-hidden rounded-xl bg-zinc-100 shadow-lg transition-transform hover:scale-105 sm:h-60 sm:w-[24rem] sm:rounded-2xl dark:bg-zinc-800',
                  rotations[photoIndex % rotations.length]
                )}
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  sizes='(max-width: 640px) 12rem, 28rem'
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            aria-label='Close'
          >
            <X className='h-6 w-6' />
          </button>
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <Loader2 className='h-12 w-12 animate-spin text-white' />
            </div>
          )}
          <div
            className={clsx(
              'flex flex-col transition-opacity duration-300',
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className='h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-t-lg object-contain'
              onLoad={() => setIsLoading(false)}
            />
            <div className='flex items-center justify-between gap-4 rounded-lg bg-zinc-900/90 px-6 py-4 backdrop-blur-sm'>
              <h3 className='text-lg font-semibold text-white sm:text-xl'>
                {selectedPhoto.title}
              </h3>
              <Button href={selectedPhoto.url} target='_blank'>
                Visit project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
