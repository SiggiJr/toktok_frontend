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
    <div>
      <img className="w-[54px] h-[54px] object-cover rounded-full " src={user.profile_image_url} alt="" />
      <h2>{user.nickname}</h2>
      <h3>{user.profession}</h3>
      <h4>{comment.comment}</h4>
      {/* <p>{new Date(comment.timestamp)}</p> */}
      {/* <LikeButton nickname={JSON.parse(sessionStorage.getItem('nickname'))} /> */}
    </div>
  )
}
