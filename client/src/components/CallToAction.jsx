import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='relative flex flex-col sm:flex-row p-6 bg-gradient-to-r from-purple-900 via-black to-blue-900 justify-center items-center border border-pink-600 rounded-tl-3xl rounded-br-3xl shadow-lg transform hover:scale-100 transition-transform duration-300 ease-in-out'>
      
      {/* Text Section */}
      <div className='flex-1 flex flex-col items-center sm:items-start space-y-4'>
        <h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-500 to-red-500 tracking-wide leading-tight '>
          Ready to play with us?
        </h2>
        <p className='text-gray-300 text-xl font-bold'>
          Join our Discord channel for exclusive events, updates, and a chance to connect with fellow gamers!
        </p>
        <Button gradientDuoTone='pinkToOrange' className='rounded-lg text-xl font-semibold px-8 py-3 transition-transform transform hover:scale-100 '>
          <a
            href='https://discord.gg/f6eYn8dd'
            target='_blank'
            rel='noopener noreferrer'
            className='block'>
            Join Our Discord
          </a>
        </Button>
      </div>

      {/* Image Section */}
      <div className='p-6 flex-1 relative'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/fourpoint-db442.appspot.com/o/Screenshot%202024-09-08%20131658.png?alt=media&token=90ce3863-ff78-4537-b678-b0ba4b05d2ba'
          alt='Gaming Action'
          className='rounded-xl shadow-lg border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-pink-500 via-transparent to-blue-500 opacity-25 rounded-lg animate-pulse'></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className='absolute -top-10 left-0 w-16 h-16 bg-pink-500 opacity-50 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute -bottom-10 right-0 w-16 h-16 bg-blue-500 opacity-50 rounded-full blur-3xl animate-pulse'></div>
    </div>
  );
}
