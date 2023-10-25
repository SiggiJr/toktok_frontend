import { useNavigate } from 'react-router-dom'
import commentIcon from '../assets/icons/comment.svg'

function CommentButton({ post, user, commentsAmount, nickname, postId }) {
  const navigate = useNavigate()
  const showComment = () => {
    navigate(`/comment/${post._id}`)
  }

  return (
    <div className="flex items-center gap-2 mt-1">
      <img role="presentation" className="w-[23px]" onClick={showComment} alt="comment" src={commentIcon} />
      <p>{commentsAmount}</p>
    </div>
  )
}

export default CommentButton
