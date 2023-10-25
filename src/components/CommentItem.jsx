import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import LikeComments from './LikeComments'
import CommentButton from './CommentButton'

export default function CommentItem({ comment, setReload, postId, replyToggle, setCommentId, commentId }) {
  const userId = comment.owner
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [reply, setReply] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getUserProfile(userId, setUser, setPost)
  }, [])

  if (!user._id && !post._id && !comment.comment_id) {
    return <p>is Loading...</p>
  }

  return (
    <div className="flex flex-col my-6">
      <div onClick={() => navigate(`/user/${user._id}`)} role="presentation" className="flex gap-2 cursor-pointer">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex flex-col">
          <h2 className="text-xl">{user.nickname}</h2>
          <p className="text-[12px] text-[#616161]">{user.profession}</p>
        </div>
      </div>
      <div role="presentation" onClick={() => navigate(`reply/${comment.comment_id}`)}>
        <p className="text-[14px]text-[#212121] py-3">{comment.comment}</p>
        <p role="presentation">Reply</p>
      </div>
      {/* <p>{new Date(comment.timestamp)}</p> */}
      <LikeComments
        nickname={JSON.parse(sessionStorage.getItem('nickname'))}
        likesAmount={comment.likes || []}
        postId={postId}
        setReload={setReload}
        commentId={comment.comment_id}
      />
      <CommentButton
        nickname={JSON.parse(sessionStorage.getItem('nickname'))}
        post={post}
        setReload={setReload}
        commentsAmount={comment.length || []}
        postId={postId}
      />
    </div>
  )
}
