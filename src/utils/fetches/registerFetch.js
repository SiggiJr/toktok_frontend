export const registerFetch = event => {
  const form = new FormData(event.target)
  fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    method: 'POST',
    body: form,
  })
  console.log('register geht')
}

export const createrUser = event => {
  const form = new FormData().set('id', params)
}
