import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illuminate - Strategic Talent Planning',
  description: 'Strategic talent planning and workforce analytics solutions from The Talent Foundation.',
};

export default function IlluminatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Illuminate</h1>
      <div className="prose prose-lg max-w-4xl">
        <p className="text-xl mb-6">
          Strategic talent planning and workforce analytics that illuminate the path to organizational excellence.
        </p>
        {/* Content will be migrated from client/src/pages/services/Illuminate.tsx */}
      </div>
    </div>
  );
}