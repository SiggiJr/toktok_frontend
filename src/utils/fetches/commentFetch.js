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
  form.set('nickname', JSON.parse(sessionStorage.getItem('nickname')))
  form.set('userId', JSON.parse(sessionStorage.getItem('userId')))
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/comment/reply`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })
  if (response.ok) {
    setReload(prev => !prev)
  }
}

export const getComment = async (postId, commentId, setComment, setReload) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/comment/getcomment`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      postId: postId,
      commentId: commentId,
    }),
  })
  if (response.ok) {
    const data = await response.json()
    setComment(data)
    setReload(prev => !prev)
  }
}
