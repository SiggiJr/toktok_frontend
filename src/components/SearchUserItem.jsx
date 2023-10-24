import { Link } from 'react-router-dom'
import SetFollow from './SetFollow'

function SearchUserItem({ user }) {
  return (
    <section className="flex justify-between items-center ">
      <Link to={`/user/${user._id}`}>
        <article className="flex justify-between mt-4">
          <div className="flex gap-2">
            <div className="  flex justify-center items-center">
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={user.profile_image_url}
                alt=" profile image"
              />
            </div>

            <div>
              <h2 className="text-xl text-center ">{user.nickname}</h2>
              <p className="text-xs text-center text-[#424242]">{user.profession}</p>
            </div>
          </div>
        </article>
      </Link>

      <div className="flex">
        <SetFollow nickname={user.nickname} follower={user.follower || []} />
      </div>
    </section>
  )
}

export default SearchUserItem
