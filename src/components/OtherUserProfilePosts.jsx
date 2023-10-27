import { useNavigate } from 'react-router-dom'

function OtherUserProfilePosts({ post }) {
  console.log('other user', post._id)
  const navigate = useNavigate()
  return (
    <li onClick={() => navigate(`/comment/${post._id}`)} role="presentation" className=" overflow-hidden">
      <img className="w-[114px] h-[114px] object-cover rounded-2xl p-1" src={post.image_url} alt="" />
    </li>
  )
}

export default OtherUserProfilePosts
