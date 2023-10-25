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

export const likeComments = async (nickname, postId, setReload, commentId) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/comments/like`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ nickname: nickname, postId: postId, commentId: commentId }),
  })

  if (response.ok) {
    setReload(prev => !prev)
  }
}
