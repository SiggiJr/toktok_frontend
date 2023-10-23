import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch.js'
import { Avatar } from '@material-tailwind/react'
import postIcon from '../assets/icons/posticon.svg'
import SetFollow from '../components/SetFollow.jsx'
import backIcon from '../assets/icons/back.svg'

function OtherUserProfile() {
  const userId = useParams().id
  const [user, setUser] = useState()
  const [follow, setFollow] = useState('Follow')

  useEffect(() => {
    getUserProfile(userId, setUser)
  }, [])

  if (!user) {
    return
  }

  return (
    <section className="flex flex-col px-6 pt-6">
      <article className="flex gap-2 justify-between items-center">
        <div className="flex gap-2">
          <img src={backIcon} alt="logo img" className="w-[17px] h-[32px]" />
          <h2 className="text-2xl text-center ">{user.nickname}</h2>
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
        <ul className="flex justify-between mt-6 mx-7">
          <li className="flex flex-col items-center">
            <span className="text-2xl">{user.posts.length}</span>
            <p className="text-sm text-[#424242]">posts</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-2xl">{user.follower.length}</span>
            <p className="text-sm text-[#424242]">Followers</p>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-2xl">{user.following.length}</span>
            <p className="text-sm text-[#424242]">Following</p>
          </li>
        </ul>
      </article>
      <div className="mt-4 flex w-[27]">
        <SetFollow nickname={user.nickname} follower={user.follower || []} />
      </div>
      <article>
        <div className="flex justify-center items-center gap-3 border-b-[3px] border-[#FF4D67] w-1/3 mt-8 pb-2">
          <img src={postIcon} alt=" post icon" />
          <h2 className="text-[#FF4D67]">Posts</h2>
        </div>
        <ul className="flex flex-wrap my-6 overflow-hidden">
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>{' '}
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>{' '}
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>
          <li className="w-1/3 overflow-hidden px-1">
            <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
          </li>
        </ul>
      </article>
    </section>
  )
}

export default OtherUserProfile
