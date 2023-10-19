export const registerFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/register`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })

  if (response) {
    const dataJson = response.json()
    const data = JSON.parse(await dataJson)
    navigate(`/register/${data.id}`)
  }
}

export const createUser = async (event, params, navigate) => {
  const form = new FormData(event.target)
  form.set('id', params.id)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/createprofile`, {
    credentials: 'include',
    method: 'PUT',
    body: form,
  })
  if (response) {
    navigate('/profile')
  }
}

export const updateUser = async (event, params, navigate) => {
  const form = new FormData(event.target)
  form.set('id', params)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/createprofile`, {
    credentials: 'include',
    method: 'PUT',
    body: form,
  })
  if (response) {
    navigate('/profile')
  }
}
