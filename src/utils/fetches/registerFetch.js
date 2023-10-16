import { useParams } from 'react-router-dom'

export const registerFetch = async (event, navigate) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    method: 'POST',
    body: form,
  })
  
  console.log('register geht')
  if (response) {
    const data = response.json()
    const data2 = JSON.parse(await data)
    navigate(`/register/${data2.id}`)
    console.log(await data2)
  }
}

export const createUser = event => {
  const params = useParams()
  const form = new FormData().set('id', params)
}
