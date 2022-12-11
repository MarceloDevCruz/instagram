// Styled
import { Container } from './styled'

// Images
import instagram from '../../assets/img/instagram.png'

// Components
import { Link } from 'react-router-dom'
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'

// Hooks
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { login, reset } from '../../slices/authSlice'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email, password
    }

    dispatch(login(user))
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <Container>
      <section>
        <img src={instagram} alt="Instagram logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="email" name="email"
            placeholder='Phone number,username, or email'
            required onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password"></label>
          <input type="password" name="password"
            placeholder='Password'
            required onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input type="submit" value="Log in" />
        </form>
        <div>
          <span>or</span>
        </div>
        <p>Login with Facebook</p>
        <div>
          <p>Don't have an account? Sign Up</p>
        </div>
        <div>
          {error && <MessageDanger msg={error} type="danger" />}
          {!error && <MessageSuccess msg={error} type="sucess" />}
        </div>
      </section>
    </Container>
  )
}

export default Login