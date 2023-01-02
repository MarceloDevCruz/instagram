import React from 'react'

import { BsSearch, BsChevronLeft } from 'react-icons/bs'

import background from '../../assets/img/header-background.png'
import logo from '../../assets/img/instagram.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <form className='header__form'>
        <input type="search" placeholder='search...' className="header__search" />
        <button className="header__button"><BsSearch /></button>
      </form>

      <button className="header__sidebar"><BsChevronLeft /></button>
    </header>
  )
}

export default Header