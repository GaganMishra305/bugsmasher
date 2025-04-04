"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-12 relative">
          <SideNav />
          
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-8">
              Hunt. Report. Win.
            </h1>

            <section id="event-overview" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">1. Event Overview</h2>
              <div className="bg-black/30 p-6 rounded-xl border border-cyan-500/30">
                <p className="text-gray-300 mb-4">
                  BugSmasher 2025 is a 3-day intensive bug hunting competition where participants can test their cybersecurity skills
                  across multiple web applications. Find vulnerabilities, exploit weaknesses, and compete for the top spot on our leaderboard.
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li>Duration: <span className="text-cyan-300">8th - 10th April 2025</span></li>
                  <li>Format: <span className="text-cyan-300">Individual participation</span></li>
                  <li>Target: <span className="text-cyan-300">Multiple web applications with various vulnerability types</span></li>
                </ul>
              </div>
            </section>

            <section id="scoring-system" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">2. Scoring System</h2>
              <div className="bg-black/30 rounded-xl border border-cyan-500/30 overflow-hidden">
                <table className="w-full">
                  <thead className="border-b border-cyan-500/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-blue-400">Type</th>
                      <th className="px-6 py-4 text-left text-blue-400">Points</th>
                      <th className="px-6 py-4 text-left text-blue-400 hidden md:table-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cyan-500/30">
                    <tr>
                      <td className="px-6 py-4">Base Bug</td>
                      <td className="px-6 py-4">100</td>
                      <td className="px-6 py-4 hidden md:table-cell text-gray-300">Standard vulnerability discovery</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Unintended Bug</td>
                      <td className="px-6 py-4">150</td>
                      <td className="px-6 py-4 hidden md:table-cell text-gray-300">Finding bugs not part of intended challenges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="report-format" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">3. Bug Report Format</h2>
              <div className="space-y-6">
                <div className="bg-black/30 p-6 rounded-xl border border-cyan-500/30">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">Required Information</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-300">
                    <li><span className="text-cyan-300">Bug Description</span> - Detailed explanation of the vulnerability</li>
                    <li><span className="text-cyan-300">Steps to Reproduce</span> - Clear, numbered steps to replicate the bug</li>
                    <li><span className="text-cyan-300">Severity Level</span> - Estimated criticality (Low/Medium/High/Critical)</li>
                    <li><span className="text-cyan-300">Potential Impact</span> - What could an attacker achieve?</li>
                    <li><span className="text-cyan-300">Suggested Mitigation</span> - How can this be fixed?</li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    (Note: Report verification and leaderboard updates typically take 15-60 minutes)
                  </p>
                </div>
              </div>
            </section>

            <section id="rules-guidelines" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">4. Rules & Guidelines</h2>
              <div className="bg-black/30 p-6 rounded-xl border border-cyan-500/30">
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  <li><span className="text-cyan-300">Individual Participation</span> - No team submissions allowed</li>
                  <li><span className="text-cyan-300">First Come, First Served</span> - Duplicate reports won't receive points</li>
                  <li><span className="text-cyan-300">Ethical Conduct</span> - No DOS/DDOS or destructive testing</li>
                  <li><span className="text-cyan-300">Scope Compliance</span> - Stay within designated target applications</li>
                  <li><span className="text-cyan-300">Report Quality</span> - Clear, concise, and reproducible submissions</li>
                </ul>
              </div>
            </section>

            <section id="resources" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-semibold text-cyan-400 mb-6">5. Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/submission"
                  className="bg-black/30 p-6 rounded-xl border border-cyan-500/30 hover:border-blue-500/50 
                           hover:bg-blue-900/20 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center">
                    Submit Report
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className="text-gray-300">Report a vulnerability</p>
                </Link>
                
                <Link 
                  href="/projects"
                  className="bg-black/30 p-6 rounded-xl border border-cyan-500/30 hover:border-blue-500/50 
                           hover:bg-blue-900/20 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center">
                    Target Applications
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className="text-gray-300">View available targets</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}