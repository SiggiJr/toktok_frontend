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
