import { useNavigate } from 'react-router-dom'
import { uploadFetch } from '../utils/fetches/uploadFetch'

function Upload() {
  const navigate = useNavigate()

  const upload = event => {
    event.preventDefault()
    uploadFetch(event, navigate)
  }

  return (
    <section>
      <h1>New Post</h1>
      <form>
        <input type="file" name="selected_image" id="selected_image" />
        <button type="button" onClick={upload}>
          Upload
        </button>
      </form>
    </section>
  )
}

export default Upload
