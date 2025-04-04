"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import './globals.css'


export default function Home() {
  const [animatedText, setAnimatedText] = useState([
    "Scanning for vulnerabilities...",
    "Analyzing security protocols...",
    "Identifying potential exploits...",
    "Initializing bug hunting sequence...",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prevText) => [
        ...prevText.slice(-3),
        `System scan progress: ${Math.floor(Math.random() * 100)}%...`,
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:w-1/2">
              <div className="relative">
                <h1 className="text-7xl md:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent 
                                  hover:from-blue-400 hover:via-cyan-500 hover:to-blue-600 transition-all duration-500">
                    Bug
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent 
                                  hover:from-cyan-400 hover:via-blue-500 hover:to-cyan-600 transition-all duration-500">
                    Smasher
                  </span>
                </h1>
                <div className="text-2xl font-mono text-cyan-400/80 mt-2 ml-1">
                  <span className="inline-block">
                    <span className="text-blue-500/80">&gt;</span> ./2025_edition
                  </span>
                  <span className="inline-block ml-2 animate-pulse">▌</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl -z-10 rounded-3xl"></div>
              </div>
              <p className="text-xl mt-6 text-gray-300 leading-relaxed">
                Join the ultimate bug hunting challenge! Put your cybersecurity skills to the test 
                and compete to find vulnerabilities across multiple web applications.
              </p>
              
              <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Event Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>3-day intensive bug hunting competition (8th - 10th April)</li>
                  <li>100 points for each unique bug discovery</li>
                  <li>Bonus 150 points for unintended vulnerabilities</li>
                  <li>Race against time and fellow hunters!</li>
                </ul>
              </div>

              <div className="mt-10 space-x-4">
                <Link href="/about">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition duration-200 shadow-lg">
                    Start Hunting
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition duration-200">
                    View Targets
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Animation Panel */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-2xl">
                <div className="text-cyan-400 font-mono text-sm">
                  <div>$ initialize_bug_hunt.sh</div>
                  <div className="h-[240px] overflow-hidden">
                    {animatedText.map((text, index) => (
                      <p key={index} 
                         className="text-blue-400 opacity-70"
                         style={{animation: 'fadeIn 0.5s ease-in'}}>
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="animate-pulse">▌</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}