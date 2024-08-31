import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

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
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='   text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 rounded-lg text-white py-4 animate-glow'>Welcome to FourPoint Gaming</h1>
        <p className='text-gray-500 text-sm sm:text-sm font-bold'>
        Explore our latest insights and tips on gaming trends, reviews, and strategies. Whether
        you're a casual gamer or a hardcore enthusiast, we've got something for everyone.
        </p>
        <Link
          to='/search'
          className='px-2 py-1 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 inline-block rounded-lg text-white text-center hover:animate-pulse'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
   
    </div>
  );
}
