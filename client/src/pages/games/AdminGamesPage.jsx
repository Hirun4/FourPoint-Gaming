import React, { useState, useEffect } from 'react';

export default function AdminGamesPage() {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ title: '', genre: '', releaseDate: '', officialSite: '' });
  const [editGame, setEditGame] = useState(null);
  const [editGameData, setEditGameData] = useState({});

  const fetchGames = async () => {
    const response = await fetch('/api/game');
    const data = await response.json();
    setGames(data);
  };

  const handleCreateGame = async () => {
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame),
    });
    setNewGame({ title: '', genre: '', releaseDate: '', officialSite: '' });
    fetchGames();
  };

  const handleDeleteGame = async (id) => {
    await fetch(`/api/game/${id}`, { method: 'DELETE' });
    fetchGames();
  };

  const handleUpdateGame = async (id) => {
    await fetch(`/api/game/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editGameData),
    });
    setEditGame(null);
    fetchGames();
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-5 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Admin Games Management</h1>

      {/* Create New Game */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create New Game</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={newGame.title}
            onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Genre"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={newGame.genre}
            onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
          />
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={newGame.releaseDate}
            onChange={(e) => setNewGame({ ...newGame, releaseDate: e.target.value })}
          />
          <input
            type="url"
            placeholder="Official Site"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={newGame.officialSite}
            onChange={(e) => setNewGame({ ...newGame, officialSite: e.target.value })}
          />
          <button
            onClick={handleCreateGame}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Game
          </button>
        </div>
      </div>

      {/* Display Games */}
      <div className="space-y-6">
        {games.map((game) => (
          <div key={game._id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">{game.title}</h3>
            <p className="text-gray-600">Genre: {game.genre}</p>
            <p className="text-gray-600">Release Date: {new Date(game.releaseDate).toLocaleDateString()}</p>
            <p className="text-gray-600">Official Site: <a href={game.officialSite} className="text-blue-500">{game.officialSite}</a></p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => setEditGame(game)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteGame(game._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>

            {/* Edit Form */}
            {editGame && editGame._id === game._id && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-700 mb-4">Edit Game</h4>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  defaultValue={game.title}
                  onChange={(e) => setEditGameData({ ...editGameData, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Genre"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  defaultValue={game.genre}
                  onChange={(e) => setEditGameData({ ...editGameData, genre: e.target.value })}
                />
                <input
                  type="date"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  defaultValue={game.releaseDate.split('T')[0]}
                  onChange={(e) => setEditGameData({ ...editGameData, releaseDate: e.target.value })}
                />
                <input
                  type="url"
                  placeholder="Official Site"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                  defaultValue={game.officialSite}
                  onChange={(e) => setEditGameData({ ...editGameData, officialSite: e.target.value })}
                />
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleUpdateGame(game._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditGame(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
