import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LikeButton from './LikeButton.jsx'
import CommentButton from './CommentButton.jsx'
import bookmark from '../assets/icons/Bookmark.svg'

function FeedsItem({ post, setReload }) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col my-3">
      <section role="presentation" onClick={() => navigate(`/user/${post.owner}`)}>
        <div className="flex gap-2">
          <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="owner_image" />
          <div>
            <h2 className="text-xl">{post.nickname}</h2>
            <h3 className="text-sm font-thin">{post.profession}</h3>
          </div>
        </div>
      </section>

      <div role="presentation" onClick={() => navigate(`/comment/${post._id}`)}>
        <img className="rounded-2xl mt-2" src={post.image_url} alt="posted_image" />
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <LikeButton
            nickname={JSON.parse(sessionStorage.getItem('nickname'))}
            likesAmount={post.likes || []}
            postId={post._id}
            setReload={setReload}
          />
          <CommentButton
            nickname={JSON.parse(sessionStorage.getItem('nickname'))}
            post={post}
            setReload={setReload}
            commentsAmount={post.comments.length || []}
            postId={post._id}
          />
        </div>
        <img src={bookmark} alt=" bookmark icon" />
      </div>
      <div className="flex gap-2">
        <p className=" font-bold">{post.nickname}</p>
        <p>{post.caption}</p>
      </div>
    </div>
  )
}

export default FeedsItem
