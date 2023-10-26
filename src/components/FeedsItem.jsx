import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LikeButton from './LikeButton.jsx'
import bookmark from '../assets/icons/Bookmark.svg'
import bookmarkWhite from '../assets/icons/BookmarkWhite.svg'
import bookmarkRed from '../assets/icons/BookmarkRed.svg'
import commentIcon from '../assets/icons/comment.svg'
import commentIconWhite from '../assets/icons/commentWhite.svg'
import { pushToFavorites } from '../utils/fetches/getFavPostsFetch.js'
import { getUser } from '../utils/fetches/getUserFetch'

function FeedsItem({ post, setReload, darkMode, userFavorites }) {
  const navigate = useNavigate()
  const postId = post._id
  const [time, setTime] = useState(0)
  const myDate = new Date()

  useEffect(() => {
    const postDate = new Date(post.timestamp)
    const timeDifference = myDate.getTime() - postDate.getTime()
    const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60))
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    if (hourDifference >= 24) {
      setTime(`${dayDifference}days`)
    } else if (minutesDifference >= 60 && hourDifference < 24) {
      setTime(`${hourDifference}h`)
    } else if (minutesDifference < 60 && minutesDifference > 0) {
      setTime(`${minutesDifference}mins`)
    }
  }, [])

  return (
    <div className="flex flex-col  my-3">
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
            post={post}
            darkMode={darkMode}
          />
          <img
            className="ml-2 h-5 w-5 cursor-pointer"
            role="presentation"
            onClick={() => navigate(`/comment/${post._id}`)}
            src={darkMode ? commentIconWhite : commentIcon}
            alt=" comment icon"
          />
          <p>{post.comments.length}</p>
        </div>
        <div className="flex items-center">
          <img
            className=" h-5 w-5 cursor-pointer"
            onClick={() => {
              pushToFavorites(postId, setReload)
            }}
            role="presentation"
            src={darkMode ? bookmarkWhite : bookmark}
            src={
              darkMode
                ? userFavorites?.includes(postId)
                  ? bookmarkRed
                  : bookmarkWhite
                : userFavorites?.includes(postId)
                ? bookmarkRed
                : bookmark
            }
            alt="bookmark_icon"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <p className=" font-bold">
          {post.nickname}
          <span className="text-xs font-light"> {time} ago</span>
        </p>
      </div>
      <p>{post.caption}</p>
    </div>
  )
}

export default FeedsItem
