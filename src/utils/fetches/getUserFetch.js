export const getUser = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/userdata`)
  if (response.ok) {
    const userData = await response.json()
    console.log(userData)
  }
}
