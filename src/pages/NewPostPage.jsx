import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Input, Switch } from '@material-tailwind/react'
import { getUser } from '../utils/fetches/getUserFetch.js'
import backIcon from '../assets/icons/back.svg'
import { getUploadImageUrl, newPost } from '../utils/fetches/uploadFetch.js'
import locationIcon from '../assets/icons/mapmarker.svg'
import settingIcon from '../assets/icons/Setting.svg'

function NewPostPage() {
  const navigate = useNavigate()
  const imageId = useParams().id
  console.log(useParams())
  const [user, setUser] = useState([])
  const [imageUrl, setImageUrl] = useState()

  const sendNewPost = event => {
    event.preventDefault()
    newPost(event, imageId, navigate, user)
  }

  useEffect(() => {
    getUser(setUser)
    getUploadImageUrl(imageId, setImageUrl)
  }, [])

  return (
    <section className=" p-6 flex flex-col border-black">
      <form onSubmit={sendNewPost}>
        <div className=" flex flex-col">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <img className="w-[17px]" src={backIcon} alt=" back icon " />
              <h1>New Post</h1>
            </div>
            {/* post button only available when title is set */}
            <Button className="w-[150px] bg-[#E98090] rounded-3xl" type="submit">
              Post
            </Button>
          </div>
          <div className="flex mt-8 items-center">
            <div className=" overflow-hidden">
              <img
                className="w-[54x] h-[54px] rounded-full object-cover"
                src={user.profile_image_url}
                alt=" profile image"
              />
            </div>
            <div className="mx-4">
              <Input label="Write a caption..." type="text" name="title" />
            </div>

            <div className="overflow-hidden">
              <img className="w-[54x] h-[54px] rounded-2xl object-cover"
              src={imageUrl?.imageUrl} alt=" post image" />

            </div>
          </div>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex w-[54x] h-[54px] overflow-hidden">
              <img
                className="w-[34px] h-[34px] object-center justify-around"
                src={locationIcon}
                alt=" map maker icon"
              />
            </div>
            <div className="mx-4">
              <Input label="Add location" type="text" name="location" />
            </div>
            <div className="flex w-[54x] h-[54px]"> </div>
          </div>
        </div>
        <div className="my-6 mt-8 flex flex-col text-[#424242]">
          <h2>Also post to</h2>
          <div className="flex justify-between mt-4">
            <label htmlFor="facebook">Facebook</label>
            <Switch name="facebook" />
          </div>
          <div className="flex justify-between mt-2">
            <label htmlFor="x">X</label>
            <Switch name="x" />
          </div>
          <div className="flex justify-between mt-2">
            <label htmlFor="tumblr">Tumblr</label>
            <Switch name="tumblr" />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <img src={settingIcon} alt=" setting icon" />
          <button className="text-[#424242]">Advanced Settings</button>
        </div>
      </form>
    </section>
  )
}

export default NewPostPage
