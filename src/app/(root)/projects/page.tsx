import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const targets = [
  {
    name: 'RustyEstate',
    description: 'RustyEstate is a simple estate selling and renting web app using React and nodejs with express.',
    deploymentUrl: 'https://rustyestate.onrender.com/',
    githubUrl: 'https://github.com/0PrashantYadav0/Rustyestate'
  },
  {
    name: 'Pokedex',
    description: 'PokeKnowledge is a web app for Pokémon enthusiasts.',
    deploymentUrl: 'https://pokeknowledge.vercel.app/pokemon/1',
    githubUrl: 'https://github.com/0PrashantYadav0/Pokedex'
  },
  {
    name: 'MeOW',
    description: 'Meow is bloging platform for cat lovers.',
    deploymentUrl: 'https://me-ow.vercel.app/',
    githubUrl: 'https://github.com/0PrashantYadav0/MeOW'
  },
  {
    name: 'Expense Tracker',
    description: 'An expense tracker website made with bun, hono, vite, react, neonpg, drizzle and tanstack.',
    deploymentUrl: 'https://expense-tracking-app-p00z.onrender.com/',
    githubUrl: 'https://github.com/0PrashantYadav0/Expense-Tracking-App'
  },
  {
    name: 'HourMeet',
    description: 'Hour Meet a platform to host meeting and schedule meet for later . ',
    deploymentUrl: 'https://hour-meet.vercel.app',
    githubUrl: 'https://github.com/0PrashantYadav0/HourMeet'
  },
  {
    name: 'Stoxs',
    description: 'Stoxs is a web application designed to help users track their investment portfolios.',
    deploymentUrl: 'https://stoxs.vercel.app/',
    githubUrl: 'https://github.com/0PrashantYadav0/Stoxs'
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-5">
              Target Applications
            </h1>
            <p className="text-gray-300 text-lg">
              Choose your target wisely. Each application has unique vulnerabilities waiting to be discovered.
            </p>
          </div>

          {/* Targets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 
                         hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Target Header */}
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{target.name}</h2>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {target.description}
                </p>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={target.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Live Target</span>
                  </a>
                  <a
                    href={target.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" 
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}