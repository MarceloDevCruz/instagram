// Components
import { Link } from 'react-router-dom'
import MessageDanger from '../../components/message/danger/MessageDanger'
import MessageSuccess from '../../components/message/success/MessageSuccess'

// Hooks
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Imagem
import vector from '../../assets/img/login-vector.svg'

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
    <section className="login">
      <div className="login__container">
        <img src={vector} alt="vector" className="login__vector" />
        <div className="form__container">
          <h2 className="form__title">Faça Login</h2>
          <form
            onSubmit={handleSubmit}>
            <input type="email" className="form__input" placeholder="Seu email..."
              name="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="form__input" placeholder="Sua senha..."
              name="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className="btn btn-outline-white" type="submit" >Entrar</button>
          </form>
          <p className=" mg-top-sm">Não possui conta?</p>
          <p >Faça o <Link to="/register">cadastro</Link> no site</p>

          {/* TROCAR POR UMA FLASH MESSAGER! */}
          {error && <MessageDanger msg={error} type="danger" />}
          {!error && <MessageSuccess msg={error} type="sucess" />}
        </div>
      </div>
    </section>

  )
}

export default Login