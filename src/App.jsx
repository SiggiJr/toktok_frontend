import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Register from './pages/Register.jsx'
import Brandscreen from './pages/Brandscreen.jsx'
import Login from './pages/Login.jsx'
import Feeds from './pages/Feeds.jsx'
import Protected from './components/Protected.jsx'
import MyProfilePage from './pages/MyProfilePage.jsx'
import OtherUserProfile from './pages/OtherUserProfile.jsx'
import CloseFriends from './pages/CloseFriends.jsx'
import Details from './pages/Details.jsx'
import FavPage from './pages/FavPage.jsx'
import HashtagPage from './pages/HashtagPage.jsx'
import SavedPosts from './pages/SavedPosts.jsx'
import Upload from './pages/Upload.jsx'
import NavbarMobile from './shared/NavbarMobile.jsx'
import CommentDetails from './pages/CommentDetails.jsx'
import CreateUserProfile from './pages/CreateUserProfile.jsx'
import UpdateUserProfile from './pages/UpdateUserProfile.jsx'
import NewPostPage from './pages/NewPostPage.jsx'
import SearchPage from './pages/SearchPage.jsx'

function App() {
  const [navbarLoading, setNavbarLoading] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<Brandscreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/register/:id" element={<CreateUserProfile />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/profile" element={<MyProfilePage loading={navbarLoading} setLoading={setNavbarLoading} />} />
          <Route
            path="/user/:id"
            element={<OtherUserProfile loading={navbarLoading} setLoading={setNavbarLoading} />}
          />
          <Route path="/closefriends" element={<CloseFriends />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:postId" element={<CommentDetails />} />
          <Route path="/favorites" element={<FavPage />} />
          <Route path="/feed/:hashtag" element={<HashtagPage />} />
          <Route path="/saved" element={<SavedPosts />} />

          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/:id" element={<NewPostPage />} />
          <Route path="/update/:id" element={<UpdateUserProfile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/comment/:postId" element={<CommentDetails />} />
        </Route>
      </Routes>
      {location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register' ? null : (
        <NavbarMobile />
      )}
    </>
  )
}

export default App
