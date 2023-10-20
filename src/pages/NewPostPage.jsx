import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { newPost } from '../utils/fetches/uploadFetch.js'
import { getUser } from '../utils/fetches/getUserFetch.js'

function NewPostPage() {
  const navigate = useNavigate()
  const imageId = useParams().id
  const [user, setUser] = useState([])

  const sendNewPost = event => {
    event.preventDefault()
    newPost(event, imageId, navigate, user)
  }

  useEffect(() => {
    getUser(setUser)
  }, [])

  return (
    <section className=" flex flex-col border-black">
      <form onSubmit={sendNewPost}>
        <div className=" flex flex-col border-black">
          <p>BackButton</p>
          <h1>New Post</h1>
          {/* post button only available when title is set */}
          <button className="border-2 border-black text-red-500" type="submit">
            Post
          </button>
          <input className="border-2 border-black text-red-500" type="text" name="title" />
          <label htmlFor="location">Add location</label>
          <input className="border-2 border-black text-red-500" type="text" name="location" />
        </div>
        <div>
          <h2>Also post to</h2>
          <label htmlFor="facebook" />
          <input type="radio" name="facebook" />
          <label htmlFor="x" />
          <input type="radio" name="x" />
          <label htmlFor="tumblr" />
          <input type="radio" name="tumblr" />
        </div>
        <button className="border-2 border-black text-red-500">Advanced Settings</button>
      </form>
    </section>
  )
}

export default NewPostPage
