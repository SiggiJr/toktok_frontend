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
    <section className="mb-40  mt-0">
      <img
        role="presentation"
        onClick={() => navigate(-1)}
        className="w-[20px] cursor-pointer my-14 ml-6 "
        src={darkMode ? backIconWhite : backIcon}
        alt=" back icon"
      />

      <article className="ml-6 mr-6">
        {comment.replies &&
          comment.replies.map(reply => <ReplyItem reply={reply} userId={reply.owner} setReload={setReload} />)}
      </article>
      <form
        className={
          darkMode
            ? 'p-3 fixed bottom-[45px] rounded-t-xl bg-gray-900 w-[390px] pr-14'
            : 'p-3 fixed bottom-[45px] rounded-t-xl bg-white w-[390px] pr-14'
        }
        onSubmit={sendReply}>
        <div className=" flex gap-2">
          <Input label="write a Reply" type="text" name="reply" />
          <button className="text-[#E98090]" type="submit">
            Reply
          </button>
        </div>
      </form>
    </section>
  )
}
