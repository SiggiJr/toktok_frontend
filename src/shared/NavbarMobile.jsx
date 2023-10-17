import { NavLink } from 'react-router-dom'

function NavbarMobile() {
  return (
    <div>
      <NavLink to="/feed">Home Icon</NavLink>
      <NavLink to="/feed">Search Icon</NavLink>
      <NavLink to="/upload">Upload Icon</NavLink>
      <NavLink to="/profile">Profile Icon</NavLink>
    </div>
  )
}

export default NavbarMobile
