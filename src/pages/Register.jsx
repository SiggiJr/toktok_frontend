import { registerFetch } from '../utils/fetches/registerFetch.js'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/icons/Logo.svg'
import { Button, Input } from '@material-tailwind/react'
import eyeOff from '../../src/assets/icons/visibility_off.svg'
import eye from '../../src/assets/icons/visibility_on.svg'
import { useState } from 'react'

function Register() {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(false)
  const navigate = useNavigate()
  const register = event => {
    event.preventDefault()
    registerFetch(event, navigate)
  }

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(false)
      setType('text')
    } else {
      setIcon(true)
      setType('password')
    }
  }

  return (
    <section className="flex flex-col items-center">
      <article className=" mt-6">
        <h2 className="text-start w-72 mx-auto text-4xl">Create your </h2>
        <h2 className="text-start w-72 mx-auto text-4xl">Account</h2>
      </article>
      <div className=" my-28">
        <img src={logo} alt="logo icon" className="w-[140px]" />
      </div>
      <form onSubmit={register} className="felx flex-col bg-zinc-600 justify-center">
        <div className="w-72 mt-8 mx-auto">
          <Input label="Email" type="email" name="email" id="email" />
        </div>
        <div className="w-72 mt-8 mx-auto relative">
          <Input label="Password" type={type} name="password" id="password" />
          <img
            className="cursor-pointer absolute top-2 right-2"
            onClick={handleToggle}
            src={icon ? eye : eyeOff}
            alt="pw_visibility"
          />
        </div>
        <Button className="w-72 mt-8 mx-auto bg-[#E98090] rounded-3xl" type="submit">
          Sign up
        </Button>
      </form>
      <p className="text-center mt-8">
        Already have an account?{' '}
        <Link to="/login" className="text-[#FF4D67]">
          {' '}
          Log in
        </Link>
      </p>
    </section>
  )
}

export default Register
