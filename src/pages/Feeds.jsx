import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFeedFetch } from '../utils/fetches/getFeedFetch.js'
import FeedsItem from '../components/FeedsItem.jsx'
import like from '../assets/icons/Heart.svg'
import likeWhite from '../assets/icons/HeartWhite.svg'
import { getUser } from '../utils/fetches/getUserFetch.js'

function Feeds({ darkMode, setReload, reload }) {
  const [followerPost, setFollowerPosts] = useState([])
  const navigate = useNavigate()
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const [user, setUser] = useState([])
  const currentTime = new Date()

  useEffect(() => {
    getFeedFetch(setFollowerPosts)
    getUser(setUser)
  }, [reload])
  console.log(user)
  return (
    <section className="flex flex-col p-6 my-6 mt-0">
      <div className="flex justify-between">
        <h1 className="text-xl ">For you</h1>
        <img
          role="presentation"
          onClick={() => navigate(`/favorite/${userId}`)}
          src={darkMode ? likeWhite : like}
          alt=""
        />
      </div>
      {followerPost.map(post => (
        <FeedsItem
          key={post._id}
          post={post}
          setReload={setReload}
          reload={reload}
          darkMode={darkMode}
          currentTime={currentTime}
          userFavorites={user.favorites}
        />
      ))}
    </section>
  )
}

export default Feeds
