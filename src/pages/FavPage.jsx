import { useEffect, useState } from 'react'
import { getFavPosts } from '../utils/fetches/getFavPostsFetch'
import { useNavigate } from 'react-router-dom'
import heartRed from '../assets/icons/HeartRed.svg'
import backIcon from '../assets/icons/back.svg'

function FavPage() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getFavPosts(setPosts)
  }, [])

  if (!posts.length > 0) {
    return <p>is Loading...</p>
  }
  console.log(posts)

  return (
    <section className="flex flex-col p-6">
      <div className="flex w-screen justify-evenly">
        <div className="flex w-1/3">
          <img
            className="cursor-pointer w-[17px]"
            role="presentation"
            onClick={() => navigate(-1)}
            src={backIcon}
            alt=" back icon"
          />
        </div>
        <div className="flex w-1/3">
          <h2 className="text-xl text-[#FF4D67]">Favorites</h2>
        </div>
        <div className="flex w-1/3"></div>
      </div>
      <div className="flex items-center "></div>
      <div className="flex justify-center border-b-[2px] border-[#FF4D67] w-1/3 gap-2 mt-6 pb-1">
        <img src={heartRed} alt=" heart icon" />
      </div>
      <ul className="flex flex-wrap mt-2">
        {posts.map(post => (
          <li>
            <img
              className="w-[114px] h-[114px] object-cover rounded-xl p-1 cursor-pointer"
              role="presentation"
              onClick={() => navigate(`/details/${post._id}`)}
              src={post.image_url}
              alt="post_image"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FavPage
