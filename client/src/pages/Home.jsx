import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import PastEventWinners from '../components/PastEventWinners';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
   //frontend
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      
      <div className="relative flex flex-col gap-8 items-center p-16 mx-auto mt-10">
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-800 to-black opacity-50 rounded-lg shadow-2xl animate-hero-blur"></div>

        <h1 className="text-7xl  font-extrabold text-center text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 animate-fade-in drop-shadow-lg leading-none pb-3">
          Welcome to FourPoint Gaming
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-xl leading-relaxed tracking-wide">
          Dive into the latest gaming insights, reviews, and top strategies. Whether you’re a casual gamer or a competitive pro, FourPoint has everything you need for your gaming journey.
        </p>
        <Link
          to="/search"
          className="px-5 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 transform hover:scale-110 transition-transform duration-300 ease-out rounded-lg text-white text-center font-semibold shadow-lg hover:shadow-pink-500"
        >
          View All Posts
        </Link>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="w-full py-8 bg-gradient-to-r from-green-600 to-lime-400 dark:bg-slate-800 relative">
        <CallToAction />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
     
      
      

      
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-12">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-flicker">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-yellow-400 hover:text-yellow-500 hover:underline"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
      
      <PastEventWinners />
    </div>
  );
}
