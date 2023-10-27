export const deletePost = async postId => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/deletepost/${postId}`, {
    credentials: 'include',
    method: 'DELETE',
  })
}

export const deleteComment = async (comment_Id, postId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/post/comments/deletecomment/${postId.postId}/${comment_Id}`,
    {
      credentials: 'include',
      method: 'DELETE',
    },
  )
}
