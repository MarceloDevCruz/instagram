// Bootstrap icons
import {
  BsHouseDoor,
  BsCursor,
  BsPlusSquare,
  BsPencilSquare,
  BsHeart,
  BsPerson,
  BsSearch
} from "react-icons/bs";

import instagram from '../../assets/img/instagram.png'

// hooks
import { useState } from 'react'
import { useAuthorization } from '../../hooks/useAuthorization'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout, reset } from '../../slices/authSlice'

const NavBar = () => {

  const { auth } = useAuthorization()
  const { user } = useSelector((state) => state.auth)

  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <>
      <Link to="/"><img src={instagram} alt="Logo" /></Link>
      <form onSubmit={handleSearch}>
        <input type="search" name="search" placeholder='Search'
          onChange={(e) => setQuery(e.target.value)} />
        <button><BsSearch /></button>
      </form>

      <Link to="/"><li><BsHouseDoor /></li></Link>
      <li><BsCursor /></li>
      <Link to={`/users/${user._id}`}><li><BsPlusSquare /></li></Link>
      <Link to="/profile"><li><BsPencilSquare /></li></Link>
      <li><BsHeart /></li>
      <li><span onClick={handleLogout}><BsPerson /></span></li>
    </>
  )
}

export default NavBar