export const loginFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })
  if (response) {
    const data = await response.json()
    sessionStorage.setItem('userId', JSON.stringify(data))
    navigate('/profile')
  }
}
