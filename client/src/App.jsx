import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Games from './pages/GameList';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Events from './pages/Events';
import TopGameReviews from './pages/TopGameReviews';
import AdminGamesPage from './pages/games/AdminGamesPage';
import GamesList from './pages/GameList';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
          <Route path='/admingames' element={<AdminGamesPage />} />
        </Route>

        <Route path='/Games' element={<GamesList />} />
        <Route path='/events' element={<Events />} />
        <Route path='/TopGameReviews' element={<TopGameReviews />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
