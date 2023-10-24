function OtherUserProfilePosts({ post }) {
  return (
    <li className="w-1/3 overflow-hidden px-1 py-1">
      <img className="rounded-2xl" src={post.image_url} alt="" />
    </li>
  )
}

export default OtherUserProfilePosts
