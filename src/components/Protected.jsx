import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Protected() {
  const router = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/check", {
        credentials: 'include'
      })
      console.log(response)
      if (!response.ok) {
        router("/login")
      } else {
        console.log("fetch war ok")
        setAuth(true)
      }
    }
    checkToken()
  }, [])
  return (
    <>
      <h1>protected</h1>
      {auth &&
      <Outlet />
      }
    </>
  )
}

export default Protected
