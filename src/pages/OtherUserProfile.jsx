import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserProfile } from '../utils/fetches/getUserFetch.js'

function OtherUserProfile() {
  const userId = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    getUserProfile(userId, setUser)
    console.log(user)
  }, [])
  return (
    <div>
      <h1>other users </h1>
    </div>
  )
}

export default OtherUserProfile
