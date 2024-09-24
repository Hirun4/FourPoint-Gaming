import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { FaFlag } from 'react-icons/fa'; 

export default function Events() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    
    const simulatedEvents = [
      {
        id: 1,
        name: 'E-Sports Championship 2024',
        date: 'September 25, 2024',
        details: 'Join the top players in SriLanka for a thrilling championship.',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fourpoint-db442.appspot.com/o/1725292869496post.png?alt=media&token=2c3f3cd2-8e4d-4f71-ad49-bd4117e6caa6',
        prizePool: [
          { place: '1st', prize: '$8,000' },
          { place: '2nd', prize: '$5,000' },
          { place: '3rd', prize: '$2,500' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 2,
        name: 'Rocket league Championship',
        date: 'October 5, 2024',
        details: 'best prctice',
        imageUrl: 'https://www.rocketleague.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Aclip%2Cheight%3A1080%2Cwidth%3A1920%2Foutput%3Dformat%3Awebp%2FLCntpcKSRcOOnPvUXvWU&w=3840&q=75',
        prizePool: [
          { place: '1st', prize: '$6,000' },
          { place: '2nd', prize: '$3,500' },
          { place: '3rd', prize: '$1,500' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 3,
        name: 'Indie Games Festival',
        date: 'November 18, 2024',
        details: 'Showcasing the best indie games from around the globe.',
        imageUrl: 'https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_1280,c_limit/100-best-games-hp-b.jpg',
        prizePool: [
          { place: '1st', prize: '$5,000' },
          { place: '2nd', prize: '$2,500' },
          { place: '3rd', prize: '$1,000' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 4,
        name: 'Call of Duty Championship',
        date: 'December 22, 2024',
        details: 'Best shooter of the year',
        imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-franchise-hub-keyart-01-en-21nov23?$facebook$',
        prizePool: [
          { place: '1st', prize: '$6,000' },
          { place: '2nd', prize: '$3,000' },
          { place: '3rd', prize: '$1,200' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 5,
        name: 'Pro Gamer Bootcamp',
        date: 'January 14, 2025',
        details: 'Learn from the pros at this intensive gaming bootcamp.',
        imageUrl: 'https://h20.gg/wp-content/uploads/2022/01/SG_eSPORTS-3-min-300x300.jpg',
        prizePool: [
          { place: '1st', prize: '$1,000' },
          { place: '2nd', prize: '$5,00' },
          { place: '3rd', prize: '$2,00' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 6,
        name: 'GTA V Offroad Racing',
        date: 'March 10, 2025',
        details: 'Selecting best offroad beast',
        imageUrl: 'https://i.redd.it/65zciug55n4b1.jpg',
        prizePool: [
          { place: '1st', prize: '$2,000' },
          { place: '2nd', prize: '$1,500' },
          { place: '3rd', prize: '$1,000' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'brazil'],
      },
      {
        id: 7,
        name: 'Vehicle Meetup GTA V',
        date: 'April 2, 2025',
        details: 'Vehicle meetup in GTA V Online.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5I343bIecHq_NXJ8ENNlcMuv08ZuPh-eEg&s',
        prizePool: [
          { place: '1st', prize: '$3,000' },
          { place: '2nd', prize: '$1,500' },
          { place: '3rd', prize: '$750' },
        ],
        excludedCountries: ['Bangladesh', 'philipine', 'kenya'],
      },
      {
        id:8,
        name: 'Online Game Party',
        date: 'April 20, 2025',
        details: 'Discussion about Game experiences and small games',
        imageUrl: '',
        prizePool: [
          { place: '1st', prize: '$1,000'},
          {}
        ]

      },
    ];
    setEvents(simulatedEvents);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      document.getElementById('clock').innerText = now.toLocaleTimeString();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isSameDay = (d1, d2) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-slate-800 to-gray-900 text-white min-h-screen overflow-hidden">
      
      <h1 className="text-5xl font-extrabold mb-8 text-center text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-glow">
        Upcoming Gaming Events
      </h1>

      
      <div className="flex justify-center items-center mb-10 space-x-16">
        <div className="text-center">
          <div id="clock" className="text-6xl font-extrabold text-yellow-400 drop-shadow-md"></div>
          <p className="text-2xl text-gray-300 font-bold mt-2 animate-pulse">
            {date.toLocaleDateString()}
          </p>
        </div>
        <div>
          <Calendar
            className="shadow-xl rounded-lg border-2 border-gray-700 transform hover:scale-105 transition duration-500 ease-in-out text-green-500 font-bold"
            onChange={setDate}
            value={date}
            tileClassName={({ date: calendarDate }) => {
              if (isSameDay(calendarDate, new Date())) {
                return 'bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold';
              }
              return '';
            }}
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-pink-500/50 group"
            >
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full h-48 object-cover rounded-md mb-4 transform group-hover:scale-110 transition duration-300"
              />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">{event.name}</h2>
              <p className="text-gray-400 mt-2 text-lg">{event.date}</p>
              <p className="text-gray-300 mt-4">{event.details}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-yellow-400">Prize Pool:</h3>
                <ul className="list-disc pl-5 text-gray-300">
                  {event.prizePool.map((prize, index) => (
                    <li key={index} className="mt-1">
                      {prize.place}: {prize.prize}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-red-400">Excluded Countries:</h3>
                <ul className="list-disc pl-5 flex flex-wrap gap-2 text-gray-300">
                  {event.excludedCountries.map((country, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <FaFlag className="text-gray-500" /> {country}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/event/${event.id}`}
                className="inline-block mt-4 text-indigo-400 font-semibold hover:text-indigo-300 transition duration-300 ease-in-out"
              >
                Registration opens two week before the event →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-lg">No upcoming events at the moment.</p>
        )}
      </div>

      
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-white bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
          Past Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-6 bg-gradient-to-b from-yellow-400 to-red-400 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-white">Gaming Tournament</h3>
            <p className="text-gray-900 mt-2">June 15, 2024</p>
            <p className="text-white mt-4">A thrilling tournament featuring top players from around SriLanka.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-gray-900 font-semibold hover:text-gray-700 transition duration-300"
            >
              View Highlights →
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-b from-green-400 to-blue-400 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-white">E-Sports Showdown</h3>
            <p className="text-gray-900 mt-2">October 20, 2023</p>
            <p className="text-white mt-4">An epic showdown between top e-sports teams.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-gray-900 font-semibold hover:text-gray-700 transition duration-300"
            >
              View Highlights →
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-white">Gaming Expo</h3>
            <p className="text-gray-900 mt-2">December 5, 2023</p>
            <p className="text-white mt-4">An expo showcasing the latest in gaming technology.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-gray-900 font-semibold hover:text-gray-700 transition duration-300"
            >
              View Highlights →
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
