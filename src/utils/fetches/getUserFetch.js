export const getUser = async setState => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/userdata`, {
    credentials: 'include',
  })

  if (response.ok) {
    const userData = await response.json()
    setState(userData)
  }
}

export const getUserProfile = async (param, setUser, setPosts) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/${param}`, {
    credentials: 'include',
  })
  const postResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/otherfeed/${param}`)
  if (response.ok) {
    const userData = await response.json()
    setUser(userData)
  }
  if (postResponse.ok) {
    const userPosts = await postResponse.json()
    setPosts(userPosts)
  }
}
