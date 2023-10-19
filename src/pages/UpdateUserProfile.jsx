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
  const { userIdContext, setUserIdContext } = useContext(UserContext)
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
    updateUser(event, userIdContext, navigate)
    console.log('context', userIdContext)
  }
  console.log(userIdContext)

  function previewImage(event) {
    const url = URL.createObjectURL(event.target.files[0])
    setImgUrl(url)
  }

  return (
    <section className="flex flex-col items-center">
      <article className="mt-6">
        <h2 className="text-start mx-auto text-3xl">Update your User-profile</h2>
      </article>
      <form onSubmit={updateUserProfile} className="flex flex-col ">
        <div className=" relative w-[140px] h-[140px] mt-4 mx-auto flex">
          <img
            className="object-cover rounded-full p-1 items-center mx-auto"
            src={user?.profile_image_url ? user?.profile_image_url : imgUrl}
            alt="profile_image"
          />
          <img
            className=" absolute bottom-0 right-[5%]"
            src={uploadIcon}
            alt="upload_icon"
            onClick={() => document.getElementById('uploadInput').click()}
          />
          <input type="file" name="profile_image" id="uploadInput" onChange={previewImage} className="hidden" />
        </div>
        <div className="w-72 mt-8 mx-auto">
          <Input label="first name" type="text" name="first_name" defaultValue={user.first_name} required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="last name" type="text" name="last_name" defaultValue={user.last_name} required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="nickname" type="text" name="nickname" defaultValue={user.nickname} required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="profession" type="text" name="profession" defaultValue={user.profession} />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="date of birth" type="date" name="date_of_birth" defaultValue={user.date_of_birth} required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Email" type="email" name="email" defaultValue={user.email} required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Mobile" type="number" name="mobile_number" defaultValue={user.mobile_number} />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Select label="Gender" name="gender" id="gender" defaultValue={user.gender} required>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="diverse">Diverse</Option>
          </Select>
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input label="Website" type="text" name="website" defaultValue={user.website} />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Update
        </Button>
      </form>
    </section>
  )
}

export default UpdateUserProfile
