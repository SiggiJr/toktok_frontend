export const updateFollower = async (nickname, setReload) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/follower/updatefollower/${nickname}`, {
    credentials: 'include',
  })
  if (response.ok) {
    setReload(prev => !prev)
  }
}
