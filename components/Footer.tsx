'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark py-xl pt-[10px] pb-[10px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="flex flex-col justify-end">
            <div className="font-bold text-xl text-tf-orange mb-md">The Talent Foundation</div>
            <p className="text-tf-blue-lighter text-sm">
              Strategic talent enablement for complex challenges.
            </p>
          </div>
          
          <div className="flex flex-col justify-end">
            <div>
              <h4 className="font-semibold text-white mb-md">Company</h4>
              <div className="grid grid-cols-2 gap-x-lg gap-y-xs text-sm">
                <Link href="/about" className="text-tf-blue-lighter hover:text-tf-orange transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                <Link href="/contact" className="text-tf-blue-lighter hover:text-tf-orange transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
                <Link href="/who-we-serve" className="text-tf-blue-lighter hover:text-tf-orange transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Who We Serve</Link>
                <a href="#" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Privacy</a>
                <a href="#" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Jobs</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-xxl pt-lg text-center">
          <p className="text-tf-blue-lighter text-sm mb-md pt-[0px] pb-[0px] mt-[5px] mb-[5px]">
            © 2025 The Talent Foundation. All rights reserved.
          </p>
          <p className="text-xs text-tf-blue-lighter opacity-60">
            The logos displayed above are the trademarks and property of their respective owners. They are presented here for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}