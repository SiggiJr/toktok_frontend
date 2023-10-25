import { useEffect, useState } from 'react'
import { getLikes, likeComments } from '../utils/fetches/getLikesFetch.js'
import like from '../assets/icons/Heart.svg'
import likeActive from '../assets/icons/HeartRed.svg'

function LikeButton({ nickname, likesAmount, postId, setReload, commentId }) {
  const [isLiked, setIsLiked] = useState(false)
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
    likeComments(nickname, postId, setReload, commentId)
    setIsLiked(!isLiked)
  }

  return (
    <div className="flex items-center gap-2 mt-1">
      <img
        role="presentation"
        className="w-[23px]"
        onClick={handleLikes}
        src={isLiked ? likeActive : like}
        alt=" like icon"
      />
      <p>{likesAmount.length}</p>
    </div>
  )
}

export default LikeButton
