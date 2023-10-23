import React from 'react'
import LikeButton from './LikeButton.jsx'

function FeedsItem({ post, setReload }) {
  console.log(post)
  return (
    <>
      <div className="flex flex-col mt-2">
        <div>
          <h2 className="text-xl">{post.nickname}</h2>
          <p className="text-sm text-[#424242]">{post.title}</p>
        </div>
        <img className="rounded-2xl" src={post.image_url} />
        <LikeButton
          nickname={JSON.parse(sessionStorage.getItem('nickname'))}
          likesAmount={post.likes || []}
          postId={post._id}
          setReload={setReload}
        />
      </div>
    </>
  )
}

export default FeedsItem
