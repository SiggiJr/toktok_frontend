import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Textarea } from '@material-tailwind/react'
import uploadIcon from '../assets/icons/Editsquare.svg'
import { updateUser } from '../utils/fetches/registerFetch.js'
import { getUser } from '../utils/fetches/getUserFetch'
import backIcon from '../assets/icons/back.svg'
import backIconWhite from '../assets/icons/backWhite.svg'

function UpdateUserProfile({ darkMode }) {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState('/img/dummy.svg')
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser(setUser)
  }, [])

  if (!user.email) {
    return <p>Loading....</p>
  }

  const updateUserProfile = event => {
    event.preventDefault()
    updateUser(event, userId, navigate)
  }

  function previewImage(event) {
    const url = URL.createObjectURL(event.target.files[0])
    setImgUrl(url)
  }

  return (
    <section className="flex flex-col items-center mb-12">
      <article className="mt-6 flex gap-2">
        <img
          className=" cursor-pointer w-[17px]"
          role="presentation"
          onClick={() => navigate(-1)}
          src={darkMode ? backIconWhite : backIcon}
          alt="backIcon"
        />
        <h2 className="text-start mx-auto text-3xl">Update your profile</h2>
      </article>
      <form onSubmit={updateUserProfile} className="flex flex-col">
        <div className=" relative w-[140px] h-[140px] mt-4 mx-auto flex">
          <img
            className="object-cover rounded-full p-1 items-center mx-auto"
            src={user?.profile_image_url ? user?.profile_image_url : imgUrl}
            alt="profile_image"
          />
          <img
            role="presentation"
            className=" absolute bottom-0 right-[5%]"
            src={uploadIcon}
            alt="upload_icon"
            onClick={() => document.getElementById('uploadInput').click()}
          />
          <input type="file" name="profile_image" id="uploadInput" onChange={previewImage} className="hidden" />
        </div>
        <div className=" mt-8">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="first name"
            type="text"
            name="first_name"
            defaultValue={user.first_name}
            required
          />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="last name"
            type="text"
            name="last_name"
            defaultValue={user.last_name}
            required
          />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="nickname"
            type="text"
            name="nickname"
            defaultValue={user.nickname}
            required
          />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="profession"
            type="text"
            name="profession"
            defaultValue={user.profession}
          />
        </div>
        <div className=" mt-3">
          <Input color={darkMode ? 'white' : 'gray'} label="bio" name="bio" defaultValue={user?.bio} rows="3" />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="date of birth"
            type="date"
            name="date_of_birth"
            defaultValue={user.date_of_birth}
            required
          />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="Email"
            type="email"
            name="email"
            defaultValue={user.email}
            required
          />
        </div>
        <div className=" mt-3">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="Mobile"
            type="number"
            name="mobile_number"
            defaultValue={user.mobile_number}
          />
        </div>
        <div className="flex w-72 mt-3 mx-auto gap-8 justify-around text-blue-gray-400">
          <div className="flex">
            <label className=" mr-2" htmlFor="male">
              Male
            </label>
            <input type="radio" name="gender" id="male" value="male" />
          </div>
          <div className="flex">
            <label className=" mr-2" htmlFor="female">
              Female
            </label>
            <input type="radio" name="gender" id="female" value="female" />
          </div>
          <div className="flex">
            <label className=" mr-2" htmlFor="diverse">
              Diverse
            </label>
            <input type="radio" name="gender" id="diverse" value="diverse" />
          </div>
        </div>
        <div className=" mt-3 ">
          <Input
            color={darkMode ? 'white' : 'gray'}
            label="Website"
            type="text"
            name="website"
            defaultValue={user.website}
          />
        </div>
        <Button className=" mt-8 bg-[#E98090] rounded-3xl" type="submit">
          Update
        </Button>
      </form>
    </section>
  )
}

export default UpdateUserProfile
