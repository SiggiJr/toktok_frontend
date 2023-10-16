export const registerFetch = event => {
  const form = new FormData(event.target.location)
  fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    method: 'POST',
    body: form,
  })
  console.log('register geht')
}
