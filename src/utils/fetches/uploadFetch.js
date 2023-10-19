export const uploadFetch = async (event, navigate) => {
  const userId = JSON.parse(sessionStorage.getItem('userId'))
  const form = new FormData(event.target)
  form.set('owner', userId)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/upload`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })

  if (response) {
    const data = await response.json()
    navigate(`/upload/${data.id}`)
  }
}

export const newPost = async (params, navigate) => {
  const form = new FormData()
  form.set('imageId', params)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/upload`, {
    credentials: 'include',
    method: 'PUT',
    body: form,
  })
  if (response) {
    navigate(`/feed`)
  }
}
