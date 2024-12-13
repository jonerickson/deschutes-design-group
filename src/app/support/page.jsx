import { SimpleLayout } from '@/components/SimpleLayout';
import { Mail, Slack, SquarePen } from 'lucide-react';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Support',
  description: 'Get help on a project or with a service.',
};

export default function Support() {
  return (
    <SimpleLayout
      title='Get help.'
      intro="We offer multiple ways to get assistance with our products and services. Please choose one of the options below for support. If you're still unable to find the help you need, feel free to reach out to us via email."
    >
      <div className='flex flex-col space-y-8'>
        <div className=''>
          <div className='font-bold'>Slack</div>
          <div className='text-sm text-zinc-600'>
            Slack offers a collaborative and community-driven space where you
            can easily ask questions and receive support from both our team and
            fellow users. It&apos;s often the quickest way to get assistance and
            fosters a more interactive, support-focused environment.
          </div>
        </div>
        <div className=''>
          <div className='font-bold'>Email</div>
          <div className='text-sm text-zinc-600'>
            For more complex issues or when sensitive information—such as
            emails, passwords, or login credentials—needs to be securely
            exchanged, email is the preferred method of communication. It
            ensures a private and direct channel for resolving your concerns.
          </div>
        </div>
        <div className=''>
          <div className='font-bold'>Contact Form</div>
          <div className='text-sm text-zinc-600'>
            For a faster way to reach our support team, use the contact form to
            email us directly.
          </div>
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <Button href='https://slack.deschutesdesigngroup.com' target='_blank'>
            <Slack className='size-4' />
            Join Slack
          </Button>
          <Button
            variant='secondary'
            href='mailto:support@deschutesdesigngroup.com'
          >
            <Mail className='size-4' />
            Email us
          </Button>
          <Button variant='secondary' href='/contact'>
            <SquarePen className='size-4' />
            Contact form
          </Button>
        </div>
      </div>
    </SimpleLayout>
  );
}
