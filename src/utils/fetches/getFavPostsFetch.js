export const pushToFavorites = async (postId, setReload) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/setfavposts/${postId}`, {
    credentials: 'include',
  })
  if (response.ok) {
    setReload(prev => !prev)
  }
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

export const deleteFavPos = async postId => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/deletefav?${postId}`, {
    credentials: 'include',
  })
}
