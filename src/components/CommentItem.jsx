import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import LikeComments from './LikeComments'

export default function CommentItem({ comment, setReload, postId }) {
  const userId = comment.owner
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser, setPost)
  }, [])

  if (!user._id && !post._id) {
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
      <LikeComments
        nickname={JSON.parse(sessionStorage.getItem('nickname'))}
        likesAmount={comment.likes || []}
        postId={postId}
        setReload={setReload}
        commentId={comment.comment_id}
      />
    </div>
  )
}
