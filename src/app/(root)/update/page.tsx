'use client';

import { useState } from 'react';

export default function UpdateScore() {
  const [key, setKey] = useState('');
  const [email, setEmail] = useState('');
  const [score, setScore] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, email, score: parseInt(score) })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to update score');
        return;
      }

      setMessage(data.message);
      setEmail('');
      setScore('');
    } catch (err) {
      setError('Failed to update score');
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black text-white min-h-screen p-8">
      <div className="max-w-md mx-auto bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/30 p-6">
        <h1 className="text-2xl font-bold text-cyan-400 mb-6">Update Score</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Update Key</label>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Score</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg 
                     hover:opacity-90 transition-opacity"
          >
            Update Score
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded text-green-400">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded text-red-400">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}