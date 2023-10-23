import { useEffect, useState } from 'react'
import { updateFollower } from '../utils/fetches/followerFetch.js'
import { Button } from '@material-tailwind/react'

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
      <Button className="h-fit w-full bg-[#E98090] rounded-3xl" onClick={handleFollow} type="button">
        {follow ? 'Unfollow' : 'Follow'}
      </Button>
    </>
  )
}

export default SetFollow
