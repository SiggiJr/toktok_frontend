import { useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import { uploadFetch } from '../utils/fetches/uploadFetch'
import closeIcon from '../assets/icons/Closesquare.svg'
import closeIconWhite from '../assets/icons/ClosesquareWhite.svg'
import cameraIcon from '../assets/icons/cam.svg'

function Upload({ darkMode }) {
  const [selectedImage, setSelectedImage] = useState(null)

  function handleImageChange(event) {
    const file = event.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setSelectedImage(imageUrl)
  }

  const navigate = useNavigate()
  const upload = event => {
    event.preventDefault()
    uploadFetch(event, navigate)
  }

  return (
    <section className="p-6 flex flex-col">
      <article className="flex mt-6 gap-2 items-center">
        <img
          role="presentation"
          onClick={() => navigate(-1)}
          src={darkMode ? closeIconWhite : closeIcon}
          alt=" plus icon"
        />
        <h2 className="text-xl">New Post</h2>
      </article>
      <article className="mt-6">
        <form onSubmit={upload}>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="selected_image"
              className="flex flex-col items-center justify-center w-full h-64 border-2 
              border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-transparent dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              {selectedImage ? (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 overflow-hidden">
                  <img
                    className="object-cover object-center object-top h-[380px] w-[380px]"
                    src={selectedImage}
                    alt="selected_image"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
              )}

              <input
                id="selected_image"
                name="selected_image"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                required
              />
            </label>
          </div>
          <div className="flex mt-8 justify-center">
            <Button className="w-[150px] bg-[#E98090] rounded-3xl" type="submit">
              Upload
            </Button>
          </div>
        </form>
      </article>
      <article>
        <div className="flex justify-center items-center gap-3 border-b-[3px] border-[#FF4D67] w-1/3 mt-8 pb-2">
          <img src={cameraIcon} alt=" plus icon" />
          <h2 className="text-[#FF4D67]">Gallery</h2>
        </div>
        <ul className="flex flex-wrap my-6 overflow-hidden">
          <li>
            <img
              src="https://images.unsplash.com/photo-1697789103836-78b86e138e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDYzMQ&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1696065243968-21d323a23b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDY2NQ&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1694590000075-8ece6e2a2fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDcwOA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>{' '}
          <li>
            <img
              src="https://images.unsplash.com/photo-1696781365046-39779e1f0461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDcyNQ&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>{' '}
          <li className="w-1/3 overflow-hidden px-1 py-1">
            <img
              src="https://images.unsplash.com/photo-1694605675418-25f93232c2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDc0NA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1697028670332-89b09a786a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDc3NQ&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1695173585549-233c886780cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDc5NQ&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1696515559458-21de57c590b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDgxMw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
          <li>
            <img
              src="https://images.unsplash.com/photo-1695695408003-cb07e155d6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5ODM1MDgyOA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="post image"
              className="w-[114px] h-[114px] object-cover rounded-2xl p-1"
            />
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Upload
