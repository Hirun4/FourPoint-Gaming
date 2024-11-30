import React, { useState, useEffect } from 'react';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid'; // Use icons for a more professional look

export default function GamesList() {
  const [games, setGames] = useState([]);
  const [userVotes, setUserVotes] = useState({}); // To track user's vote for each game

  const fetchGames = async () => {
    const response = await fetch('/api/game');
    const data = await response.json();
    setGames(data);
  };

  const handleVote = async (id, type) => {
    const response = await fetch(`/api/game/vote/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    });

    if (response.ok) {
      fetchGames(); // Refresh the game data after voting
    }
  };

  const handleVoteClick = (gameId, type) => {
    const currentVote = userVotes[gameId];
    
    if (currentVote === type) {
      // If user clicks the same button again, remove the vote
      handleVote(gameId, 'remove');
    } else {
      // If the user clicks the opposite button (like to dislike or vice versa), update the vote
      handleVote(gameId, type);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-12 animate-glow">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-gray-800 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
          >
            {/* Render the image */}
            <img
              src={game.image ? `http://localhost:3000${game.image}` : '/default-image.jpg'}  // Ensure image is loaded correctly
              alt={game.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white hover:text-yellow-400 transition-colors duration-200">
                {game.title}
              </h2>
              <p className="text-gray-300 mt-2">{game.genre}</p>
              <p className="text-gray-400 mt-2">{game.description}</p>
              <div className="flex justify-between items-center mt-4 space-x-8">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleVoteClick(game._id, 'like')}
                    className={`text-lg ${userVotes[game._id] === 'like' ? 'text-green-500' : 'text-gray-300'} hover:text-green-400 transition-colors duration-300`}
                  >
                    <ThumbUpIcon className="w-7 h-7" />
                    <span className="ml-2">{game.likes}</span>
                  </button>
                  <button
                    onClick={() => handleVoteClick(game._id, 'dislike')}
                    className={`text-lg ${userVotes[game._id] === 'dislike' ? 'text-red-500' : 'text-gray-300'} hover:text-red-400 transition-colors duration-300`}
                  >
                    <ThumbDownIcon className="w-7 h-7" />
                    <span className="ml-2">{game.dislikes}</span>
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
