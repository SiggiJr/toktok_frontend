import { Link } from 'react-router-dom'
import closeFriendIcon from '../assets/icons/3User.svg'
import arrowDownIcon from '../assets/icons/ArrowDownSquare.svg'
import bookmarkIcon from '../assets/icons/Bookmark.svg'
import favoritesIcon from '../assets/icons/Heart.svg'
import infoIcon from '../assets/icons/InfoSquare.svg'
import qrIcon from '../assets/icons/Scan.svg'
import settingIcon from '../assets/icons/Setting.svg'
import activityIcon from '../assets/icons/TimeSquare.svg'

import line from '../assets/icons/Line.svg'

function ProfileSettings() {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  return (
    <div>
      <ul className="flex flex-col gap-6 px-6 rounded-t-3xl border-2 border-zinc-600 absolute bottom-0 w-screen z-10 bg-white">
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
          <Link to={'/'} className="flex gap-5">
            <img src={arrowDownIcon} alt="Arrow Down Icon" className="w-[28px] h-[28px]" />
            <p>Archive</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={activityIcon} alt="Time Icon" className="w-[28px] h-[28px]" />
            <p>Your Activity</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={qrIcon} alt="Scan Icon" className="w-[28px] h-[28px]" />
            <p>QR Code</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={bookmarkIcon} alt="Bookmark Icon" className="w-[28px] h-[28px]" />
            <p>Saved</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={closeFriendIcon} alt="User Icon" className="w-[28px] h-[28px]" />
            <p>Close Friends</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={favoritesIcon} alt="Heart Icon" className="w-[28px] h-[28px]" />
            <p>Favorites</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={infoIcon} alt="Info Icon" className="w-[28px] h-[28px]" />
            <p>Information Center</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSettings
