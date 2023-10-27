import { Avatar, Radio, Switch } from '@material-tailwind/react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileSettings from '../components/ProfileSettings'
import brandIcon from '../assets/icons/Logo.svg'
import plusIcon from '../assets/icons/Plus2.svg'
import plusIconWhite from '../assets/icons/Plus2White.svg'
import edit from '../assets/icons/Edit.svg'
import editWhite from '../assets/icons/EditWhite.svg'
import moreIcon from '../assets/icons/MoreCircle.svg'
import moreIconWhite from '../assets/icons/MoreCircleWhite.svg'
import darkmodeWhite from '../assets/icons/darkmodeWhite.svg'
import darkmodeBlack from '../assets/icons/darkmodeBlack.svg'
import postIcon from '../assets/icons/posticon.svg'
import { getUser } from '../utils/fetches/getUserFetch.js'
import { myPostsFetch } from '../utils/fetches/getFeedFetch.js'
import MyProfilePosts from '../components/MyProfilePosts.jsx'

function MyProfilePage({ loading, setLoading, toggleTheme, darkMode }) {
  const [user, setUser] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [myPosts, setMyPosts] = useState([])
  console.log(`meine stacks`, user.following)

  const handleMoreCycleClick = () => {
    setIsExpanded(prevState => !prevState)
  }

  useEffect(() => {
    myPostsFetch(setMyPosts)
  }, [])

  useEffect(() => {
    getUser(setUser)
    setLoading(true)
  }, [loading])

  if (!user) {
    return <p>is Loading....</p>
  }

  return (
    <section className="relative flex flex-col px-6 pt-6 mb-6">
      <article className="flex gap-2 justify-between items-center">
        <div className="flex gap-2">
          <img src={brandIcon} alt="logo img" className="w-[32px] h-[32px]" />
          <h2 className="text-2xl">my profile</h2>
        </div>
        <div className="flex gap-2">
          <img
            className="w-[29px] h-[29px]"
            role="presentation"
            src={darkMode ? darkmodeWhite : darkmodeBlack}
            onClick={toggleTheme}
            alt="darkmode"
          />
          <Link to="/upload">
            <img src={darkMode ? plusIconWhite : plusIcon} alt=" plus icon" />
          </Link>
          <Link to={`/update/${user._id}`}>
            <img role="presentation" src={darkMode ? editWhite : edit} alt="edit icon" />
          </Link>
          <img
            role="presentation"
            src={darkMode ? moreIconWhite : moreIcon}
            alt="more icon"
            onClick={handleMoreCycleClick}
          />
        </div>
      </article>
      <div className="relative flex flex-col w-max items-end gap-4 w-[120px] h-[120px] mx-auto rounded-full my-6">
        <Avatar src={user.profile_image_url} alt="avatar" size="xxl" />
      </div>
      <article>
        <h2 className={darkMode ? 'text-white text-2xl text-center' : 'text-2xl text-center text-[#424242]'}>
          {user.nickname}
        </h2>
        <h3 className={darkMode ? 'text-white text-l text-center py-2' : 'text-l text-center py-2 text-[#424242]'}>
          {user.profession}
        </h3>
        <p className={darkMode ? 'text-white text-xs text-center' : 'text-xs text-center text-[#424242]'}>{user.bio}</p>
        <p className="text-xs text-center text-[#246BFD] pt-2">{user.website}</p>
      </article>
      <article>
        <ul className="flex justify-evenly mt-6 ">
          <li className="flex flex-col w-16 items-center">
            <span className={darkMode ? 'text-2xl text-white' : 'text-2xl text-[#424242]'}>{myPosts.length}</span>
            <p className={darkMode ? 'text-white text-sm' : 'text-[#424242] text-sm'}>Posts</p>
          </li>
          <li className="flex flex-col w-16 items-center">
            <span className={darkMode ? 'text-2xl text-white' : 'text-2xl text-[#424242]'}>
              {user.follower?.length}
            </span>
            <p className={darkMode ? 'text-white text-sm' : 'text-[#424242] text-sm'}>Followers</p>
          </li>
          <li className="flex flex-col w-16 items-center">
            <span className={darkMode ? 'text-2xl text-white' : 'text-2xl text-[#424242]'}>
              {user.following?.length}
            </span>
            <p className={darkMode ? 'text-white text-sm' : 'text-[#424242] text-sm'}>Following</p>
          </li>
        </ul>
      </article>
      <article>
        <div className="flex justify-center items-center gap-3 border-b-[3px] border-[#FF4D67] w-1/3 mt-8 pb-2">
          <img src={postIcon} alt=" post icon" />
          <h2 className="text-[#FF4D67]">Posts</h2>
        </div>
        <ul className="flex flex-wrap my-6 ">
          {myPosts.map(post => (
            <MyProfilePosts key={post._id} post={post} />
          ))}
        </ul>
      </article>
      {isExpanded && <ProfileSettings darkMode={darkMode} />}
    </section>
  )
}

export default MyProfilePage
