import React, { useState, useEffect } from 'react';

// Sample game data with unique official sites
const initialGamesData = [
  { id: 1, title: 'The Legend of Zelda', genre: 'Adventure', popularity: 5, releaseDate: '2024-01-15', likes: 0, dislikes: 0, officialSite: 'https://www.zelda.com' },
  { id: 2, title: 'Apex Legends', genre: 'Shooter', popularity: 4, releaseDate: '2023-11-22', likes: 0, dislikes: 0, officialSite: 'https://www.ea.com/games/apex-legends' },
  { id: 3, title: 'Minecraft', genre: 'Sandbox', popularity: 5, releaseDate: '2023-07-18', likes: 0, dislikes: 0, officialSite: 'https://www.minecraft.net' },
  { id: 4, title: 'FIFA 24', genre: 'Sports', popularity: 3, releaseDate: '2024-09-10', likes: 0, dislikes: 0, officialSite: 'https://www.ea.com/games/fifa' },
  { id: 5, title: 'God of War', genre: 'Action', popularity: 5, releaseDate: '2023-12-05', likes: 0, dislikes: 0, officialSite: 'https://www.playstation.com/en-us/games/god-of-war/' },
  { id: 6, title: 'Hades', genre: 'Roguelike', popularity: 4, releaseDate: '2024-02-20', likes: 0, dislikes: 0, officialSite: 'https://www.supergiantgames.com/hades' },
  { id: 7, title: 'Among Us', genre: 'Social Deduction', popularity: 4, releaseDate: '2023-10-12', likes: 0, dislikes: 0, officialSite: 'https://www.innersloth.com/gameAmongUs.php' },
  { id: 8, title: 'Valorant', genre: 'FPS', popularity: 5, releaseDate: '2023-11-05', likes: 0, dislikes: 0, officialSite: 'https://playvalorant.com' },
  { id: 9, title: 'Cyberpunk 2077', genre: 'RPG', popularity: 3, releaseDate: '2024-03-15', likes: 0, dislikes: 0, officialSite: 'https://www.cyberpunk.net' },
  { id: 10, title: 'The Witcher 3', genre: 'RPG', popularity: 5, releaseDate: '2024-04-22', likes: 0, dislikes: 0, officialSite: 'https://thewitcher.com/en/witcher3' },
  { id: 11, title: 'Fall Guys', genre: 'Battle Royale', popularity: 4, releaseDate: '2024-05-10', likes: 0, dislikes: 0, officialSite: 'https://fallguys.com' },
  { id: 12, title: 'Fortnite', genre: 'Battle Royale', popularity: 5, releaseDate: '2024-06-30', likes: 0, dislikes: 0, officialSite: 'https://www.epicgames.com/fortnite' },
];

