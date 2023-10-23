import { useEffect, useState } from 'react'
import { updateFollower } from '../utils/fetches/followerFetch.js'

function SetFollow({ follower, nickname }) {
  const [follow, setFollow] = useState()

  useEffect(() => {
    const checkFollowStatus = () => {
      if (follower) {
        follower.forEach(followStatus => {
          console.log(followStatus)
          if (followStatus === JSON.parse(sessionStorage.getItem('nickname'))) {
            setFollow(true)
          }
        })
      }
    }
    checkFollowStatus()
  }, [follow])

  const handleFollow = () => {
    updateFollower(nickname)
    setFollow(!follow)
  }

  return (
    <>
      <button onClick={handleFollow} type="button">
        {follow ? 'Unfollow' : 'Follow'}
      </button>
    </>
  )
}

export default SetFollow
