export const uploadFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/upload`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })

  if (response) {
    const data = await response.json()
    console.log(data)
    navigate(`/upload/${data.id}`)
  }
  console.log('upload geht')
}
