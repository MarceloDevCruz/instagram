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

// Imagem
import vector from '../../assets/img/register-vector.svg'

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
    <section className="register">
      <div className="register__container">
        <img src={vector} alt="vector" className="register__vector" />
        <div className="form__container-register">
          <h2 className="form__title">Faça Registro</h2>
          <form
            onSubmit={handleSubmit}>

            <input type="email" className="form__input" name="email"
              placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <input type="text" className="form__input" name="name"
              placeholder='Digite seu nome...' onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <input type="password" className="form__input" name="password"
              placeholder='Digite sua senha...' onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <input type="password" className="form__input" name="confirmPassword"
              placeholder='Confirme sua senha...' onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />

            <button className="btn btn-outline-white" type="submit" >Cadastrar</button>
          </form>
          <p className=" mg-top-sm">Já possui conta?</p>
          <p >Faça o <Link to="/login">Login</Link> no site</p>

          {/* TROCAR POR UMA FLASH MESSAGER! */}
          {error && <MessageDanger msg={error} type="danger" />}
          {!error && <MessageSuccess msg={error} type="sucess" />}
        </div>
      </div>
    </section>
  )
}

export default Register