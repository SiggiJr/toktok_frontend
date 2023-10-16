export const loginFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method: 'POST',
    body: form,
  })
}
