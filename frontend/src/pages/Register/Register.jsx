

// Components
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'

// Hooks
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { register, reset } from '../../slices/authSlice'

import instagram from '../../assets/img/instagram.png'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name, email, password, confirmPassword,
    }

    dispatch(register(user))
  }

  // resetar os states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <section>
      <img src={instagram} alt="Instagram logo"></img>
      <div>
        <button> <BsFacebook /> Log in with Facebook</button>
      </div>
      <p><strong>Or</strong></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email" name="email"
          placeholder='Email' onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="name"></label>
        <input type="text" name="name"
          placeholder='Full Name' onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor="password"></label>
        <input type="password" name="password"
          placeholder='Password' onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <label htmlFor="confirmPassword"></label>
        <input type="password" name="confirmPassword"
          placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        {!loading && <input type="submit" value="Sign up" />}
        {loading && <input type="submit" value="Loading..." disabled />}
      </form>
      <div>
        <p>By signing up, you agree to our
          <strong> Terms, Data Policy</strong> and
          <strong> Cookies Policy.</strong>
        </p>
      </div>
      <div>
        {error && <MessageDanger msg={error} type="danger" />}
        {!error && <MessageSuccess msg={error} type="sucess" />}
      </div>
    </section>
  )
}

export default Register