import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Talent Foundation for strategic talent solutions.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-2xl">
        <p className="text-xl mb-6">
          Ready to transform your organization's talent strategy? Get in touch with our team.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}