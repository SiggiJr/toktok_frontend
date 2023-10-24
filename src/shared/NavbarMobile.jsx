import { NavLink, useLocation } from 'react-router-dom'
import homeIcon from '../assets/icons/Home.svg'
import homeIconRed from '../assets/icons/Home_red.svg'
import searchIcon from '../assets/icons/Search.svg'
import searchIconRed from '../assets/icons/Search_red.svg'
import uploadIcon from '../assets/icons/Plus.svg'
import uploadIconRed from '../assets/icons/Plus_red.svg'
import profileIcon from '../assets/icons/Profil.svg'
import profileRed from '../assets/icons/Profil_red.svg'
import { useState } from 'react'

function NavbarMobile() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false)

  const location = useLocation()
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isUploadActive, setIsUploadActive] = useState(false)
  const [isProfileActive, setIsProfileActive] = useState(false)

  const handleHomeClick = () => {
    setIsHomeActive(true)
    setIsSearchActive(false)
    setIsUploadActive(false)
    setIsProfileActive(false)
  }
  const handleSearchClick = () => {
    setIsHomeActive(false)
    setIsSearchActive(true)
    setIsUploadActive(false)
    setIsProfileActive(false)
  }
  const handleUploadeClick = () => {
    setIsHomeActive(false)
    setIsSearchActive(false)
    setIsUploadActive(true)
    setIsProfileActive(false)
  }
  const handleProfileClick = () => {
    setIsHomeActive(false)
    setIsSearchActive(false)
    setIsUploadActive(false)
    setIsProfileActive(true)
  }
  return (
    <ul className="sticky bottom-0 left-0 right-0 flex w-sceen justify-evenly  h-12 text-[#9E9E9E] text-[10px] bg-white">
      <li className="flex flex-col justify-center items-center">
        <NavLink to="/feed" onClick={handleHomeClick}>
          <img src={isHomeActive ? homeIconRed : homeIcon} alt="home icon" className="h-[24px] mx-auto" />
          <p style={isHomeActive ? { color: 'red' } : { color: ' ' }}>Home</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink
          to="/search"
          onClick={() => {
            handleSearchClick()
            setToggleSearchBar(!toggleSearchBar)
          }}>
          <img src={isSearchActive ? searchIconRed : searchIcon} alt="search icon" className="h-[24px] mx-auto" />
          <p style={isSearchActive ? { color: 'red' } : { color: ' ' }}>Search</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/upload" onClick={handleUploadeClick}>
          <img src={isUploadActive ? uploadIconRed : uploadIcon} alt="upload icon" className="h-[24px] mx-auto" />
          <p style={isUploadActive ? { color: 'red' } : { color: ' ' }}>Upload</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/profile" onClick={handleProfileClick}>
          <img src={isProfileActive ? profileRed : profileIcon} alt="profile icon" className="h-[24px] mx-auto" />
          <p style={isProfileActive ? { color: 'red' } : { color: ' ' }}>Profile</p>
        </NavLink>
      </li>
    </ul>
  )
}

export default NavbarMobile
