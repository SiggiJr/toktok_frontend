export const getPost = async (postId, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/postdetail/${postId}`, {
    credentials: 'include',
  })
  if (response.ok) {
    const data = await response.json()
    setState(data)
  }
}

export const writeComment = async (event, postId, setReload) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/comments/addcomment/${postId}`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })
  if (response.ok) {
    setReload(prev => !prev)
  }
}
export const replyComment = async (event, postId, setReload, commentId) => {
  const form = new FormData(event.target)
  form.set('commentId', commentId)
  form.set('postId', postId)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/comment/reply`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })
  if (response.ok) {
    setReload(prev => !prev)
    console.log(commentId)
  }
}