export default function Games() {
  const [games, setGames] = useState(initialGamesData);
  const [userVotes, setUserVotes] = useState({}); // Track user votes for each game
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Popularity');

  useEffect(() => {
    // Load user votes from the backend
    const loadUserVotes = async () => {
      const response = await fetch('/api/user/votes');
      const data = await response.json();
      setUserVotes(data);
    };

    loadUserVotes();
  }, []);

  const handleLike = async (id) => {
    try{
      console.log('Attempting to like game with ID ${id}');
    if (userVotes[id] === 'liked') {
      // Remove the like if it's already liked
      await fetch(`/api/game/${id}/like`, { method: 'DELETE' });
      setGames(games.map(game =>
        game.id === id ? { ...game, likes: game.likes - 1 } : game
      ));
      setUserVotes({ ...userVotes, [id]: null });
      await fetch('/api/user/votes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: id, vote: 'liked' })
      });
    } else {
      // Add the like
      if (userVotes[id] === 'disliked') {
        // alert('You have already disliked this game. You cannot like it now.');
        return;
      }

      await fetch(`/api/game/${id}/like`, { method: 'POST' });
      setGames(games.map(game =>
        game.id === id ? { ...game, likes: game.likes + 1 } : game
      ));
      setUserVotes({ ...userVotes, [id]: 'liked' });
      await fetch('/api/user/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: id, vote: 'liked' })
      });
    }
  }catch(error){
    console.error('Error handling like:',error);
  }
  };

  const handleDislike = async (id) => {
    if (userVotes[id] === 'disliked') {
      // Remove the dislike if it's already disliked
      await fetch(`/api/game/${id}/dislike`, { method: 'DELETE' });
      setGames(games.map(game =>
        game.id === id ? { ...game, dislikes: game.dislikes - 1 } : game
      ));
      setUserVotes({ ...userVotes, [id]: null });
      await fetch('/api/user/votes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: id, vote: 'disliked' })
      });
    } else {
      // Add the dislike
      if (userVotes[id] === 'liked') {
        // alert('You have already liked this game. You cannot dislike it now.');
        return;
      }

      await fetch(`/api/game/${id}/dislike`, { method: 'POST' });
      setGames(games.map(game =>
        game.id === id ? { ...game, dislikes: game.dislikes + 1 } : game
      ));
      setUserVotes({ ...userVotes, [id]: 'disliked' });
      await fetch('/api/user/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: id, vote: 'disliked' })
      });
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredGames = games.filter(game => {
    if (filter === 'All') return true;
    return game.genre === filter;
  });

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sort === 'Popularity') return b.popularity - a.popularity;
    if (sort === 'Release Date') return new Date(b.releaseDate) - new Date(a.releaseDate);
    return 0;
  });

  return (
    <div className='min-h-screen max-w-4xl mx-auto flex flex-col gap-6 p-4'>
      <h1 className='text-4xl font-extrabold mb-8 text-center  animate-glow'>Top Games</h1>
      
      <div className='flex flex-col md:flex-row md:justify-between mb-6'>
        <div className='mb-4 md:mb-0'>
          <label htmlFor='genre-filter' className='block text-gray-500'>Filter by Genre:</label>
          <select
            id='genre-filter'
            className='mt-1 block w-full border border-gray-500 rounded-md'
            value={filter}
            onChange={handleFilterChange}
          >
            <option className='block text-gray-500' value='All'>All</option>
            <option className='block text-gray-500'value='Adventure'>Adventure</option>
            <option className='block text-gray-500'value='Shooter'>Shooter</option>
            <option className='block text-gray-500'value='Sandbox'>Sandbox</option>
            <option className='block text-gray-500'value='Sports'>Sports</option>
            <option className='block text-gray-500'value='Action'>Action</option>
            <option className='block text-gray-500'value='Roguelike'>Roguelike</option>
            <option className='block text-gray-500'value='Social Deduction'>Social Deduction</option>
            <option className='block text-gray-500'value='FPS'>FPS</option>
            <option className='block text-gray-500'value='RPG'>RPG</option>
            <option className='block text-gray-500'value='Battle Royale'>Battle Royale</option>
          </select>
        </div>

        <div>
          <label htmlFor='sort-by' className='block text-gray-500'>Sort by:</label>
          <select 
            id='sort-by'
            className='mt-1 block w-full border border-gray-500 rounded-md'
            onChange={handleSortChange}
          >
            
            <option className='block text-gray-500'value='Release Date'>Release Date</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {sortedGames.map(game => (
          <div key={game.id} className='bg-gray-100 p-4 rounded-lg shadow-md flex flex-col'>
            <h2 className='text-xl font-semibold text-gray-800'>{game.title}</h2>
            <p className='text-gray-600'>Genre: {game.genre}</p>
            <p className='text-gray-600'>Popularity: {game.popularity}</p>
            <p className='text-gray-600'>Release Date: {new Date(game.releaseDate).toLocaleDateString()}</p>
            <div className='flex flex-col gap-2 mt-4'>
              <div className='flex justify-between'>
                <button 
                  className={`px-4 py-2 rounded ${userVotes[game.id] === 'liked' ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
                  onClick={() => handleLike(game.id)}
                >
                  Like ({game.likes})
                </button>
                <button 
                  className={`px-4 py-2 rounded ${userVotes[game.id] === 'disliked' ? 'bg-red-700' : 'bg-red-500'} text-white`}
                  onClick={() => handleDislike(game.id)}
                >
                  Dislike ({game.dislikes})
                </button>
              </div>
              <a
                href={game.officialSite}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-green-500 text-white px-4 py-2 rounded text-center block mt-2'
              >
                Official Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
