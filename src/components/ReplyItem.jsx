import { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch'

export default function ReplyItem({ reply, userId, setReload }) {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser, setPost, setReload)
  }, [])

  return (
    <div className=" flex flex-col my-6  border-gray-200 border-b-[1px] relative pb-5">
      <div className="flex gap-2 items-center ">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex gap-2 items-baseline">

          <h2 className="text-xl absolute top-0">{user.nickname}</h2>
          <p className="text-l text-[#616161] absolute top-0.5 right-44"> {reply.timestamp.substring(0, 10)}</p>

        </div>
      </div>
      <div>
        <p className="absolute top-6 left-14 max-w-[300px]">{reply.reply}</p>
      </div>
    </div>
  )
}
