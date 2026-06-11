'use client';

import { Input, Textarea } from '@headlessui/react';
import { Turnstile } from '@/components/Turnstile';
import { Button } from '@/components/Button';
import { Loader2 } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';

export function ContactUsForm({ siteKey, sendMessage }) {
  const formRef = useRef();
  const [disabled, setDisabled] = useState(!!siteKey);
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);

  const onVerify = (token) => {
    setDisabled(false);
  };

  const sendForm = async (formData) => {
    setSent(false);

    startTransition(async () => {
      const results = await sendMessage(formData);

      if (results.ok) {
        formRef.current?.reset();
        setSent(true);

        if (siteKey) {
          setDisabled(true);
        }
      }
    });
  };

  return (
    <form ref={formRef} action={sendForm}>
      <div className='flex flex-col space-y-4 md:max-w-lg'>
        <div>
          <Input
            type='name'
            name='name'
            placeholder='Name'
            aria-label='Name'
            required
            autoFocus
            autoComplete='name'
            autoCapitalize='words'
            className='w-full flex-auto appearance-none rounded-md border border-border bg-card px-3 py-[calc(theme(spacing.2)-1px)] text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm'
          />
        </div>
        <div>
          <Input
            type='email'
            name='email'
            placeholder='Email address'
            aria-label='Email address'
            required
            autoComplete='email'
            className='w-full flex-auto appearance-none rounded-md border border-border bg-card px-3 py-[calc(theme(spacing.2)-1px)] text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm'
          />
        </div>
        <div>
          <Textarea
            type='message'
            name='message'
            placeholder="Tell us about your project — what you're building, your timeline, and your stack if you have one."
            aria-label='Message'
            required
            rows={4}
            autoCapitalize='sentences'
            className='w-full flex-auto appearance-none rounded-md border border-border bg-card px-3 py-[calc(theme(spacing.2)-1px)] text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm'
          />
        </div>
        {siteKey && (
          <div>
            <Turnstile siteKey={siteKey} onVerify={onVerify} />
          </div>
        )}
        <div>
          <Button type='submit' disabled={disabled || isPending}>
            {isPending ? (
              <span className='flex items-center gap-2'>
                <Loader2 className='size-4 animate-spin' />
                Sending...
              </span>
            ) : (
              'Send message'
            )}
          </Button>
        </div>
        {sent && (
          <div className='text-sm text-muted-foreground'>
            Thanks — your message is on its way. We&apos;ll be in touch shortly.
          </div>
        )}
      </div>
    </form>
  );
}
