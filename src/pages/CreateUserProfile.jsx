import { useParams } from 'react-router-dom'
import { Button, Input } from '@material-tailwind/react'

function CreateUserProfile() {
  const params = useParams()
  return (
    <>
      <section className="flex-col">
        <h1>Create your user profile</h1>
        <form>
          <input type="file" name="profile_image" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="nickname" />
          <input type="text" name="profession" />
          <input type="date" name="date_of_birth" />
          <input type="email" name="email" />
          <input type="number" name="mobile_number" />
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="diverse">Diverse</option>
          </select>
          <textarea name="" id="" cols="10" rows="1" placeholder="website"></textarea>
          <button type="button">Update</button>
        </form>
      </section>
    </>
  )
}

export default CreateUserProfile
