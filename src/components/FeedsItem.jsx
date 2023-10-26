import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LikeButton from './LikeButton.jsx'
import bookmark from '../assets/icons/Bookmark.svg'
import commentIcon from '../assets/icons/comment.svg'
import { pushToFavorites } from '../utils/fetches/getFavPostsFetch.js'

function FeedsItem({ post, setReload }) {
  const navigate = useNavigate()
  const postId = post._id
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
        <img className="w-[380px] h-[380px] object-cover rounded-2xl mt-2" src={post.image_url} alt="posted_image" />
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex gap-1 items-center ">
          <LikeButton
            nickname={JSON.parse(sessionStorage.getItem('nickname'))}
            likesAmount={post.likes || []}
            postId={post._id}
            setReload={setReload}
          />

          <img
            className="ml-2 h-5 w-5 cursor-pointer"
            role="presentation"
            onClick={() => navigate(`/comment/${post._id}`)}
            src={commentIcon}
            alt=" comment icon"
          />
          <p>{post.comments.length}</p>
        </div>
        <div className="flex items-center">
          <img
            className=" h-5 w-5 cursor-pointer"
            onClick={() => {
              pushToFavorites(postId)
            }}
            role="presentation"
            src={bookmark}
            alt=" bookmark icon"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <p className=" font-bold">{post.nickname}</p>
        <p>{post.caption}</p>
      </div>
    </div>
  )
}

export default FeedsItem
