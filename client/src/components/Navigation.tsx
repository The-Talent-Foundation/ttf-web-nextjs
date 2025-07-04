import { useState } from 'react';
import { Link, useLocation } from 'wouter';
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

// Import logo
import logoImage from '@assets/download_1751590582407.png';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white border-b border-border-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logoImage} alt="The Talent Foundation" className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors whitespace-nowrap ${
                isActive('/')
                  ? 'text-tf-blue'
                  : 'text-text-medium hover:text-tf-blue'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`font-medium transition-colors ${
                    location.startsWith('/services')
                      ? 'text-tf-blue'
                      : 'text-text-medium hover:text-tf-blue'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-1 p-6 md:w-[600px] md:grid-cols-1">
                      {serviceItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-start select-none space-x-4 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-tf-blue-lighter hover:shadow-sm focus:bg-tf-blue-lighter"
                              >
                                <div className="icon-container flex-shrink-0">
                                  <Icon className="h-5 w-5 icon-secondary" />
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
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-tf-blue'
                    : 'text-text-medium hover:text-tf-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary whitespace-nowrap"
            >
              Book Assessment
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-medium hover:text-tf-blue"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border-light">
            <Link
              href="/"
              className={`block px-3 py-2 transition-colors ${
                isActive('/')
                  ? 'text-tf-blue'
                  : 'text-text-medium hover:text-tf-blue'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Services Section */}
            <div className="px-3 py-2">
              <p className="font-medium text-text-dark mb-2">Services</p>
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block pl-4 py-2 text-sm transition-colors ${
                    isActive(item.href)
                      ? 'text-tf-blue'
                      : 'text-text-medium hover:text-tf-blue'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-tf-blue'
                    : 'text-text-medium hover:text-tf-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/contact"
                className="btn-primary inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
