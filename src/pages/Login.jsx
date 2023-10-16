import { Link } from 'react-router-dom'
import { loginFetch } from '../utils/fetches/loginFetch.js'

function Login() {
  const login = event => {
    event.preventDefault()
    loginFetch(event)
  }
  return (
    <>
      <form onSubmit={login} className="flex-col bg-zinc-600 w-52">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Log in</button>
      </form>
      <Link to="/login">Need an account? Register</Link>
    </>
  )
}

export default Login
