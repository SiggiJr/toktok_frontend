import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Input, Switch, Textarea } from '@material-tailwind/react'
import { getUser } from '../utils/fetches/getUserFetch.js'
import backIcon from '../assets/icons/back.svg'
import { getUploadImageUrl, newPost } from '../utils/fetches/uploadFetch.js'
import locationIcon from '../assets/icons/mapmarker.svg'
import settingIcon from '../assets/icons/Setting.svg'
import facbookIcon from '../assets/icons/Facebook.svg'
import twitterIcon from '../assets/icons/Twitterx.svg'
import tumblrIcon from '../assets/icons/Tumblr.svg'

function NewPostPage() {
  const navigate = useNavigate()
  const imageId = useParams().id
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
    <section className=" p-6 flex flex-col h-screen">
      <div className="flex gap-2 items-center">
        <img
          role="presentation"
          onClick={() => navigate(-1)}
          className="w-[17px] cursor-pointer"
          src={backIcon}
          alt=" back icon "
        />
        <h1>New Post</h1>
      </div>
      <form onSubmit={sendNewPost}>
        <div className=" flex flex-col">
          <div className="flex mt-8 items-center">
            <div className=" overflow-hidden">
              <img
                className="w-[54px] h-[54px] rounded-full object-cover"
                src={user.profile_image_url}
                alt=" profile_img"
              />
            </div>
            <div className="mx-4">
              <Textarea label="Write a caption..." name="caption" />
            </div>

            <div className="overflow-hidden">
              <img
                className="w-[54x] h-[54px] aspect-square rounded-2xl object-cover"
                src={imageUrl?.imageUrl}
                alt=" post_image"
              />
            </div>
          </div>
          <div className="flex mt-8 items-center ">
            <div className="flex w-[54px] h-[54px] p-[10px] overflow-hidden">
              <img
                className="w-[34px] h-[34px] object-center justify-around"
                src={locationIcon}
                alt=" map maker icon"
              />
            </div>
            <div className="mx-4">
              <Input label="Add location" type="text" name="location" />
            </div>
            <div className="flex w-[54px] h-[54px]"></div>
          </div>
        </div>
        <article className="my-6 mt-8 flex flex-col text-[#424242]">
          <div className="flex justify-center items-center gap-3 border-b-[2px] border-[#FF4D67] w-1/3 mt-8 pb-2">
            <h2 className="text-[#FF4D67]">Also post to</h2>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <img className="w-[50px]" src={facbookIcon} alt=" facebook icon" />
              <label htmlFor="facebook">Facebook</label>
            </div>
            <Switch name="facebook" />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <img className="w-[50px]" src={twitterIcon} alt=" twitter icon" />
              <label htmlFor="x">X</label>
            </div>
            <Switch name="x" />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <img className="w-[50px]" src={tumblrIcon} alt=" tumblr icon" />
              <label htmlFor="tumblr">Tumblr</label>
            </div>
            <Switch name="tumblr" />
          </div>
        </article>
        <div className="my-12">
          {/* post button only available when title is set */}
          <Button className="w-full bg-[#E98090] rounded-3xl" type="submit">
            Post
          </Button>
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
