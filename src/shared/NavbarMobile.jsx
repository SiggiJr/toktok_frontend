import { NavLink, useLocation } from 'react-router-dom'
import home from '../assets/icons/Home.svg'
import homeRed from '../assets/icons/Home_red.svg'
import search from '../assets/icons/Search.svg'
import searchRed from '../assets/icons/Search_red.svg'
import upload from '../assets/icons/Plus.svg'
import uploadRed from '../assets/icons/Plus_red.svg'
import profile from '../assets/icons/Profil.svg'
import profileRed from '../assets/icons/Profil_red.svg'
import { useState } from 'react'
import Searchbar from '../components/Searchbar.jsx'

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
    setToggleSearchBar(false)
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
    setToggleSearchBar(false)
  }
  const handleProfileClick = () => {
    setIsHomeActive(false)
    setIsSearchActive(false)
    setIsUploadActive(false)
    setIsProfileActive(true)
    setToggleSearchBar(false)
  }
  return (
    <ul className=" absolute bottom-0 left-0 right-0 flex w-sceen justify-evenly  h-12 text-[#9E9E9E] text-[10px]">
      <li className="flex flex-col justify-center items-center">
        <NavLink to="/feed" onClick={handleHomeClick}>
          <img src={isHomeActive ? homeRed : home} alt="home icon" className="h-[24px] mx-auto" />
          <p style={isHomeActive ? { color: 'red' } : { color: ' ' }}>Home</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink
          to="/feed"
          onClick={() => {
            handleSearchClick()
            setToggleSearchBar(!toggleSearchBar)
          }}>
          <img src={isSearchActive ? searchRed : search} alt="search icon" className="h-[24px] mx-auto" />
          <p style={isSearchActive ? { color: 'red' } : { color: ' ' }}>Search</p>
        </NavLink>
        {toggleSearchBar && <Searchbar />}
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/upload" onClick={handleUploadeClick}>
          <img src={isUploadActive ? uploadRed : upload} alt="upload icon" className="h-[24px] mx-auto" />
          <p style={isUploadActive ? { color: 'red' } : { color: ' ' }}>Upload</p>
        </NavLink>
      </li>
      <li className="flex flex-col justify-center">
        <NavLink to="/profile" onClick={handleProfileClick}>
          <img src={isProfileActive ? profileRed : profile} alt="profile icon" className="h-[24px] mx-auto" />
          <p style={isProfileActive ? { color: 'red' } : { color: ' ' }}>Profile</p>
        </NavLink>
      </li>
    </ul>
  )
}

export default NavbarMobile
