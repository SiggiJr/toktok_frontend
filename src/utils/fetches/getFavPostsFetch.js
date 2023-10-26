export const pushToFavorites = async postId => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/setfavposts/${postId}`, {
    credentials: 'include',
  })
}

export const getFavPosts = async setPosts => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/getfavposts`, {
    credentials: 'include',
  })
  if (response.ok) {
    const data = await response.json()
    setPosts(data)
  }
}
