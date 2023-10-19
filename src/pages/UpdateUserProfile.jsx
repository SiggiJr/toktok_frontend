import React, { useState } from 'react'
import uploadIcon from '../assets/icons/Editsquare.svg'
import { useContext } from 'react'
import { Button, Input, Option, Select } from '@material-tailwind/react'
import { updateUser } from '../utils/fetches/registerFetch.js'
import { UserContext } from '../utils/Contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from '../utils/fetches/getUserFetch'

function UpdateUserProfile() {
  const { userIdContext } = useContext(UserContext)
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState('/img/dummy.svg')

  useEffect(() => {
    getUser()
  }, [])

  const updateUserProfile = event => {
    event.preventDefault()
    updateUser(event, userIdContext, navigate)
  }

  function previewImage(event) {
    const url = URL.createObjectURL(event.target.files[0])
    setImgUrl(url)
  }

  return (
    <section className="flex flex-col items-center">
      <article className="mt-6">
        <h2 className="text-start mx-auto text-3xl">Create your user profile</h2>
      </article>
      <form onSubmit={updateUserProfile} className="flex flex-col ">
        <div className=" relative w-[140px] h-[140px] mt-4 mx-auto flex">
          <img className="object-cover rounded-full p-1 items-center mx-auto" src={imgUrl} alt="profile_image" />
          <img
            className=" absolute bottom-0 right-[5%]"
            src={uploadIcon}
            alt="upload_icon"
            onClick={() => document.getElementById('uploadInput').click()}
          />
          <input type="file" name="profile_image" id="uploadInput" onChange={previewImage} className="hidden" />
        </div>
        <div className="w-72 mt-8 mx-auto">
          <Input label="first name" type="text" name="first_name" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="last name" type="text" name="last_name" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="nickname" type="text" name="nickname" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="profession" type="text" name="profession" />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="date of birth" type="date" name="date_of_birth" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Email" type="email" name="email" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Mobile" type="number" name="mobile_number" />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Select label="Gender" name="gender" id="gender" required>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="diverse">Diverse</Option>
          </Select>
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Website" type="text" name="website" />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Update
        </Button>
      </form>
    </section>
  )
}

export default UpdateUserProfile
