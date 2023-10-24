import React, { useEffect, useState } from 'react'
import { getFeedFetch } from '../utils/fetches/getFeedFetch.js'
import FeedsItem from '../components/FeedsItem.jsx'

function Feeds() {
  const [reload, setReload] = useState(false)

  const [followerPost, setFollowerPosts] = useState([])

  useEffect(() => {
    getFeedFetch(setFollowerPosts)
  }, [reload])

  console.log(followerPost)

  return (
    <section className="flex flex-col p-6 mb-12">
      {followerPost.map(post => (
        <FeedsItem key={post._id} post={post} setReload={setReload} />
      ))}
    </section>
  )
}

export default Feeds
