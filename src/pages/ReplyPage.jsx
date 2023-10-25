import { useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getComment, replyComment } from '../utils/fetches/commentFetch'
import { getUserProfile } from '../utils/fetches/getUserFetch'
import ReplyItem from '../components/ReplyItem'

export default function ReplyPage({ setReload, reload }) {
  const commentId = useParams().id
  const { postId } = useParams()
  const [comment, setComment] = useState([])
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

  // useEffect(() => {
  //   getUserProfile(userId, setUser, setPost)
  // }, [])

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
        {/* {comment.replies &&
            comment.replies.map(reply => {
              return (
                <div>

                  <h1>{reply.nickname}</h1>
                  <p>{reply.reply}</p>
                  <p>{reply.timestamp}</p>
                </div>
              )
            })} */}
        {comment.replies &&
          comment.replies.map(reply => <ReplyItem reply={reply} userId={reply.owner} setReload={setReload} />)}
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
