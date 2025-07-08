import { useEffect, useState, useCallback } from 'react';
import { Link } from 'wouter';
import { useLocation } from 'wouter';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

export default function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const [location] = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [sections, setSections] = useState<string[]>([]);

  // Use consistent TF Orange across all pages
  const orangeColor = '#e84e36';

  // Throttle scroll events for smooth performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return (...args: any[]) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay - (currentTime - lastExecTime));
      }
    };
  }, []);



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define meaningful sections for each page
  const getMeaningfulSections = () => {
    if (location === '/') {
      // Homepage - 4 specific sections as requested
      return ['hero', 'problem', 'solution', 'proven-partner'];
    } else if (location.includes('/services/')) {
      // Service pages - 5 main sections
      return ['hero', 'problem', 'solution', 'benefits', 'cta'];
    } else if (location === '/about') {
      return ['hero', 'philosophy', 'principles', 'founder', 'contact-cta'];
    } else if (location === '/contact') {
      return ['hero', 'strategy-call', 'email-contact', 'contact-info'];
    } else if (location === '/services') {
      return ['hero', 'overview', 'services-grid', 'roi', 'commitment'];
    } else if (location === '/who-we-serve') {
      return ['hero', 'overview', 'client-types', 'case-studies'];
    } else {
      // Fallback: get all sections with IDs
      const allSections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      return allSections.map(section => section.id);
    }
  };

  useEffect(() => {
    // Get meaningful sections for current page
    const setupScrollAnimations = () => {
      const meaningfulSections = getMeaningfulSections();
      // Filter to only include sections that actually exist on the page
      const existingSections = meaningfulSections.filter(id => document.getElementById(id));
      setSections(existingSections);
      
      if (existingSections.length > 0 && !currentSection) {
        setCurrentSection(existingSections[0]);
      }
    };
    
    const handleScrollRaw = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.min(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0, 100);
      
      setScrollProgress(scrollPercent);
      
      // Hide floating CTA when final CTA section is visible
      const allH2s = document.querySelectorAll('h2');
      let finalCTASection = null;
      
      // Find h2 containing "Ready to Transform Talent"
      allH2s.forEach(h2 => {
        if (h2.textContent && h2.textContent.includes('Ready to Transform Talent')) {
          finalCTASection = h2.closest('section') || h2.parentElement;
        }
      });
      
      // Fallback to last section if not found
      if (!finalCTASection) {
        finalCTASection = document.querySelector('section:last-of-type');
      }
      
      let shouldShowFloatingCTA = scrollPercent > 30;
      
      // Hide floating CTA when navigation would be visible (same logic as Navigation component)
      // Navigation shows when: scrollTop < 50 OR scrolling up
      const lastScrollYRef = (window as any).lastScrollYRef || scrollTop;
      const isNavVisible = scrollTop < 50 || (scrollTop < lastScrollYRef && scrollTop > 150);
      (window as any).lastScrollYRef = scrollTop;
      
      if (isNavVisible) {
        shouldShowFloatingCTA = false;
      }
      
      // Hide floating CTA when final CTA section is visible
      if (finalCTASection) {
        const rect = finalCTASection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          shouldShowFloatingCTA = false;
        }
      }
      
      setShowFloatingCTA(shouldShowFloatingCTA);

      // Find current section with improved logic
      const meaningfulSections = getMeaningfulSections();
      const existingSections = meaningfulSections.filter(id => document.getElementById(id));
      
      let foundSection = '';
      const viewportCenter = scrollTop + winHeight / 2;
      
      // Find the section closest to viewport center
      let minDistance = Infinity;
      for (const sectionId of existingSections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionCenter = element.offsetTop + element.offsetHeight / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            foundSection = sectionId;
          }
        }
      }
      
      if (foundSection && foundSection !== currentSection) {
        setCurrentSection(foundSection);
      }

      // Reveal elements on scroll
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < winHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });

      // Parallax effect
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = 0.1;
        const yPos = -(rect.top * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Use throttled scroll handler for smooth performance
    const handleScroll = throttle(handleScrollRaw, 16); // ~60fps

    // Initial setup with delays to ensure DOM is ready
    setTimeout(setupScrollAnimations, 50);
    setTimeout(() => {
      setupScrollAnimations();
      handleScrollRaw();
    }, 150);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', setupScrollAnimations);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setupScrollAnimations);
    };
  }, [currentSection, location, throttle]);

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target);
            }
          });
        });
        
        observer.observe(counter);
      });
    };

    animateCounters();
  }, []);

  return (
    <>
      {/* Progress Indicator with Consistent Orange */}
      <div 
        className="progress-indicator"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: orangeColor,
          transition: 'width 0.1s ease-out'
        }}
      />
      
      {/* Section Progress Dots - Consistent Orange Design */}
      {sections.length > 0 && (
        <div className="fixed top-1/2 left-3 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
          {sections.map((sectionId, index) => {
            const isActive = currentSection === sectionId;
            return (
              <button
                key={`${location}-${sectionId}`} // Add location to make keys unique
                onClick={() => scrollToSection(sectionId)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 border ${
                  isActive 
                    ? `scale-150 shadow-lg border-2` 
                    : 'bg-white/80 border-gray-300 hover:border-gray-500 hover:bg-white shadow-sm'
                }`}
                style={{
                  backgroundColor: isActive ? orangeColor : undefined,
                  borderColor: isActive ? orangeColor : undefined,
                }}
                title={`Go to ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace(/-/g, ' ')}`}
              />
            );
          })}
        </div>
      )}

      {/* Floating CTA */}
      <div className={`floating-cta ${showFloatingCTA ? 'visible' : ''}`}>
        <a 
          href="https://cal.com/adamkovacs/the-talent-foundation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          Book Discovery Call
        </a>
      </div>

      {children}
    </>
  );
}

// Hook for scroll reveal animations
export const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((element) => observer.observe(element));
    
    return () => observer.disconnect();
  }, []);
};

// Hook for counter animations
export const useCounterAnimation = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration]);
  
  return count;
};