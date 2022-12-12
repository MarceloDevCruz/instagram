// Styled
import { Logo, Search, ItemLinks, HeaderContainer } from './styled'

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

// Logo
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

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/login')
  }

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/"><img src={instagram} alt="Logo" /></Link>
        </Logo>
        <Search >
          <input type="search" name="search" placeholder='Search' />
          <button><BsSearch /></button>
        </Search>
        <ItemLinks>
          <Link to="/"><li><BsHouseDoor /></li></Link>
          <li><BsCursor /></li>
          <li><BsPlusSquare /></li>
          <Link to="/profile"><li><BsPencilSquare /></li></Link>
          <li><BsHeart /></li>
          <li><span onClick={handleLogout}><BsPerson /></span></li>
        </ItemLinks>
      </HeaderContainer>
    </>

  )
}

export default NavBar