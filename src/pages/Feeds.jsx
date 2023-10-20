import { useEffect, useState } from 'react'
import { getFeedFetch } from '../utils/fetches/getUserFetch.js'

function Feeds() {
  const [user, setUser] = useState()

  useEffect(() => {
    getFeedFetch(setUser)
  }, [])

  return <section />
}

export default Feeds
