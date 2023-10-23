import React, { useEffect, useState } from 'react'
import { getFeedFetch } from '../utils/fetches/getUserFetch.js'
import FeedsItem from '../components/FeedsItem.jsx'

function Feeds() {
  const [reload, setReload] = useState(false)

  const [followerPost, setFollowerPosts] = useState([])

  useEffect(() => {
    getFeedFetch(setFollowerPosts)
  }, [reload])

  return (
    <section>
      {followerPost.map(post => (
        <FeedsItem key={post._id} post={post} setReload={setReload}/>
      ))}
    </section>
  )
}

export default Feeds
