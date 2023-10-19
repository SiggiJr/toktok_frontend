import ProfileSettings from '../components/ProfileSettings'
import logo from '../assets/icons/Logo.svg'
import plus2 from '../assets/icons/Plus2.svg'
import edit from '../assets/icons/Edit.svg'
import morecicle from '../assets/icons/MoreCircle.svg'
import { Avatar } from '@material-tailwind/react'
import edit_icon from '../assets/icons/Editsquare.svg'

function MyProfilePage() {
  return (
    <>
      <section className="flex flex-col px-6 pt-6">
        <article className="flex gap-2 justify-between items-center">
          <div className="flex gap-2">
            <img src={logo} alt="logo img" className="w-[32px] h-[32px]" />
            <h2 className="text-2xl">my profile</h2>
          </div>
          <div className="flex gap-2">
            <img src={plus2} alt=" plus icon" />
            <img src={edit} alt="edit icon" />
            <img src={morecicle} alt="more icon" />
          </div>
        </article>
        <div className="relative flex flex-col w-max items-end gap-4 w-[120px] h-[120px] mx-auto rounded-full my-6">
          <Avatar
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
            size="xxl"
          />
          <img className="absolute bottom-0 right-0" src={edit_icon} alt="edit icon" />
        </div>
        <article>
          <h2 className="text-2xl text-center ">my nickname</h2>
          <h3 className="text-l text-center py-2">my professtion</h3>
          <p className=" text-xs text-center text-[#424242]">
            my bio : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore..
          </p>
          <p className="text-xs text-center text-[#246BFD] pt-2">www.yourdomain.com</p>
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
        <div></div>
      </section>

      {/* <ProfileSettings /> */}
    </>
  )
}

export default MyProfilePage
