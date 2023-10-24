export const getPost = async (postId, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/postdetail/${postId}`, {
    credentials: 'include',
  })
  if (response.ok) {
    const data = await response.json()
    setState(data)
    console.log(data)
  }
}
