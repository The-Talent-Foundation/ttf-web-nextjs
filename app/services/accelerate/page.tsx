import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accelerate - Rapid Talent Solutions',
  description: 'Rapid talent acquisition and scaling solutions from The Talent Foundation.',
};

export default function AcceleratePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Accelerate</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          Rapid talent acquisition and scaling solutions that accelerate your organization's growth.
        </p>
        {/* Content will be migrated from client/src/pages/services/Accelerate.tsx */}
      </div>
    </div>
  );
}