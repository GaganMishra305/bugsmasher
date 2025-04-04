import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

interface CsvRecord {
  Email: string;
  Score: string;
}

interface LeaderboardRecord {
  username: string;
  score: number;
  rank: number;  // Made required by removing ?
}

function getLeaderboardData(): LeaderboardRecord[] {
    try {
      const filePath = path.join(process.cwd(), 'public', 'leaderboard.csv');
      const fileContent = readFileSync(filePath, 'utf-8');
      const records = parse(fileContent, { columns: true, skip_empty_lines: true }) as CsvRecord[];
      
      const sortedRecords = records
        .map((record) => ({
          username: record.Email.split('@')[0],
          score: parseInt(record.Score),
          rank: 0
        }))
        .sort((a, b) => b.score - a.score);
  
      let currentRank = 1;
      let currentScore = sortedRecords[0]?.score ?? 0;
      let skippedRanks = 0;
  
      return sortedRecords.map((record, index) => {
        if (record.score < currentScore) {
          currentRank = currentRank + skippedRanks + 1;
          currentScore = record.score;
          skippedRanks = 0;
        } else if (record.score === currentScore && index > 0) {
          skippedRanks++;
        }
        return { ...record, rank: currentRank };
      });
    } catch (error) {
      console.error('Error loading leaderboard data:', error);
      return [];
    }
}

export default function Leaderboard() {
  const leaderboardData = getLeaderboardData();

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Live Leaderboard
            </h1>
            <p className="text-gray-400">
              Real-time rankings of our skilled bug hunters
            </p>
          </div>

          {leaderboardData.length === 0 ? (
            <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-12 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                No Bug Hunters Yet!
              </h3>
              <p className="text-gray-400 mb-6">
                Be the first to find vulnerabilities and claim your spot on the leaderboard.
              </p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden shadow-xl shadow-cyan-500/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-cyan-500/30">
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold">Rank</th>
                    <th className="px-6 py-4 text-left text-cyan-400 font-bold">Hunter</th>
                    <th className="px-6 py-4 text-right text-cyan-400 font-bold">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-500/30">
                  {leaderboardData.map((entry, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-blue-900/20 transition-all duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className={`
                            ${entry.rank === 1 ? 'text-yellow-400' : 
                              entry.rank === 2 ? 'text-gray-400' :
                              entry.rank === 3 ? 'text-amber-700' : 'text-gray-500'} 
                            font-mono font-bold text-lg
                          `}>
                            #{entry.rank}
                          </span>
                          {entry.rank <= 3 && (
                            <span className="ml-2">
                              {entry.rank === 1 ? '👑' : entry.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${entry.rank <= 3 ? 'text-cyan-400' : 'text-gray-300'}`}>
                          {entry.username}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`
                          px-3 py-1 rounded-full font-mono
                          ${entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                            entry.rank === 2 ? 'bg-gray-500/20 text-gray-300' :
                            entry.rank === 3 ? 'bg-amber-700/20 text-amber-700' :
                            'bg-cyan-500/20 text-cyan-400'}
                        `}>
                          {entry.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}