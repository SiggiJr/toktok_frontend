import React from 'react'
import LikeButton from './LikeButton.jsx'

function FeedsItem({ post, setReload }) {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex gap-2">
        <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="owner image" />
        <div>
          <h2 className="text-xl">{post.nickname}</h2>
          <p className="text-sm text-[#424242]">{post.title}</p>
        </div>
      </div>
      <img className="rounded-2xl mt-2" src={post.image_url} />
      <LikeButton
        nickname={JSON.parse(sessionStorage.getItem('nickname'))}
        likesAmount={post.likes || []}
        postId={post._id}
        setReload={setReload}
      />
    </div>
  )
}

export default FeedsItem
