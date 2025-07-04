import { useEffect, useState, useCallback } from 'react';
import { Link } from 'wouter';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

export default function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [sections, setSections] = useState<string[]>([]);

  // Get all sections with IDs
  const updateSections = useCallback(() => {
    const allSections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    const sectionIds = allSections.map(section => section.id);
    setSections(sectionIds);
    
    // Set initial section
    if (sectionIds.length > 0 && !currentSection) {
      setCurrentSection(sectionIds[0]);
    }
  }, [currentSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initial sections discovery
    updateSections();
    
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.min(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0, 100);
      
      setScrollProgress(scrollPercent);
      setShowFloatingCTA(scrollPercent > 30);

      // Find current section
      const allSections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      let foundSection = '';
      
      for (let i = allSections.length - 1; i >= 0; i--) {
        const element = allSections[i];
        if (element && element.offsetTop <= scrollTop + 100) {
          foundSection = element.id;
          break;
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

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    const timer = setTimeout(() => {
      handleScroll();
      updateSections();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [updateSections, currentSection]);

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
      {/* Progress Indicator */}
      <div 
        className="progress-indicator"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Section Progress Dots */}
      {sections.length > 0 && (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
          {sections.map((sectionId, index) => {
            const isActive = currentSection === sectionId;
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 cursor-pointer hover:scale-110 ${
                  isActive 
                    ? 'bg-tf-orange border-tf-orange scale-125 shadow-lg' 
                    : 'bg-white border-gray-400 hover:border-tf-orange hover:bg-tf-orange/20 shadow-md'
                }`}
                title={`Go to ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`}
              />
            );
          })}
        </div>
      )}

      {/* Floating CTA */}
      <div className={`floating-cta ${showFloatingCTA ? 'visible' : ''}`}>
        <Link 
          href="/contact" 
          className="btn-primary px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          Book Strategic Assessment
        </Link>
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