import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function SearchUserItem({ user }) {
  return (
    <Link to={`/user/${user._id}`}>
      <article className="flex justify-between items-center mt-2">
        <div className="flex gap-2">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
            <img src={user.profile_image_url} alt="" />
          </div>
          <div>
            <h2 className="text-xl text-center ">{user.nickname}</h2>
            <p className="text-xs text-center text-[#424242]">{user.profession}</p>
          </div>
        </div>
        <Button className="h-fit bg-[#E98090] rounded-3xl" type="submit">
          <p>Follow</p>
        </Button>
      </article>
    </Link>
  )
}

export default SearchUserItem
