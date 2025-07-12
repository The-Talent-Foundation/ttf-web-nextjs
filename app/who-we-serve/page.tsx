import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Serve',
  description: 'Learn about the organizations and leaders we partner with at The Talent Foundation.',
};

export default function WhoWeServePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Who We Serve</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          We partner with forward-thinking organizations across industries to build sustainable talent capabilities.
        </p>
        {/* Content will be migrated from client/src/pages/WhoWeServe.tsx */}
      </div>
    </div>
  );
}