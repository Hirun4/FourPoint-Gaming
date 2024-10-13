import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='relative flex flex-col sm:flex-row p-6 bg-gradient-to-r from-purple-900 via-black to-blue-900 justify-center items-center border border-pink-600 rounded-tl-3xl rounded-br-3xl shadow-lg transform  transition-transform duration-300 ease-in-out overflow-hidden'>
      
     
      <div className='flex-1 flex flex-col items-center sm:items-start space-y-4'>
        <h2 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-500 to-red-500 tracking-wide leading-tight '>
          Ready to play with us?
        </h2>
        <p className='text-gray-300 text-xl font-bold'>
          Join our Discord channel for exclusive events, updates, and a chance to connect with fellow gamers!
        </p>
        <Button gradientDuoTone='pinkToOrange' className='rounded-lg text-xl font-semibold px-8 py-3 transition-transform transform  '>
          <a
            href='https://discord.gg/f6eYn8dd'
            target='_blank'
            rel='noopener noreferrer'
            className='block'>
            Join Our Discord
          </a>
        </Button>
      </div>

      
      <div className='p-6 flex-1 relative'>
        <img
          src='https://files.oaiusercontent.com/file-87aAPSY7eCgSpYKQE3KcpzP5?se=2024-09-07T23%3A43%3A45Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dee374a87-804e-4fde-84a1-aebfe2fd5061.webp&sig=RfXomSVm0s8%2BmhVDJRH5%2BWQ%2BI%2BUbolwcyq5MhVnrLGA%3D'
          alt='Gaming Action'
          className='rounded-xl shadow-lg border-4 border-blue-500 transform  transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-pink-500 via-transparent to-blue-500 opacity-25 rounded-lg animate-pulse'></div>
      </div>

      
      <div className='absolute -top-10 left-0 w-16 h-16 bg-pink-500 opacity-50 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute -bottom-10 right-0 w-16 h-16 bg-blue-500 opacity-50 rounded-full blur-3xl animate-pulse'></div>
    </div>
  );
}
