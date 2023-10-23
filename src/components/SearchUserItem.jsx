import { Link } from 'react-router-dom'

function SearchUserItem({ user }) {
  return (
    <Link to={`/user/${user._id}`}>
      <article className="flex">
        <p>{user.nickname}</p>
        <img src={user.profile_image_url} alt="" />
      </article>
    </Link>
  )
}

export default SearchUserItem
