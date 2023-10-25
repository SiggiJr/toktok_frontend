import { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch'

export default function ReplyItem({ reply, userId, setReload }) {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser, setPost, setReload)
  }, [])

  return (
    <div>
      <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
      <h2>{reply.nickname}</h2>
      <p>{reply.reply}</p>
      <p>{reply.timestamp}</p>
    </div>
  )
}
