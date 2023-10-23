import { useEffect, useState } from 'react'
import { updateFollower } from '../utils/fetches/followerFetch.js'
import { Button } from '@material-tailwind/react'

function SetFollow({ user, nickname }) {
  const [follow, setFollow] = useState(() => {
    const result = user.follower.reduce((accumulator, followStatus) => {
            if (followStatus === JSON.parse(sessionStorage.getItem('nickname'))) {
              return true;
            } else {
              return accumulator; // Falls kein Übereinstimmung gefunden wird, gibt den bisherigen Wert des Akkumulators zurück
            }
          }, false);
          
          console.log(result);
          return result
  })

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
