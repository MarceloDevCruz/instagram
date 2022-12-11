import React from 'react'

// Styled
import { Logo, Search, ItemLinks, HeaderContainer } from './styled'

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

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <img src={instagram} alt="Logo" />
        </Logo>
        <Search >
          <input type="search" name="search" placeholder='Search' />
          <button><BsSearch /></button>
        </Search>
        <ItemLinks>
          <BsHouseDoor />
          <BsCursor />
          <BsPlusSquare />
          <BsPencilSquare />
          <BsHeart />
          <BsPerson />
        </ItemLinks>
      </HeaderContainer>
    </>

  )
}

export default Header