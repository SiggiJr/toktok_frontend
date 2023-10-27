import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import LikeComments from './LikeComments'
import trash from '../assets/icons/trashIcon.png'
import { deleteComment } from '../utils/fetches/deleteFetches'

export default function CommentItem({ comment, setReload, postId, darkMode }) {
  const userId = comment.owner
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [time, setTime] = useState(0)

  const myDate = new Date()
  const navigate = useNavigate()

  useEffect(() => {
    getUserProfile(userId, setUser, setPost)
    const commentDate = new Date(comment.timestamp)
    const timeDifference = myDate.getTime() - commentDate.getTime()
    const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60))
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    if (minutesDifference < 60 && minutesDifference > 0 && hourDifference === 0) {
      setTime(`${minutesDifference}mins`)
    } else if (hourDifference >= 1 && hourDifference < 24) {
      setTime(`${hourDifference}h`)
    } else if (hourDifference >= 24) {
      setTime(`${dayDifference}days`)
    }
  }, [])

  if (!user._id && !post._id && !comment.comment_id) {
    return <p>is Loading...</p>
  }

  const handleDeleteComment = () => {
    deleteComment(comment.comment_id, postId)

    window.location.reload()
  }

  return (
    <div className=" flex flex-col my-6  border-gray-200 border-b-[1px] pb-2 relative ">
      <div onClick={() => navigate(`/user/${user._id}`)} role="presentation" className="flex gap-2 cursor-pointer">
        <img className="w-[48px] h-[48px] object-cover rounded-full " src={user.profile_image_url} alt="" />
        <div className="flex flex-col">
          <h2 className="text-xl">
            {user.nickname}
            <span className="ml-4 text-xs font-light">{time} ago</span>
          </h2>
        </div>
      </div>

      <div className="flex justify-between absolute top-6 " role="presentation">
        <p className={darkMode ? 'text-[16px]  ml-14 text-white' : 'text-[16px] text-[#212121] ml-14'}>
          {comment.comment}
        </p>
      </div>
      <div className="absolute flex gap-2 right-0 top-6 ">
        <p className="text-[12px]">{comment.likes?.length}</p>
        <LikeComments
          nickname={JSON.parse(sessionStorage.getItem('nickname'))}
          likesAmount={comment.likes || []}
          postId={postId}
          setReload={setReload}
          commentId={comment.comment_id}
          comment={comment}
          darkMode={darkMode}
        />
      </div>
      <div className="flex flex-start mt-1">
        <p className="text-[12px] ml-2" onClick={() => navigate(`reply/${comment.comment_id}`)} role="presentation">
          Reply
        </p>
        <img onClick={handleDeleteComment} className="w-4 h-4 absolute right-0" src={trash} alt="trash icon" />
      </div>
    </div>
  )
}
