import { useEffect, useState } from 'react'
import like from '../assets/icons/Heart.svg'
import { getLikes } from '../utils/fetches/getLikesFetch.js'

function LikeButton({ nickname, likesAmount, postId, setReload }) {
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
    getLikes(nickname, postId, setReload)
  }

  return (
    <>
      <img onClick={handleLikes} src={like} alt="" />
      <p>{likesAmount.length}</p>
    </>
  )
}

export default LikeButton
