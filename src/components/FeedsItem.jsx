import React from 'react'
import LikeButton from './LikeButton.jsx'

function FeedsItem({ post }) {
  console.log(post)
  return (
    <>
      <div>
        <h2>{post.nickname}</h2>
        <h3>{post.title}</h3>
        <img src={post.image_url} />
        <LikeButton
          nickname={JSON.parse(sessionStorage.getItem('nickname'))}
          likesAmount={post.likes || []}
          postId={post._id}
        />
      </div>
    </>
  )
}

export default FeedsItem
