export const updateUser = async (event, userId, navigate) => {
  const form = new FormData(event.target)
  form.set('id', userId)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/`, {
    credentials: 'include',
    method: 'PUT',
    body: form,
  })
  if (response) {
    const data = await response.json()
    sessionStorage.setItem('nickname', JSON.stringify(data))
    navigate('/profile')
  }
}
