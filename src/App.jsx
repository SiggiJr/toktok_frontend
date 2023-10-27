import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Register from './pages/Register.jsx'
import Brandscreen from './pages/Brandscreen.jsx'
import Login from './pages/Login.jsx'
import Feeds from './pages/Feeds.jsx'
import Protected from './components/Protected.jsx'
import MyProfilePage from './pages/MyProfilePage.jsx'
import OtherUserProfile from './pages/OtherUserProfile.jsx'
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
import ReplyPage from './pages/ReplyPage.jsx'

function App() {
  const [navbarLoading, setNavbarLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode')
    return storedTheme ? JSON.parse(storedTheme) : false
  })
  const themeStatus = localStorage.getItem('darkMode')
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const themeMode = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Brandscreen />} />
        <Route path="/register" element={<Register darkMode={darkMode} />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/register/:id" element={<CreateUserProfile darkMode={darkMode} />} />
          <Route
            path="/feed"
            element={<Feeds darkMode={darkMode} reload={navbarLoading} setReload={setNavbarLoading} />}
          />
          <Route
            path="/profile"
            element={
              <MyProfilePage
                darkMode={darkMode}
                loading={navbarLoading}
                setLoading={setNavbarLoading}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/user/:id"
            element={<OtherUserProfile loading={navbarLoading} setLoading={setNavbarLoading} darkMode={darkMode} />}
          />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:postId" element={<CommentDetails darkMode={darkMode} />} />
          <Route path="/favorites" element={<FavPage />} />
          <Route path="/saved" element={<SavedPosts />} />
          <Route path="/upload" element={<Upload darkMode={darkMode} />} />
          <Route path="/upload/:id" element={<NewPostPage darkMode={darkMode} />} />
          <Route path="/update/:id" element={<UpdateUserProfile darkMode={darkMode} />} />
          <Route
            path="/search"
            element={<SearchPage setReload={setNavbarLoading} reload={navbarLoading} darkMode={darkMode} />}
          />
          <Route
            path="/comment/:postId"
            element={<CommentDetails darkMode={darkMode} setReload={setNavbarLoading} reload={navbarLoading} />}
          />
          <Route
            path="/comment/:postId/reply/:id"
            element={<ReplyPage darkMode={darkMode} setReload={setNavbarLoading} reload={navbarLoading} />}
          />
          <Route
            path="/favorite/:id"
            element={<FavPage setReload={setNavbarLoading} reload={navbarLoading} darkMode={darkMode} />}
          />
        </Route>
      </Routes>
      {location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register' ? null : (
        <NavbarMobile darkMode={darkMode} />
      )}
    </ThemeProvider>
  )
}

export default App
