"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (path: string) => pathname === path;

  return (
    <div className="bg-gradient-to-r from-blue-900 to-black text-white border-b border-cyan-500/30 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="font-bold">
            <Link href="/" className="text-2xl tracking-tight hover:opacity-90 transition-opacity">
              Bug<span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-extrabold">Smasher</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Targets" },
              { path: "/leaderboard", label: "Leaderboard" }
            ].map(({ path, label }) => (
              <Link 
                key={path}
                href={path} 
                className={`font-medium transition-all duration-300 relative group
                  ${isActivePath(path) ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'}`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300
                  ${isActivePath(path) ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
              </Link>
            ))}
            <Link 
              href="/submission" 
              className={`bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-2.5 rounded-lg font-semibold 
                       hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 
                       transition-all duration-300 active:scale-95
                       ${isActivePath('/submission') ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-black' : ''}`}
            >
              Report Bug
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-white transition-all"></div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden ${isOpen ? "block" : "hidden"} py-4 space-y-4 px-2`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Targets" },
            { path: "/leaderboard", label: "Leaderboard" }
          ].map(({ path, label }) => (
            <Link 
              key={path}
              href={path} 
              className={`block font-medium p-2 rounded-lg transition-all duration-300
                ${isActivePath(path) 
                  ? 'text-cyan-400 bg-white/5' 
                  : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5'}`}
            >
              {label}
            </Link>
          ))}
          <Link 
            href="/submission" 
            className={`block bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg font-semibold 
                     text-center hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 
                     transition-all duration-300 active:scale-95
                     ${isActivePath('/submission') ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-black' : ''}`}
          >
            Report Bug
          </Link>
        </div>
      </div>
    </div>
  );
}