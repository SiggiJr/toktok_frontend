export const getPost = async (postId, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/postdetails/${postId}`, {
    credentials: 'include',
  })
  if (response.ok) {
    const data = await response.json()
    setState(data)
  }
}
