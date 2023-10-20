import React, { useEffect, useState } from 'react'
import { getFeedFetch } from '../utils/fetches/getUserFetch.js'
import FeedsItem from '../components/FeedsItem.jsx'

function Feeds() {
  const [followerPost, setFollowerPosts] = useState([])

  useEffect(() => {
    getFeedFetch(setFollowerPosts)
  }, [])

  return (
    <section>
      {followerPost.map(post => (
        <FeedsItem key={post._id} post={post} />
      ))}
    </section>
  )
}

export default Feeds
