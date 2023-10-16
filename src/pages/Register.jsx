import { registerFetch } from '../utils/fetches/registerFetch.js'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login.jsx'

function Register() {
  const navigate = useNavigate()
  const register = event => {
    event.preventDefault()
    registerFetch(event, navigate)
  }

  return (
    <>
      <form onSubmit={register} className="flex-col bg-zinc-600 w-52">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Log in</Link>
    </>
  )
}

export default Register
