import React from 'react';

const eventWinners = [
  {
    name: 'John Doe',
    event: 'Elden Ring Championship 2024',
    place: '1st Place',
    prize: '$3,000',
  },
  {
    name: 'Jane Smith',
    event: 'God of War Arena',
    place: '2nd Place',
    prize: '$2,000',
  },
  {
    name: 'Alex Johnson',
    event: 'Red Dead Redemption II Showdown',
    place: '3rd Place',
    prize: '$1,000',
  },
  {
    name: 'Emily Davis',
    event: 'The Last of Us Battle Royale',
    place: '1st Place',
    prize: '$6,000',
  },
  {
    name: 'Michael Brown',
    event: 'Cyberpunk 2077 Faceoff',
    place: '2nd Place',
    prize: '$3,000',
  },
  {
    name: 'Sarah Lee',
    event: 'Assassin\'s Creed Valhalla Conquest',
    place: '3rd Place',
    prize: '$5,000',
  },
  {
    name: 'David Wilson',
    event: 'Horizon Forbidden West Tournament',
    place: '1st Place',
    prize: '$5,000',
  },
  {
    name: 'Olivia Martinez',
    event: 'Ghost of Tsushima Showdown',
    place: '2nd Place',
    prize: '$2,000',
  },
  {
    name: 'Daniel Rodriguez',
    event: 'Resident Evil Village Survival',
    place: '3rd Place',
    prize: '$2,000',
  },
  {
    name: 'Sophia White',
    event: 'Marvel\'s Spider-Man Championship',
    place: '1st Place',
    prize: '$5,000',
  },
  {
    name: 'Oliver White',
    event: 'Fortnite World Cup',
    place: '1st Place',
    prize: '$5,000',
  },
  {
    name: 'Sophia Green',
    event: 'Valorant Masters',
    place: '2nd Place',
    prize: '$1,500',
  },
  {
    name: 'Liam Black',
    event: 'Call of Duty Championship',
    place: '3rd Place',
    prize: '$5,000',
  },
  {
    name: 'Emma Blue',
    event: 'Overwatch League Finals',
    place: '1st Place',
    prize: '$20,000',
  },
  {
    name: 'Noah Gray',
    event: 'League of Legends Worlds',
    place: '2nd Place',
    prize: '$9,000',
  },
];

const PastEventWinners = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 py-12 px-8">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-flicker mb-10 text-center">Past Event Winners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventWinners.map((winner, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 via-slate-700 to-gray-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:rotate-1"
          >
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-yellow-400 ">{winner.name}</h3>
              <p className="text-lg font-medium text-gray-300">{winner.event}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-400">{winner.place}</span>
              <span className="text-xl text-red-500 font-extrabold">{winner.prize}</span>
            </div>
            <div className="w-full mt-4 h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEventWinners;
