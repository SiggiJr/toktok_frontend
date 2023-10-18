import { useParams } from 'react-router-dom'
import { Button, Input, Option, Select } from '@material-tailwind/react'
import { createUser } from '../utils/fetches/registerFetch.js'
import { useContext, useState } from 'react'
import { UserContext } from '../utils/Contexts/UserContext.jsx'
import upload_icon from '../assets/icons/Editsquare.svg'

function CreateUserProfile() {
  const { userIdContext, setUserIdContext } = useContext(UserContext)
  const userId = useParams()

  const sendUserProfile = event => {
    event.preventDefault()
    createUser(event, userId)
    setUserIdContext(userId.id)
  }
  const [imgurl, setImgUrl] = useState('/img/dummy.svg')
  function previewImage(event) {
    const url = URL.createObjectURL(event.target.files[0])
    setImgUrl(url)
  }

  return (
    <>
      <section className="flex flex-col items-center">
        <article className="mt-6">
          <h2 className="text-start mx-auto text-3xl">Create your user profile</h2>
        </article>
        <form onSubmit={sendUserProfile} className="flex flex-col ">
          <div className=" relative w-[140px] h-[140px] mt-4 mx-auto flex">
            <img className="object-cover rounded-full p-1 items-center mx-auto" src={imgurl} alt="profil Image" />
            <img
              className=" absolute bottom-0 right-[5%]"
              src={upload_icon}
              alt="upload_icon"
              onClick={() => document.getElementById('uploadInput').click()}
            />
            <input type="file" name="img" id="uploadInput" onChange={previewImage} className="hidden" />
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
    </>
  )
}

export default CreateUserProfile
