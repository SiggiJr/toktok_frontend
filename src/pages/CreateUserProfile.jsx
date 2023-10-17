import { useParams } from 'react-router-dom'

import { Button, Input, Option, Select } from '@material-tailwind/react'

import { createUser } from '../utils/fetches/registerFetch.js'
import { user } from '../utils/data.js'


function CreateUserProfile() {
  const userId = useParams()

  const sendUserProfile = event => {
    event.preventDefault()
    createUser(event, userId)
  }

  return (
    <>


      <section className="flex flex-col items-center">
        <article className="mt-6">
          <h2 className="text-start w-72 mx-auto text-4xl">Create your user profile</h2>
        </article>
        <form onSubmit={sendUserProfile} className="flex flex-col ">
          //<div className="w-72 mt-4 mx-auto">
            //<Input type="file" name="profile_image" />
          //</div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="first name" type="text" name="first_name" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="last name" type="text" name="last_name" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="nickname" type="text" name="nickname" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="profession" type="text" name="profession" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="date of birth" type="date" name="date_of_birth" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="Email" type="email" name="email" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Input label="Mobile" type="number" name="mobile_number" />
          </div>
          <div className="w-72 mt-4 mx-auto">
            <Select label="Gender" name="gender" id="gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="diverse">Diverse</Option>
            </Select>
          </div>
          <textarea name="" id="" cols="10" rows="1" placeholder="website"></textarea>
          <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
            Update
          </Button>

        </form>
      </section>
    </>
  )
}

export default CreateUserProfile
