export const getLikes = async (nickname, postId, setReload) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/likes`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ nickname: nickname, postId: postId }),
  })

  if (response.ok) {
    setReload(prev => !prev)
  }
}
