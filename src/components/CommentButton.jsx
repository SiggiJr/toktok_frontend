import { useNavigate } from 'react-router-dom'
import commentIcon from '../assets/icons/comment.svg'

function CommentButton({ post, user }) {
  const navigate = useNavigate()
  const showComment = () => {
    navigate(`/comment/${post._id}`)
  }
  return (
    <div>
      <img className="w-[23px]" onClick={showComment} alt="comment" src={commentIcon} />
      <p>{post.comment.length}</p>
    </div>
  )
}

export default CommentButton
