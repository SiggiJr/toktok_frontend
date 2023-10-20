import { useState } from 'react'
import { searchFetch } from '../utils/fetches/SearchFetch.js'

function Searchbar() {
  const [requestedUser, setRequestedUser] = useState([])

  const searchUser = () => {
    const searchTimeout = setTimeout(() => {
      searchFetch(event, setRequestedUser)
    }, 300)
    return () => {
      clearTimeout(searchTimeout)
    }
  }

  return (
    <>
      <form onChange={searchUser}>
        <input
          placeholder="search user"
          className="border-4 border-black absolute bottom-20 w-screen"
          type="text"
          name="requested_user"
        />
      </form>
    </>
  )
}

export default Searchbar
