import { Link } from 'react-router-dom'
import tarsh from '../assets/icons/trashIcon.png'
import React, { useState, useEffect } from 'react'
import { deletePost } from '../utils/fetches/deleteFetches.js'

function MyProfilePosts({ post }) {
  const handleDeletePost = () => {
    deletePost(post._id)
    window.location.reload()
  }

  return (
    <li>
      <div className="relative">
        <Link to={`/comment/${post._id}`}>
          <img className="w-[114px] h-[114px] object-cover rounded-2xl p-1" src={post.image_url} alt="" />
        </Link>
        <img
          className="absolute top-[-6px] right-[-6px] w-[15px]  "
          src={tarsh}
          alt="Mülleimer-Symbol"
          onClick={handleDeletePost}
        />
      </div>
    </li>
  )
}

export default MyProfilePosts
