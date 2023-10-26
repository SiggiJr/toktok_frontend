import { useEffect, useState } from 'react'
import { getLikes, likeComments } from '../utils/fetches/getLikesFetch.js'
import like from '../assets/icons/Heart.svg'
import likeWhite from '../assets/icons/HeartWhite.svg'
import likeActive from '../assets/icons/HeartRed.svg'

function LikeButton({ nickname, likesAmount, postId, setReload, commentId, comment, darkMode }) {
  const [isLiked, setIsLiked] = useState(false)
  const myNickname = JSON.parse(sessionStorage.getItem('nickname'))
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
    setIsLiked(true)
  }

  return (
    <div className="flex items-center gap-1">
      <img
        role="presentation"
        className=" h-5 w-5 cursor-pointer"
        onClick={handleLikes}
        src={
          darkMode
            ? comment.likes?.includes(myNickname)
              ? likeActive
              : likeWhite
            : comment.likes?.includes(myNickname)
            ? likeActive
            : like
        }
        alt="like_icon"
      />
    </div>
  )
}

export default LikeButton
