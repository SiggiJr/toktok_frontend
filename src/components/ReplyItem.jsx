import { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch'

export default function ReplyItem({ reply, userId, setReload }) {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser, setPost, setReload)
  }, [])

  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex gap-2 items-center ">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex gap-2 items-baseline">
          <h2 className="text-xl">{reply.nickname}</h2>
          <p className="text-[16px] text-[#616161]"> {reply.timestamp.substring(0, 10)}</p>
          <p className="text-[16px] text-[#616161]">{reply.timestamp.substring(11, 16)}</p>
        </div>
      </div>
      <div className=" border-gray-200 border-b-[1px] pb-2">
        <p>{reply.reply}</p>
      </div>
    </div>
  )
}
