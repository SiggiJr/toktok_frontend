import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import LikeComments from './LikeComments'

export default function CommentItem({ comment, setReload, postId, darkMode }) {
  const userId = comment.owner
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getUserProfile(userId, setUser, setPost)
  }, [])

  if (!user._id && !post._id && !comment.comment_id) {
    return <p>is Loading...</p>
  }

  return (
    <div className=" flex flex-col my-6  border-gray-200 border-b-[1px] pb-2 relative ">
      <div onClick={() => navigate(`/user/${user._id}`)} role="presentation" className="flex gap-2 cursor-pointer">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex flex-col">
          <h2 className="text-xl">{user.nickname}</h2>
          {/* <p className="text-[12px] text-[#616161]">{user.profession}</p> */}
        </div>
      </div>

      <div className="flex justify-between absolute top-6 " role="presentation">
        <p className={darkMode ? 'text-[16px]  ml-14 text-white' : 'text-[16px] text-[#212121] py-3'}>
          {comment.comment}
        </p>
      </div>
      <div className="absolute right-0 top-6 ">
        <LikeComments
          nickname={JSON.parse(sessionStorage.getItem('nickname'))}
          likesAmount={comment.likes || []}
          postId={postId}
          setReload={setReload}
          commentId={comment.comment_id}
          comment={comment}
        />
      </div>
      <div className="flex flex-start mt-1">
        <p className="text-[12px] ml-14">{comment.likes?.length}</p>
        <p className="text-[12px] ml-3" onClick={() => navigate(`reply/${comment.comment_id}`)} role="presentation">
          Reply
        </p>
      </div>
    </div>
  )
}
