import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Talent Foundation and our commitment to strategic talent solutions.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About The Talent Foundation</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          We are a strategic talent solutions firm dedicated to building sustainable internal capability for organizations worldwide.
        </p>
        {/* Content will be migrated from client/src/pages/About.tsx */}
      </div>
    </div>
  );
}