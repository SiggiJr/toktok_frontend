export const updateFollower = async nickname => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/follower/updatefollower/${nickname}`, {
    credentials: 'include',
  })
}
