import { useEffect, useState } from 'react';
import { Link } from 'wouter';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

export default function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      
      // Show floating CTA after 30% scroll
      setShowFloatingCTA(scrollPercent > 30);

      // Determine current section for progress tracking
      const sections = ['hero', 'problem', 'solution', 'benefits'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollTop + 100) {
          setCurrentSection(sections[i]);
          break;
        }
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
    
    // Delayed initial call to ensure DOM is ready
    const initialCheck = () => {
      handleScroll();
      // Check again after a short delay to catch any elements that weren't ready
      setTimeout(handleScroll, 100);
    };
    
    initialCheck();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation hook
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
        
        // Start animation when element is visible
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

  const getSectionProgress = () => {
    const sections = ['hero', 'problem', 'solution', 'benefits'];
    const currentIndex = sections.indexOf(currentSection);
    return currentIndex >= 0 ? ((currentIndex + 1) / sections.length) * 100 : 0;
  };

  return (
    <>
      {/* Progress Indicator */}
      <div 
        className="progress-indicator"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Section Progress Dots */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        {['hero', 'problem', 'solution', 'benefits'].map((section, index) => (
          <div
            key={section}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              currentSection === section 
                ? 'bg-tf-orange border-tf-orange scale-125 shadow-lg' 
                : 'bg-white border-gray-400 hover:border-tf-blue hover:bg-tf-blue-light shadow-md'
            }`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>

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