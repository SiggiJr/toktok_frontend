import { useEffect, useState } from 'react'
import { input } from '@material-tailwind/react'
import { searchFetch } from '../utils/fetches/SearchFetch.js'

function Searchbar() {
  const [requestedUser, setRequestedUser] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      searchFetch(setRequestedUser, inputValue)
    }, 300)
  }, [inputValue])

  console.log(inputValue)

  return (
    <>
      <form>
        <input
          onChange={event => {
            setInputValue(event.target.value)
          }}
          placeholder="search user"
          className="border-4 border-black absolute bottom-20 w-screen"
          type="text"
          name="requested_user"
          value={inputValue}
        />
      </form>
    </>
  )
}

export default Searchbar
