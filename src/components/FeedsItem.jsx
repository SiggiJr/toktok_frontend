import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LikeButton from './LikeButton.jsx'
import CommentButton from './CommentButton.jsx'

function FeedsItem({ post, setReload }) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col mt-2">
      <section onClick={() => navigate(`/user/${post.owner}`)}>
        <div className="flex gap-2">
          <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="owner_image" />
          <div>
            <h2 className="text-xl">{post.nickname}</h2>
            <h3 className="text-sm font-thin">{post.profession}</h3>
          </div>
        </div>
      </section>
      <div onClick={() => navigate(`/comment/${post._id}`)}>
        <img className="rounded-2xl mt-2" src={post.image_url} alt="posted_image" />
      </div>
      <p>{post.caption}</p>
      <LikeButton
        nickname={JSON.parse(sessionStorage.getItem('nickname'))}
        likesAmount={post.likes || []}
        postId={post._id}
        setReload={setReload}
      />
      <CommentButton post={post} />
    </div>
  )
}

export default FeedsItem
