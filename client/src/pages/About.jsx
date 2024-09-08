export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center  text-white bg-slate-800'>
      <div className='max-w-4xl mx-auto p-6 text-center'>
        <div className='bg-gray-900 bg-opacity-75 rounded-lg shadow-lg p-8'>
          <h1 className='text-6xl font-extrabold mb-8 text-center  bg-clip-text  animate-glow'>
            About FourPoint Gaming
          </h1>
          <div className='text-lg flex flex-col gap-6'>
            <p className='leading-relaxed'>
              Welcome to FourPoint! This platform was created to bring gamers
              together and provide a space for them to discover, discuss, and
              enjoy their favorite games. FourPoint is the ultimate destination for
              gamers who are passionate about all things gaming.
            </p>

            <p className='leading-relaxed'>
              On FourPoint, you'll find the latest news, reviews, and updates on
              popular games, as well as guides and tutorials to help you level up
              your gameplay. Our goal is to keep you informed and engaged with
              the gaming world by offering a wide range of content and community
              features.
            </p>

            <p className='leading-relaxed'>
              We encourage you to join our community, share your thoughts, and
              interact with fellow gamers. Whether you’re looking for game reviews,
              tips, or just a place to connect with others who share your passion,
              FourPoint is here for you. Dive in, explore, and let’s game on!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
