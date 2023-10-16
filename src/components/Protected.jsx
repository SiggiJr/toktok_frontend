import { Outlet } from 'react-router-dom'

function Protected() {
  return (
    <>
      <h1>protected</h1>
      <Outlet />
    </>
  )
}

export default Protected
