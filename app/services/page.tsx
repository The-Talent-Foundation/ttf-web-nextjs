import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive talent solutions: Illuminate, Innovate, Elevate, and Accelerate.',
};

const services = [
  {
    name: 'Illuminate',
    href: '/services/illuminate',
    description: 'Strategic talent planning and workforce analytics',
  },
  {
    name: 'Innovate',
    href: '/services/innovate',
    description: 'Cutting-edge hiring and recruitment strategies',
  },
  {
    name: 'Elevate',
    href: '/services/elevate',
    description: 'Leadership development and organizational capability building',
  },
  {
    name: 'Accelerate',
    href: '/services/accelerate',
    description: 'Rapid talent acquisition and scaling solutions',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link 
            key={service.name} 
            href={service.href}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}