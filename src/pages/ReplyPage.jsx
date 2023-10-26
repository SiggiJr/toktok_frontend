import { useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getComment, replyComment } from '../utils/fetches/commentFetch'
import ReplyItem from '../components/ReplyItem'

export default function ReplyPage({ setReload, reload }) {
  const commentId = useParams().id
  const { postId } = useParams()
  const [comment, setComment] = useState([])

  useEffect(() => {
    getComment(postId, commentId, setComment, setReload)
  }, [reload])

  if (!comment) {
    return <p>is Loading...</p>
  }

  const sendReply = event => {
    event.preventDefault()
    replyComment(event, postId, setReload, commentId)
  }

  return (
    <section>
      <article>
        {comment.replies &&
          comment.replies.map(reply => <ReplyItem reply={reply} userId={reply.owner} setReload={setReload} />)}
      </article>
      <form className="p-6" onSubmit={sendReply}>
        <div className="flex gap-2">
          <Input label="write a Reply" type="text" name="reply" />
          <button className="text-[#E98090]" type="submit">
            Reply
          </button>
        </div>
      </form>
    </section>
  )
}
