import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { newPost } from '../utils/fetches/uploadFetch.js'
import { getUser } from '../utils/fetches/getUserFetch.js'
import { Button, Input } from '@material-tailwind/react'
import back from '../assets/icons/back.svg'
import mapmaker from '../assets/icons/mapmarker.svg'

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
    <section className=" p-6 flex flex-col border-black">
      <form onSubmit={sendNewPost}>
        <div className=" flex flex-col border-black">
          <div className="flex gap-2">
            <img className="w-[17px]" src={back} alt=" back icon " />
            <h1>New Post</h1>
          </div>
          {/* post button only available when title is set */}
          <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
            Post
          </Button>
          <div className=" w-48 mt-8 mx-auto">
            <Input label=" Write a cation .." type="text" name="title" />
          </div>
          <div className="flex gap-2 w-72 mt-8 mx-auto">
            <img src={mapmaker} alt=" map maker icon" />
            <Input label="Add location" type="text" name="location" />
          </div>
        </div>
        <div className="mt-8 ">
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
