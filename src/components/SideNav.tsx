'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections: Section[] = [
    { id: 'event-overview', title: 'Event Overview' },
    { id: 'scoring-system', title: 'Scoring System' },
    { id: 'report-format', title: 'Report Format' },
    { id: 'rules-guidelines', title: 'Rules & Guidelines' },
    { id: 'resources', title: 'Resources' }
  ];

  useEffect(() => {
    // Create an observer for each section
    const observers = new Map();
    
    const observerCallback = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      });
    };

    // Configure observer options for better detection
    const observerOptions = {
      rootMargin: '-20% 0px -20% 0px', // Adjust the margins to detect sections better
      threshold: 0.2 // Lower threshold for easier detection
    };

    // Set up observers for each section
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback(id),
          observerOptions
        );
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    // Cleanup function
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 w-48">
      <ul className="space-y-2">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}