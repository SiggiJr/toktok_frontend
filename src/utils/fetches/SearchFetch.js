export const searchFetch = async (event, setState) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search/user`, {
    credentials: 'include',
  })

  if (response.ok) {
    const userData = await response.json()
    setState(userData)
  }
}
