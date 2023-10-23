import { useEffect, useState } from 'react'
import { searchFetch } from '../utils/fetches/SearchFetch.js'
import { input } from '@material-tailwind/react'
import SearchUserItem from '../components/SearchUserItem.jsx'

function SearchPage(props) {
  const [requestedUser, setRequestedUser] = useState([])
  const [inputValue, setInputValue] = useState()

  useEffect(() => {
    if (inputValue === '') {
      return
    }
    const searchTimeout = setTimeout(() => {
      searchFetch(inputValue, setRequestedUser)
    }, 700)
    return () => {
      clearTimeout(searchTimeout)
    }
  }, [inputValue])

  console.log(requestedUser)
  return (
    <>
      <form>
        <input
          onChange={event => {
            setInputValue(event.target.value)
          }}
          placeholder="search user"
          className="border-4 border-black absolute top-0 w-screen"
          type="text"
          name="requested_user"
          value={inputValue}
        />
      </form>
      <section className="mt-8">
        {requestedUser.map(user => (
          <SearchUserItem key={user._id} user={user} />
        ))}
      </section>
    </>
  )
}

export default SearchPage
