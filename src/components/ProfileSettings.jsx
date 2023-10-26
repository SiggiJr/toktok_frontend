import { Link, useNavigate } from 'react-router-dom'
import closeFriendIcon from '../assets/icons/3User.svg'
import arrowDownIcon from '../assets/icons/ArrowDownSquare.svg'
import bookmarkIcon from '../assets/icons/Bookmark.svg'
import favoritesIcon from '../assets/icons/Heart.svg'
import logoutIcon from '../assets/icons/logout.svg'
import settingIcon from '../assets/icons/Setting.svg'
import activityIcon from '../assets/icons/TimeSquare.svg'

import line from '../assets/icons/Line.svg'
import { logoutFetch } from '../utils/fetches/loginFetch.js'

function ProfileSettings() {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    logoutFetch()
    navigate('/login')
  }

  return (
    <div>
      <ul className="flex flex-col gap-6 px-6 rounded-t-3xl border-2 border-zinc-600 absolute fixed bottom-0 w-screen z-10  bg-white pb-4">
        <div className="flex mx-auto pt-2">
          <img src={line} alt="" />
        </div>

        <li>
          <Link to={`/update/${userId}`} className="flex gap-5">
            <img src={settingIcon} alt="Setting Icon" className="w-[28px] h-[28px]" />
            <p>Settings</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex gap-5">
            <img src={arrowDownIcon} alt="Arrow Down Icon" className="w-[28px] h-[28px]" />
            <p>Archive</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex gap-5">
            <img src={activityIcon} alt="Time Icon" className="w-[28px] h-[28px]" />
            <p>Toggle Theme</p>
          </Link>
        </li>

        <li>
          <Link to="/" className="flex gap-5">
            <img src={bookmarkIcon} alt="Bookmark Icon" className="w-[28px] h-[28px]" />
            <p>Saved</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex gap-5">
            <img src={closeFriendIcon} alt="User Icon" className="w-[28px] h-[28px]" />
            <p>Close Friends</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex gap-5">
            <img src={favoritesIcon} alt="Heart Icon" className="w-[28px] h-[28px]" />
            <p>Favorites</p>
          </Link>
        </li>
        <li role="presentation" onClick={logout} className="flex gap-5">
          <img src={logoutIcon} alt="Info Icon" className="w-[26px] h-[26px]" />
          <p className="text-red-600">Logout</p>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSettings
