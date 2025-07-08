import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-bg-dark py-xl pt-[0px] pb-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <div className="font-bold text-xl text-tf-orange mb-md">The Talent Foundation</div>
            <p className="text-tf-blue-lighter text-sm">
              Strategic talent enablement for complex challenges.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-md">Company</h4>
            <ul className="space-y-xs text-sm">
              <li><Link href="/about" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">About</Link></li>
              <li><Link href="/who-we-serve" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Who We Serve</Link></li>
              <li><a href="#" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Jobs</a></li>
              <li><Link href="/contact" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Contact</Link></li>
              <li><a href="#" className="text-tf-blue-lighter hover:text-tf-orange transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-xxl pt-lg text-center">
          <p className="text-tf-blue-lighter text-sm mb-md">
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
