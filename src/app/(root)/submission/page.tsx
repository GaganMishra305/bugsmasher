'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Submission() {
  const router = useRouter();
  const FORM_URL = 'https://forms.gle/4s77UHYg57utxtxJ7';

  useEffect(() => {
    // Open Google Form in a new tab
    window.open(FORM_URL, '_blank');
    // Navigate back to home page
    router.push('/');
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-cyan-400 mb-2">Opening submission form...</p>
          <p className="text-gray-300">If the form doesn't open automatically, 
            <a 
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 ml-1"
            >
              click here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}