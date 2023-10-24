export const getFeedFetch = async setState => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/getfeed`, {
    credentials: 'include',
  })
  if (response.ok) {
    const userData = await response.json()
    setState(userData)
  }
}

export const myPostsFetch = async setState => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feed/ownfeed`, {
    credentials: 'include',
  })
  if (response.ok) {
    const userData = await response.json()
    setState(userData)
    console.log(userData)
  }
}
