export const getUser = async setState => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/userdata`, {
    credentials: 'include',
  })
  if (response.ok) {
    const userData = await response.json()
    setState(userData)
    console.log(userData)
  }
}

export const getFeedFetch = async setState => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/getfeed`, {
    credentials: 'include',
  })
  if (response.ok) {
    const userData = await response.json()
    setState(userData)
    console.log(userData)
  }
}

export const getUserProfile = async (param, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${param}`, {
    credentials: 'include',
  })
  if (response.ok) {
    const userData = await response.json()
    setState(userData)
  }
}
