import { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | The Talent Foundation',
  description: 'Book a 30-minute strategic call or send a quick inquiry. Get senior-level answers to your complex talent challenge within one business day.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tf-blue to-tf-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Solve Your Critical Talent Challenge—Fast.
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto">
            When talent gaps threaten growth, speed and precision matter. Connect directly with senior experts who specialize in complex, high-stakes hiring.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-semibold">
            We answer every legitimate request <strong>within one business day</strong>—no gate-keeping, no junior screen.
          </p>
        </div>
      </section>

      {/* Value Reminder */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            Partnering with The Talent Foundation means investing in <strong>sustainable internal capability</strong>—predictable execution, measurable ROI, and reduced risk.
          </p>
          <div className="space-x-4">
            <span className="text-gray-600">Not sure we're the right fit?</span>
            <Link href="/who-we-serve" className="text-tf-orange hover:text-tf-blue font-semibold">
              Who We Help
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/about" className="text-tf-orange hover:text-tf-blue font-semibold">
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Primary Path - Strategy Call */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Book a No-Pitch, 30-Minute Strategy Call</h2>
            <p className="text-lg text-gray-600 mb-6 italic">
              Clarify your challenge · Explore data-backed solutions · Decide if enablement is the right path
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span className="text-gray-700">100% senior-level conversation (Adam Kovacs or principal consultant)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Confidential, focused on your specific objectives</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">•</span>
                  <span className="text-gray-700">Clear next-step options—only if mutual value is obvious</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:hello@talent.foundation?subject=Strategy Call Request&body=I would like to schedule a 30-minute strategy call to discuss my talent challenges."
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-lg"
              >
                Book Your Strategy Call
              </a>
              <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours to schedule</p>
            </div>
          </div>

          {/* Alternate Path - Quick Inquiry */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">Prefer Email First? Send a Quick Note.</h2>
            <p className="text-lg text-gray-600 mb-6">
              We'll reply with qualified input or next-step suggestions—typically within 24 hours.
            </p>
            
            <ContactForm />
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 italic">
                <strong>Success:</strong> Thanks—look for a response from a senior consultant within one business day.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Direct Contact Information</h3>
          <div className="text-lg text-gray-700">
            <p className="font-semibold mb-2">The Talent Foundation</p>
            <p className="mb-2">Seattle / Mill Creek, WA · Serving clients globally</p>
            <p>
              📧 <a href="mailto:hello@talent.foundation" className="text-blue-600 hover:text-blue-800">
                hello@talent.foundation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}