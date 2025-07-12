import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elevate - Leadership Development',
  description: 'Leadership development and organizational capability building from The Talent Foundation.',
};

export default function ElevatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Elevate</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          Leadership development and organizational capability building that elevates your entire organization.
        </p>
        {/* Content will be migrated from client/src/pages/services/Elevate.tsx */}
      </div>
    </div>
  );
}