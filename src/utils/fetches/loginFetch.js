export const loginFetch = event => {
  const form = new FormData(event.target.location)
  fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method: 'POST',
    body: form,
  })
  console.log('login geht')
}
