export const searchFetch = async (value, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search/user`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ requestedUser: value }),
  })

  if (response.ok) {
    const userData = await response.json()
    setState(userData)
  }
}
