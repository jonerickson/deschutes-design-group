import { SimpleLayout } from '@/components/SimpleLayout';
import { ContactUsForm } from '@/components/ContactUsForm';
import { sendContactFormMessage } from '@/lib/mail';
import { revalidatePath } from 'next/cache';

export const metadata = {
  title: 'Contact',
  description: 'Send us a message.',
};

export default function Contact() {
  const siteKey = process.env.CLOUDFLARE_TURNSTILE_SITE_KEY;

  async function sendMessage(formData) {
    'use server';

    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const result = await sendContactFormMessage(
      rawFormData.name,
      rawFormData.email,
      rawFormData.message
    );

    if (result.ok) {
      revalidatePath('/contact');
    }

    return result;
  }

  return (
    <SimpleLayout
      title='Send us a message.'
      intro='Reach out if you have a question about our services, need support help or just general advice on how to tackle your next project. We are always here to help!'
    >
      <ContactUsForm siteKey={siteKey} sendMessage={sendMessage} />
    </SimpleLayout>
  );
}