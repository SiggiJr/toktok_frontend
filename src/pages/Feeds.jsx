import React, { useEffect, useState } from 'react'
import { getFeedFetch } from '../utils/fetches/getFeedFetch.js'
import FeedsItem from '../components/FeedsItem.jsx'
import like from '../assets/icons/Heart.svg'

function Feeds() {
  const [reload, setReload] = useState(false)

  const [followerPost, setFollowerPosts] = useState([])

  useEffect(() => {
    getFeedFetch(setFollowerPosts)
  }, [reload])

  return (
    <section className="flex flex-col p-6 my-6 mt-0">
      <div>
        <h1>For you</h1>
        <img src={like} alt="" />
      </div>
      {followerPost.map(post => (
        <FeedsItem key={post._id} post={post} setReload={setReload} />
      ))}
    </section>
  )
}

export default Feeds
