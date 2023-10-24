function OtherUserProfilePosts({ post }) {
  return (
    <li className=" overflow-hidden">
      <img className="w-[114px] h-[114px] object-cover rounded-2xl p-1" src={post.image_url} alt="" />
    </li>
  )
}

export default OtherUserProfilePosts
