export const uploadFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })

  if (response) {
    const dataJson = response.json()
    const data = JSON.parse(await dataJson)
    navigate(`/upload/${data.id}`)
  }

  console.log('upload geht')
}
