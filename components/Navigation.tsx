'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown,
  Lightbulb,
  Settings,
  Zap,
  Play,
  LayoutGrid
} from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        // Always show nav when at top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down past threshold - hide nav
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/who-we-serve', label: 'Who We Serve' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceItems = [
    { 
      href: '/services', 
      label: 'Overview', 
      description: 'The Talent Enablement Ecosystem',
      icon: LayoutGrid
    },
    { 
      href: '/services/illuminate', 
      label: 'Illuminate', 
      description: 'Talent & Market Intelligence',
      icon: Lightbulb
    },
    { 
      href: '/services/innovate', 
      label: 'Innovate', 
      description: 'Process Design & Transformation',
      icon: Settings
    },
    { 
      href: '/services/elevate', 
      label: 'Elevate', 
      description: 'Capability Building & AI Literacy',
      icon: Zap
    },
    { 
      href: '/services/accelerate', 
      label: 'Accelerate', 
      description: 'Expert Execution Support',
      icon: Play
    },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileNavClick = () => {
    // Close mobile menu and scroll to top
    setMobileMenuOpen(false);
    handleNavClick();
  };

  return (
    <nav className={`bg-white border-b border-border-light fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={handleNavClick}>
              <Image src="/logo.png" alt="The Talent Foundation" width={40} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors whitespace-nowrap ${
                isActive('/')
                  ? 'text-tf-orange'
                  : 'text-text-medium hover:text-tf-orange'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`font-medium transition-colors whitespace-nowrap ${
                    pathname.startsWith('/services')
                      ? 'text-tf-orange'
                      : 'text-text-medium hover:text-tf-orange'
                  }`}
                  onClick={handleNavClick}
                >
                  Services
                </Link>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
              
              <div className="absolute top-full left-0 mt-1 w-[500px] bg-white rounded-lg shadow-lg border border-border-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid gap-1">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-orange-50 hover:shadow-sm"
                          onClick={handleNavClick}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            item.href === '/services' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                            item.href === '/services/illuminate' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                            item.href === '/services/innovate' ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                            item.href === '/services/elevate' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' :
                            'bg-gradient-to-br from-green-500 to-green-600'
                          }`}>
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-semibold leading-none mb-xs text-text-dark">
                              {item.label}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-text-medium">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-tf-orange'
                    : 'text-text-medium hover:text-tf-orange'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="https://cal.com/adamkovacs/the-talent-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Book Discovery Call
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-medium hover:text-tf-orange"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-gradient-to-b from-white to-gray-50 border-t border-border-light shadow-lg">
            <Link
              href="/"
              className={`block px-3 py-3 rounded-lg transition-colors ${
                isActive('/')
                  ? 'text-tf-orange bg-orange-50'
                  : 'text-text-medium hover:text-tf-orange hover:bg-orange-50'
              }`}
              onClick={handleMobileNavClick}
            >
              Home
            </Link>
            
            {/* Services Section */}
            <div className="px-3 py-2">
              <p className="font-medium text-text-dark mb-2">Services</p>
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 pl-4 py-3 text-sm transition-colors rounded-lg hover:bg-orange-50 ${
                      isActive(item.href)
                        ? 'text-tf-orange'
                        : 'text-text-medium hover:text-tf-orange'
                    }`}
                    onClick={handleMobileNavClick}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.href === '/services' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                      item.href === '/services/illuminate' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      item.href === '/services/innovate' ? 'bg-gradient-to-br from-orange-500 to-red-500' :
                      item.href === '/services/elevate' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' :
                      'bg-gradient-to-br from-green-500 to-green-600'
                    }`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs text-text-medium">{item.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-tf-orange bg-orange-50'
                    : 'text-text-medium hover:text-tf-orange hover:bg-orange-50'
                }`}
                onClick={handleMobileNavClick}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-4 border-t border-gray-200 mt-2">
              <a
                href="https://cal.com/adamkovacs/the-talent-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}