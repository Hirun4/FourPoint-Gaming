import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

export default function Events() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Simulated data for example purposes
    const simulatedEvents = [
      {
        id: 1,
        name: 'E-Sports Championship 2024',
        date: 'September 25, 2024',
        details: 'Join the top players in SriLanka for a thrilling championship.',
      },
      {
        id: 2,
        name: 'Virtual Reality Gaming Expo',
        date: 'October 5, 2024',
        details: 'Experience the latest in VR gaming technology.',
      },
      {
        id: 3,
        name: 'Indie Games Festival',
        date: 'November 18, 2024',
        details: 'Showcasing the best indie games from around the globe.',
      },
      {
        id: 4,
        name: ' Gaming Convention',
        date: 'December 22, 2024',
        details: 'Celebrate the holiday season with gaming enthusiasts.',
      },
      {
        id: 5,
        name: 'Pro Gamer Bootcamp',
        date: 'January 14, 2025',
        details: 'Learn from the pros at this intensive gaming bootcamp.',
      },
      {
        id: 6,
        name: ' Gaming Gala',
        date: 'March 10, 2025',
        details: 'A night of gaming, music, and entertainment.',
      },
      {
        id: 7,
        name: 'Vehicle Meetup Gta V',
        date: 'April 2, 2025',
        details: 'vehicle meetup in GTA V Online.',
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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">Upcoming Gaming Events</h1>

      <div className="flex justify-center items-center mb-10 space-x-16">
        <div className="text-center">
          <div id="clock" className="text-5xl font-extrabold "></div>
          <p className="text-2xl text-gray-500 font-bold mt-2">{date.toLocaleDateString()}</p>
        </div>
        <div>
          <Calendar
            className="shadow-lg rounded-lg text-green-500 font-bold"
            onChange={setDate}
            value={date}
            tileClassName="text-wite-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events && events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-orange-500">{event.name}</h2>
              <p className="text-gray-600 mt-2">{event.date}</p>
              <p className="text-gray-700 mt-4">{event.details}</p>
              <Link
                to={`/event/${event.id}`}
                className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
              >
                Registration opens one week before the relevant date
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg">No upcoming events at the moment.</p>
        )}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Past Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example past events */}
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> Gaming Tournament</h3>
            <p className="text-gray-600 mt-2">June 15, 2024</p>
            <p className="text-gray-700 mt-4">A thrilling tournament featuring top players from around SriLanka.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> E-Sports Showdown</h3>
            <p className="text-gray-600 mt-2">October 20, 2023</p>
            <p className="text-gray-700 mt-4">An epic showdown between top e-sports teams.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> Gaming Expo</h3>
            <p className="text-gray-600 mt-2">December 5, 2023</p>
            <p className="text-gray-700 mt-4">An expo showcasing the latest in gaming technology.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700">New Year Gaming Bash</h3>
            <p className="text-gray-600 mt-2">January 1, 2024</p>
            <p className="text-gray-700 mt-4">Celebrating the new year with a gaming marathon.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> Gaming Fiesta</h3>
            <p className="text-gray-600 mt-2">March 21, 2024</p>
            <p className="text-gray-700 mt-4">A vibrant celebration of gaming culture.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> E-Sports Clash</h3>
            <p className="text-gray-600 mt-2">June 10, 2024</p>
            <p className="text-gray-700 mt-4">Top e-sports teams compete for glory.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> Indie Game Fest</h3>
            <p className="text-gray-600 mt-2">November 8, 2023</p>
            <p className="text-gray-700 mt-4">Showcasing the best indie games of the season.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> Battle Royale</h3>
            <p className="text-gray-600 mt-2">December 25, 2023</p>
            <p className="text-gray-700 mt-4">An exciting battle royale event to close the year.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700"> E-Sports Invitational</h3>
            <p className="text-gray-600 mt-2">April 14, 2024</p>
            <p className="text-gray-700 mt-4">Top players from around SriLanka compete in this invitational event.</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-yellow-700">COD Tounement</h3>
            <p className="text-gray-600 mt-2">July 12, 2024</p>
            <p className="text-gray-700 mt-4">Tournement with best COD players</p>
            <Link
              to="/past-event-details"
              className="inline-block mt-4 text-teal-500 font-semibold hover:underline"
            >
              View Highlights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
