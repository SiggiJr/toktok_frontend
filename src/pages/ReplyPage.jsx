import { useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { replyComment } from '../utils/fetches/commentFetch'

export default function ReplyPage({ setReload }) {
  const commentId = useParams().id
  const { postId } = useParams()

  const sendReply = event => {
    event.preventDefault()
    replyComment(event, postId, setReload, commentId)
  }
  // jojo
  return (
    <form className="p-6" onSubmit={sendReply}>
      <div className="flex gap-2">
        <Input label="write a Reply" type="text" name="reply" />
        <button className="text-[#E98090]" type="submit">
          Reply
        </button>
      </div>
    </form>
  )
}
