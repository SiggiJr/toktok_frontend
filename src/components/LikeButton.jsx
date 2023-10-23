import like from '../assets/icons/Heart.svg'
import { useState } from 'react'
import { getLikes } from '../utils/fetches/getLikesFetch.js'

function LikeButton({ nickname, likesAmount, postId }) {
  const [likes, setLikes] = useState(() => {
    const result = likesAmount.reduce((accumulator, likeStatus) => {
      if (likeStatus === JSON.parse(sessionStorage.getItem('nickname'))) {
        return true
      } else {
        return accumulator
      }
    }, false)

    return result
  })

  const handleLikes = () => {
    getLikes(nickname, postId)
  }

  return <img onClick={handleLikes} src={like} alt="" />
}

export default LikeButton
