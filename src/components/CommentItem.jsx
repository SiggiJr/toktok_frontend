import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import LikeButton from './LikeButton'

export default function CommentItem({ comment }) {
  const userId = comment.owner
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser, setPost)
  }, [])

  if (!user._id) {
    return <p>is Loading...</p>
  }

  return (
    <div className="flex flex-col my-6">
      <div className="flex gap-4">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex flex-col">
          <h2 className="text-xl">{user.nickname}</h2>
          <p className="text-[12px] text-[#616161]">{user.profession}</p>
        </div>
      </div>
      <p className="text-[14px]text-[#212121] py-3">{comment.comment}</p>
      {/* <p>{new Date(comment.timestamp)}</p> */}
      {/* <LikeButton nickname={JSON.parse(sessionStorage.getItem('nickname'))} /> */}
    </div>
  )
}
