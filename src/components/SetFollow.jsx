import { useState } from 'react'
import { Button } from '@material-tailwind/react'
import { updateFollower } from '../utils/fetches/followerFetch.js'

function SetFollow({ nickname, follower, setReload }) {
  const [follow, setFollow] = useState(() => {
    const result = follower.reduce((accumulator, followStatus) => {
      if (followStatus === JSON.parse(sessionStorage.getItem('nickname'))) {
        return true
      }
      return accumulator
    }, false)

    return result
  })

  const handleFollow = () => {
    updateFollower(nickname, setReload)
    setFollow(!follow)
  }

  return (
    <Button className="h-fit w-full bg-[#E98090] rounded-3xl" onClick={handleFollow} type="button">
      {follow ? 'Unfollow' : 'Follow'}
    </Button>
  )
}

export default SetFollow
