import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getComment, replyComment } from '../utils/fetches/commentFetch'
import ReplyItem from '../components/ReplyItem'
import backIcon from '../assets/icons/back.svg'
import backIconWhite from '../assets/icons/backWhite.svg'

export default function ReplyPage({ setReload, reload, darkMode }) {
  const commentId = useParams().id
  const { postId } = useParams()
  const [comment, setComment] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getComment(postId, commentId, setComment)
  }, [reload])
  if (!comment) {
    return <p>is Loading...</p>
  }

  const sendReply = event => {
    event.preventDefault()
    replyComment(event, postId, setReload, commentId)
  }

  return (
    <section className="my-14 ml-6 mt-0">
      <img
        role="presentation"
        onClick={() => navigate(-1)}
        className="w-[20px] cursor-pointer my-14 ml-0"
        src={darkMode ? backIconWhite : backIcon}
        alt=" back icon"
      />

      <article>
        {comment.replies &&
          comment.replies.map(reply => <ReplyItem reply={reply} userId={reply.owner} setReload={setReload} />)}
      </article>
      <form className="p-6" onSubmit={sendReply}>
        <div className="fixed bottom-[70px] flex gap-2">
          <Input label="write a Reply" type="text" name="reply" />
          <button className="text-[#E98090]" type="submit">
            Reply
          </button>
        </div>
      </form>
    </section>
  )
}
