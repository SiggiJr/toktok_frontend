import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Input } from '@material-tailwind/react'
import { getPost, writeComment } from '../utils/fetches/commentFetch.js'
import CommentItem from '../components/CommentItem.jsx'

function CommentDetails() {
  const { postId } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    getPost(postId, setPost)
  }, [])

  const sendComment = event => {
    event.preventDefault()
    writeComment(event, postId)
  }

  if (!post.comments) {
    return <p>is Loading...</p>
  }

  return (

    <section className="flex flex-col p-6">

      <h1>{post.nickname}</h1>
      <img className="w-[54px] h-[54px] object-cover rounded-full " src={post.owner_image} alt="" />
      <img src={post.image_url} alt="" />
      <p>{post.caption}</p>

      <article>
        {post.comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
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
