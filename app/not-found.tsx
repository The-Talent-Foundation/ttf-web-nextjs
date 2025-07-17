import Link from 'next/link';
import { SearchX, ArrowLeft, Home, Phone, Settings } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-slate-300 mb-4">404</h1>
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <SearchX className="h-12 w-12 text-red-500" />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-6 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center mb-12">
          <Link 
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full md:w-auto"
          >
            <Home className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          <Link 
            href="/services"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center w-full md:w-auto"
          >
            <Settings className="h-5 w-5 mr-2" />
            Our Services
          </Link>
          <Link 
            href="/contact"
            className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center w-full md:w-auto"
          >
            <Phone className="h-5 w-5 mr-2" />
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Illuminate', href: '/services/illuminate' },
              { name: 'Innovate', href: '/services/innovate' },
              { name: 'Elevate', href: '/services/elevate' },
              { name: 'Accelerate', href: '/services/accelerate' },
              { name: 'Who We Serve', href: '/who-we-serve' }
            ].map((link, index) => (
              <Link 
                key={index}
                href={link.href}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* TTF Branding */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-2">
            © 2024 The Talent Foundation
          </p>
          <p className="text-slate-400 text-xs">
            Strategic talent enablement and execution expertise
          </p>
        </div>
      </div>
    </div>
  );
}