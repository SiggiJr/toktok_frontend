import { useParams } from 'react-router-dom'
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
      <section className="flex-col">
        <h1>Create your user profile</h1>
        <form onSubmit={sendUserProfile}>
          {/*<input type="file" name="profile_image" />*/}
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="nickname" />
          <input type="text" name="profession" />
          <input type="date" name="date_of_birth" />
          <input type="tel" name="mobile_number" />
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="diverse">Diverse</option>
          </select>
          <textarea name="website" id="" cols="10" rows="1" placeholder="website"></textarea>
          <button type="submit">Update</button>
        </form>
      </section>
    </>
  )
}

export default CreateUserProfile
