import { useEffect, useState } from 'react'
import { searchFetch } from '../utils/fetches/SearchFetch.js'
import SearchUserItem from '../components/SearchUserItem.jsx'
import userPageIcon from '../assets/icons/userPageIcon.svg'
import { Input } from '@material-tailwind/react'

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
    <div className="flex flex-col h-screen p-6">
      <form>
        <Input
          label="search user"
          onChange={event => {
            setInputValue(event.target.value)
          }}
          type="text"
          name="requested_user"
          value={inputValue}
        />
      </form>
      <section className="mt-8">
        <div className="flex justify-center pb-2 border-b-[3px] border-[#FF4D67]">
          <img src={userPageIcon} alt="" />
        </div>
        {requestedUser.map(user => (
          <SearchUserItem key={user._id} user={user} />
        ))}
      </section>
    </div>
  )
}

export default SearchPage
