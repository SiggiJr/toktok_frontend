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
    <section className="flex flex-col p-6">
      <article>
        <h1>comment map</h1>
      </article>
      <form onSubmit={sendComment}>
        <div className="flex gap-2">
          <Input label="Your Comment" type="text" name="comment" />
          <button className="text-[#E98090]" type="submit">
            post
          </button>
        </div>
      </form>
    </section>
  )
}

export default CommentDetails
