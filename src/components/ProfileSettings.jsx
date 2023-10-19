import { Link, NavLink } from 'react-router-dom'
import user3 from '../assets/icons/3User.svg'
import arrowdown from '../assets/icons/ArrowDownSquare.svg'
import bookmark from '../assets/icons/Bookmark.svg'
import heart from '../assets/icons/Heart.svg'
import infosquare from '../assets/icons/InfoSquare.svg'
import scan from '../assets/icons/Scan.svg'
import setting from '../assets/icons/Setting.svg'
import timesquare from '../assets/icons/TimeSquare.svg'
import line from '../assets/icons/Line.svg'

function ProfileSettings() {
  return (
    <div>
      <ul className="flex flex-col gap-6 px-6 rounded-t-3xl border-2 border-zinc-600 absolute bottom-0 w-screen z-10">
        <div className="flex mx-auto pt-2">
          <img src={line} alt="" />
        </div>

        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={setting} alt="Setting Icon" className="w-[28px] h-[28px]" />
            <p>Settings</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={arrowdown} alt="Arrow Down Icon" className="w-[28px] h-[28px]" />
            <p>Archive</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={timesquare} alt="Time Icon" className="w-[28px] h-[28px]" />
            <p>Your Activity</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={scan} alt="Scan Icon" className="w-[28px] h-[28px]" />
            <p>QR Code</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={bookmark} alt="Bookmark Icon" className="w-[28px] h-[28px]" />
            <p>Saved</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={user3} alt="User Icon" className="w-[28px] h-[28px]" />
            <p>Close Friends</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={heart} alt="Heart Icon" className="w-[28px] h-[28px]" />
            <p>Favorites</p>
          </Link>
        </li>
        <li>
          <Link to={'/'} className="flex gap-5">
            <img src={infosquare} alt="Info Icon" className="w-[28px] h-[28px]" />
            <p>Information Center</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSettings
