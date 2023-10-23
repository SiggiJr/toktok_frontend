import { Avatar } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import ProfileSettings from '../components/ProfileSettings'
import brandIcon from '../assets/icons/Logo.svg'
import plusIcon from '../assets/icons/Plus2.svg'
import edit from '../assets/icons/Edit.svg'
import moreIcon from '../assets/icons/MoreCircle.svg'
import postIcon from '../assets/icons/posticon.svg'
import editIcon from '../assets/icons/Editsquare.svg'
import { getUser } from '../utils/fetches/getUserFetch.js'

function MyProfilePage({ loading, setLoading }) {
  const [user, setUser] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMoreCycleClick = () => {
    setIsExpanded(prevState => !prevState)
  }

  const handleEditClick = () => {}

  useEffect(() => {
    getUser(setUser)
    setLoading(true)
  }, [loading])

  return (
    <>
      <section className="flex flex-col px-6 pt-6">
        <article className="flex gap-2 justify-between items-center">
          <div className="flex gap-2">
            <img src={brandIcon} alt="logo img" className="w-[32px] h-[32px]" />
            <h2 className="text-2xl">my profile</h2>
          </div>
          <div className="flex gap-2">
            <img src={plusIcon} alt=" plus icon" />
            <img src={edit} alt="edit icon" onClick={handleEditClick} />
            <img src={moreIcon} alt="more icon" onClick={handleMoreCycleClick} />
          </div>
        </article>
        <div className="relative flex flex-col w-max items-end gap-4 w-[120px] h-[120px] mx-auto rounded-full my-6">
          <Avatar src={user.profile_image_url} alt="avatar" size="xxl" />
          <img className="absolute bottom-0 right-0" src={editIcon} alt="edit icon" />
        </div>
        <article>
          <h2 className="text-2xl text-center ">{user.nickname}</h2>
          <h3 className="text-l text-center py-2">{user.profession}</h3>
          <p className=" text-xs text-center text-[#424242]">{user.bio}</p>
          <p className="text-xs text-center text-[#246BFD] pt-2">{user.website}</p>
        </article>
        <article>
          <ul className="flex justify-between mt-6 mx-7">
            <li className="flex flex-col items-center">
              <span className="text-2xl">0</span>
              <p className="text-sm text-[#424242]">posts</p>
            </li>

            <li className="flex flex-col items-center">
              <span className="text-2xl">0</span>
              <p className="text-sm text-[#424242]">followers</p>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-2xl">0</span>
              <p className="text-sm text-[#424242]">following</p>
            </li>
          </ul>
        </article>
        <article>
          <div className="flex justify-center items-center gap-3 border-b-[3px] border-[#FF4D67] w-1/3 mt-8 pb-2">
            <img src={postIcon} alt=" post icon" />
            <h2 className="text-[#FF4D67]">Posts</h2>
          </div>
          <ul className="flex flex-wrap my-6 overflow-hidden">
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>{' '}
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>{' '}
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>
            <li className="w-1/3 overflow-hidden px-1">
              <img src="../img/IMG_0820.JPG" alt="post image" className="rounded-2xl" />
            </li>
          </ul>
        </article>
      </section>

      {isExpanded && <ProfileSettings />}
    </>
  )
}

export default MyProfilePage
