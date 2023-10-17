import { useNavigate } from 'react-router-dom'

function Upload() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>New Post</h1>
      <form>
        <input type="file" name="selected_image" id="selected_image" />
        <button onClick={() => navigate('/')}>Upload</button>
      </form>
    </section>
  )
}

export default Upload
