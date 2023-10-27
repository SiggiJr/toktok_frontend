import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-tailwind/react'
import { useState } from 'react'
import { createUser } from '../utils/fetches/registerFetch.js'
import uploadIcon from '../assets/icons/Editsquare.svg'

function CreateUserProfile({ darkMode }) {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const navigate = useNavigate()

  const sendUserProfile = event => {
    event.preventDefault()
    createUser(event, userId, navigate)
  }
  console.log(userId)
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
            role="presentation"
            className=" absolute bottom-0 right-[5%]"
            src={uploadIcon}
            alt="upload_icon"
            onClick={() => document.getElementById('uploadInput').click()}
          />
          <input type="file" name="profile_image" id="uploadInput" onChange={previewImage} className="hidden" />
        </div>
        <div className="w-72 mt-8 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="first name" type="text" name="first_name" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="last name" type="text" name="last_name" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="nickname" type="text" name="nickname" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="profession" type="text" name="profession" />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="date of birth" type="date" name="date_of_birth" required />
        </div>
        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="Mobile" type="number" name="mobile_number" />
        </div>

        <div className="flex w-72 mt-3 mx-auto gap-8 text-blue-gray-400 justify-around">
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

        <div className="w-72 mt-3 mx-auto">
          <Input color={darkMode ? 'white' : 'gray'} label="Website" type="text" name="website" />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Create User
        </Button>
      </form>
    </section>
  )
}

export default CreateUserProfile
