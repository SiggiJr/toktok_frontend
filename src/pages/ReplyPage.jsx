import { useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getComment, replyComment } from '../utils/fetches/commentFetch'

export default function ReplyPage({ setReload, reload }) {
  const commentId = useParams().id
  const [comment, setComment] = useState([])
  const { postId } = useParams()

  useEffect(() => {
    getComment(postId, commentId, setComment, setReload)
  }, [])

  if (!comment) {
    return <p>is Loading...</p>
  }

  console.log(comment)

  const sendReply = event => {
    event.preventDefault()
    replyComment(event, postId, setReload, commentId)
  }

  return (
    <section>
      <article>
        <div>
          {comment.replies &&
            comment.replies.map(reply => {
              return (
                <div>
                  <h1>{reply.nickname}</h1>
                  <p>{reply.reply}</p>
                  <p>{reply.timestamp}</p>
                </div>
              )
            })}
        </div>
      </article>

      <form onSubmit={sendReply}>
        <Input type="text" name="reply" />
        <button className="text-[#E98090]" type="submit">
          Reply
        </button>
      </form>
    </section>
  )
}
