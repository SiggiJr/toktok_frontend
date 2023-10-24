import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Input } from '@material-tailwind/react'
import { getPost, writeComment } from '../utils/fetches/commentFetch.js'

function CommentDetails() {
  const postId = useParams().postId
  const [post, setPost] = useState([])

  useEffect(() => {
    getPost(postId, setPost)
  }, [])

  const sendComment = event => {
    event.preventDefault()
    writeComment(event, postId)
  }

  return (
    <section>
      <article>
        <h1>comment map</h1>
      </article>
      <form onSubmit={sendComment}>
        <Input label="Comment" type="text" name="comment" />
        <button className="border-2 border-black" type="submit">
          Comment
        </button>
      </form>
    </section>
  )
}

export default CommentDetails
