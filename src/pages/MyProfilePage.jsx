import { Avatar, Radio, Switch } from '@material-tailwind/react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileSettings from '../components/ProfileSettings'
import brandIcon from '../assets/icons/Logo.svg'
import plusIcon from '../assets/icons/Plus2.svg'
import edit from '../assets/icons/Edit.svg'
import moreIcon from '../assets/icons/MoreCircle.svg'
import postIcon from '../assets/icons/posticon.svg'
import { getUser } from '../utils/fetches/getUserFetch.js'
import { myPostsFetch } from '../utils/fetches/getFeedFetch.js'
import MyProfilePosts from '../components/MyProfilePosts.jsx'

function MyProfilePage({ loading, setLoading, toggleDarkmode, setToggleDarkmode }) {
  const [user, setUser] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [myPosts, setMyPosts] = useState([])

  const handleMoreCycleClick = () => {
    setIsExpanded(prevState => !prevState)
  }

  useEffect(() => {
    myPostsFetch(setMyPosts)
  }, [])

  const handleEditClick = () => {}

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
          <Link to="/upload">
            <img src={plusIcon} alt=" plus icon" />
          </Link>
          <Link to={`/update/${user._id}`}>
            <img role="presentation" src={edit} alt="edit icon" onClick={handleEditClick} />
          </Link>
          <img role="presentation" src={moreIcon} alt="more icon" onClick={handleMoreCycleClick} />
        </div>
      </article>
      <div className="relative flex flex-col w-max items-end gap-4 w-[120px] h-[120px] mx-auto rounded-full my-6">
        <Avatar src={user.profile_image_url} alt="avatar" size="xxl" />
      </div>
      <article>
        <h2 className="text-2xl text-center ">{user.nickname}</h2>
        <h3 className="text-l text-center py-2">{user.profession}</h3>
        <p className=" text-xs text-center text-[#424242]">{user.bio}</p>
        <p className="text-xs text-center text-[#246BFD] pt-2">{user.website}</p>
      </article>
      <article>
        <ul className="flex justify-evenly mt-6 ">
          <li className="flex flex-col w-16 items-center">
            <span className="text-2xl">{user.posts?.length}</span>
            <p className="text-sm text-[#424242]">Posts</p>
          </li>
          <li className="flex flex-col w-16 items-center">
            <span className="text-2xl">{user.follower?.length}</span>
            <p className="text-sm text-[#424242]">Followers</p>
          </li>
          <li className="flex flex-col w-16 items-center">
            <span className="text-2xl">{user.following?.length}</span>
            <p className="text-sm text-[#424242]">Following</p>
          </li>
        </ul>
      </article>
      <article>
        <div className="flex justify-center items-center gap-3 border-b-[3px] border-[#FF4D67] w-1/3 mt-8 pb-2">
          <img src={postIcon} alt=" post icon" />
          <h2 className="text-[#FF4D67]">Posts</h2>
        </div>
        <ul className="flex flex-wrap my-6 overflow-hidden">
          {myPosts.map(post => (
            <MyProfilePosts key={post._id} post={post} />
          ))}
        </ul>
      </article>
      {isExpanded && <ProfileSettings />}
    </section>
  )
}

export default MyProfilePage
