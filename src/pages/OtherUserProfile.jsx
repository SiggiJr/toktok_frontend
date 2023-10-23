import { useParams } from 'react-router-dom'

function OtherUserProfile() {
  const userId = useParams()
  return (
    <div>
      <h1>other users </h1>
    </div>
  )
}

export default OtherUserProfile
