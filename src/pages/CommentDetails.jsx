import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPost } from '../utils/fetches/commentFetch.js'
import { Textarea } from '@material-tailwind/react'

function CommentDetails() {
  const postID = useParams().id
  const [post, setPost] = useState([])

  useEffect(() => {
    getPost(setPost())
  }, [])

  return (
    <section>
      <article>
        <h1>comment map</h1>
      </article>
      <div>
        <Textarea name="" id="" cols="30" rows="10"></Textarea>
      </div>
    </section>
  )
}

export default CommentDetails
