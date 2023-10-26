import { useEffect, useState } from 'react'
import { getFavPosts } from '../utils/fetches/getFavPostsFetch'
import { useNavigate } from 'react-router-dom'

function FavPage() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getFavPosts(setPosts)
  }, [])

  if (!posts.length > 0) {
    return <p>is Loading...</p>
  }
  console.log(posts)

  return (
    <section>
      {posts.map(post => (
        <div>
          <img
            role="presentation"
            onClick={() => navigate(`/details/${post._id}`)}
            src={post.image_url}
            alt="post_image"
          />
        </div>
      ))}
    </section>
  )
}

export default FavPage
