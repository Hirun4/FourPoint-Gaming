import React, { useState, useEffect } from 'react';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'; // Heroicons v2

export default function GamesList() {
  const [games, setGames] = useState([]);
  const [userVote, setUserVote] = useState({}); // Track user's vote on each game

  const fetchGames = async () => {
    const response = await fetch('/api/game');
    const data = await response.json();
    setGames(data);
  };

  const fetchUserVote = async (gameId) => {
    // Fetch user's vote status for the game
    const response = await fetch(`/api/game/vote/status/${gameId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setUserVote(prevState => ({ ...prevState, [gameId]: data.type }));
  };

  const handleVote = async (id, type) => {
    // If the user has already voted, do not allow further voting
    if (userVote[id]) return;

    const response = await fetch(`/api/game/vote/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    });

    const data = await response.json();
    setGames(games.map(game => (game._id === id ? data : game))); // Update game vote count
    setUserVote(prevState => ({ ...prevState, [id]: type })); // Store the user's vote
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-12 animate__animated animate__fadeIn">
          Explore Top Games
        </h1>

        <div className="space-y-12">
          {games.map((game) => (
            <div
              key={game._id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">{game.title}</h2>
              <p className="text-lg text-gray-600 mb-4">Genre: {game.genre}</p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Likes: </strong>{game.likes} | <strong>Dislikes: </strong>{game.dislikes}
              </p>

              <div className="flex justify-center space-x-6 mb-6">
                <button
                  onClick={() => handleVote(game._id, 'like')}
                  className={`flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-green-600 hover:scale-105 ${userVote[game._id] === 'like' ? 'bg-green-700 cursor-not-allowed' : ''}`}
                  disabled={userVote[game._id] === 'like'}
                >
                  <ThumbUpIcon className="h-6 w-6 mr-2" />
                  Like
                </button>
                <button
                  onClick={() => handleVote(game._id, 'dislike')}
                  className={`flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-red-600 hover:scale-105 ${userVote[game._id] === 'dislike' ? 'bg-red-700 cursor-not-allowed' : ''}`}
                  disabled={userVote[game._id] === 'dislike'}
                >
                  <ThumbDownIcon className="h-6 w-6 mr-2" />
                  Dislike
                </button>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={game.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 hover:underline transform transition-all hover:scale-105"
                >
                  Official Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
