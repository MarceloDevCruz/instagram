import React from 'react'

// Bootstrap icons
import {
  BsHouseDoor, BsPlusCircle,
  BsPerson, BsArrowRightCircle,
  BsChevronRight
} from 'react-icons/bs'

// hooks
import { useState, useCallback } from 'react'
import { useAuthorization } from '../../hooks/useAuthorization'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout, reset } from '../../slices/authSlice'

const Sidebar = () => {

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
    <section className="sidebar">
      <div className="sidebar__button-container">
      </div>
      <nav className="sidebar__container">
        <ul className="sidebar__list">
          <button><li>
            <Link to="/" className="sidebar__items sidebar__items--home">
              <BsHouseDoor />Home</Link></li></button>
          <button><li>
            <Link to={`/users/${user._id}`} className="sidebar__items sidebar__items--post">
              <BsPlusCircle />Create Post</Link></li></button>
          <button><li>
            <Link to="/profile" className="sidebar__items sidebar__items--edit">
              <BsPerson />Edit Profile</Link></li></button>
          <button onClick={handleLogout}
          ><li className="sidebar__items sidebar__items--logout"><BsArrowRightCircle />Logout</li></button>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <p className="sidebar__paragraphy">UnsplashGram ©</p>
      </div>
    </section>
  )
}

export default Sidebar