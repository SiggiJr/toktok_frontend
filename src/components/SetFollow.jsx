import { useState } from 'react'

function SetFollow() {
  const [follow, setFollow] = useState(false)

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <>
      <button onClick={handleFollow} type="button">
        {follow}
      </button>
    </>
  )
}

export default SetFollow
