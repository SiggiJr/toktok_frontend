import { useNavigate } from 'react-router-dom'
import commentIcon from '../assets/icons/comment.svg'

function CommentButton({ post, user }) {
  const navigate = useNavigate()
  const showComment = () => {
    navigate(`/comment/${post._id}`)
  }
  return (
    <div>
      <img className="w-[23px]" onClick={showComment} src={commentIcon} />
      {/*<p>{commentsAmount.length}</p>*/}
    </div>
  )
}

export default CommentButton
