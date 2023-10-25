import { Link } from 'react-router-dom'

function MyProfilePosts({ post }) {
  return (
    <Link to={`/comment/${post._id}`}>
      <li className="overflow-hidden ">
        <img className="w-[114px] h-[114px] object-cover rounded-2xl p-1" src={post.image_url} alt="" />
      </li>
    </Link>
  )
}

export default MyProfilePosts
