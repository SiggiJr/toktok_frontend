import React from 'react'
import LikeButton from './LikeButton.jsx'
import CommentButton from './CommentButton.jsx'
import { useNavigate } from 'react-router-dom'

function FeedsItem({ post, setReload }) {
  const navigate = useNavigate()
  console.log('post', post)
  return (
    <>
      <div className="flex flex-col mt-2">
        <section onClick={() => navigate(`/user/${post.owner}`)}>
          <div className="flex gap-2">
            <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="owner image" />
            <div>
              <h2 className="text-xl">{post.nickname}</h2>
              <h3 className="text-sm font-thin">{post.profession}</h3>
            </div>
          </div>
        </section>
        <img className="rounded-2xl mt-2" src={post.image_url} />
        <LikeButton
          nickname={JSON.parse(sessionStorage.getItem('nickname'))}
          likesAmount={post.likes || []}
          postId={post._id}
          setReload={setReload}
        />
        <CommentButton post={post} />
      </div>
    </>
  )
}

export default FeedsItem
