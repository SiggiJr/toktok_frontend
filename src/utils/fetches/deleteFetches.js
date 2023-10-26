export const deletePost = async postId => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/deletepost?${postId}`, {
    credentials: 'include',
  })
}

export const deleteComment = async postId => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/deletecomment?${postId}`, {
    credentials: 'include',
  })
}
