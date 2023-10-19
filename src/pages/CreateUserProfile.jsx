import { useNavigate, useParams } from 'react-router-dom'
import { Button, Checkbox, Input, Option, Radio, Select } from '@material-tailwind/react'
import { createUser } from '../utils/fetches/registerFetch.js'
import { useContext, useState } from 'react'
import { UserContext } from '../utils/Contexts/UserContext.jsx'
import uploadIcon from '../assets/icons/Editsquare.svg'

function CreateUserProfile() {
  const { userIdContext, setUserIdContext } = useContext(UserContext)
  const userId = useParams()
  const navigate = useNavigate()

  const sendUserProfile = event => {
    event.preventDefault()
    createUser(event, userId, navigate)
    console.log('params', userId.id)
    setUserIdContext(userId.id)
  }

  const [imgUrl, setImgUrl] = useState('/img/dummy.svg')

  function previewImage(event) {
    const url = URL.createObjectURL(event.target.files[0])
    setImgUrl(url)
  }

  return (
    <section className="flex flex-col items-center">
      <article className="mt-6">
        <h2 className="text-start mx-auto text-3xl">Create your user profile</h2>
      </article>
      <form onSubmit={sendUserProfile} className="flex flex-col ">
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
          <Input label="Mobile" type="number" name="mobile_number" />
        </div>
        <div className="flex w-72 mt-3 mx-auto gap-8 text-blue-gray-400">
          <div className="flex">
            <label className=" mr-2" htmlFor="male">
              Male
            </label>
            <input type="radio" name="gender" id="male" />
          </div>
          <div className="felx">
            <label className=" mr-2" htmlFor="female">
              Female
            </label>
            <input type="radio" name="gender" id="female" />
          </div>
          <div className="felx">
            <label className=" mr-2" htmlFor="deverse">
              Diverse
            </label>
            <input type="radio" name="gender" id="deverse" />
          </div>
        </div>

        <div className="w-72 mt-3 mx-auto">
          <Input label="Website" type="text" name="website" />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Create User
        </Button>
      </form>
    </section>
  )
}

export default CreateUserProfile
