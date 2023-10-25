import { useParams } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { getPost, replyComment } from '../utils/fetches/commentFetch'
import { useEffect, useState } from 'react'

export default function ReplyPage({ setReload }) {
  const commentId = useParams().id
  const [post, setPost] = useState()
  const { postId } = useParams()

  useEffect(() => {
    getPost(postId, setPost)
  }, [])

  if (!post) {
    return <p>is Loading...</p>
  }
  console.log(post.comments)

  const sendReply = event => {
    event.preventDefault()
    replyComment(event, postId, setReload, commentId)
  }

  return (
    <form onSubmit={sendReply}>
      <Input type="text" name="reply" />
      <button className="text-[#E98090]" type="submit">
        Reply
      </button>
    </form>
  )
}
