import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Protected() {
  const router = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/check`, {
        credentials: 'include',
      })
      if (!response.ok) {
        router('/login')
      } else {
        setAuth(true)
      }
    }
    checkToken()
  }, [])
  return <>{auth && <Outlet />}</>
}

export default Protected
