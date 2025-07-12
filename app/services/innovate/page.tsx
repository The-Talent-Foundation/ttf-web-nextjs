import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovate - Advanced Hiring Strategies',
  description: 'Cutting-edge hiring and recruitment strategies from The Talent Foundation.',
};

export default function InnovatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Innovate</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          Cutting-edge hiring and recruitment strategies that drive innovation in talent acquisition.
        </p>
        {/* Content will be migrated from client/src/pages/services/Innovate.tsx */}
      </div>
    </div>
  );
}