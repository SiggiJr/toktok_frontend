import React from 'react'

function FeedsItem({ post }) {
  return (
    <>
      <div>
        <h2>{post.nickname}</h2>
        <h3>{post.title}</h3>
        <img src={post.image_url} />
      </div>
    </>
  )
}

export default FeedsItem
