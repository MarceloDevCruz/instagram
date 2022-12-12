import styled from 'styled-components';
import { gray10, gray4, gray5, gray8, gray0, gray9, gray6, gray7 } from '../../styles/Colors'

export const HeaderContainer = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border-bottom: 2px solid ${gray4};
  }
`

export const Logo = styled.div`
  img {
    width: 160px;
  }
`
export const Search = styled.form`
  input[type=search] {
    outline: none;
    border: .1em solid ${gray7};
    height: 35px;
    width: 300px;
    border-radius: 5px;
    padding: 5px;
    margin: 0 auto;
  }

  input[type=search]::placeholder {
    color: ${gray7}
  }

  button {
    height: 35px;
    border: none;
    margin-left: -1.7em;
    background: transparent;
    font-size: .92em;
    color: ${gray8}
  }
`

export const ItemLinks = styled.ul`
  {
    display: flex;
  }

  svg {
    font-size: 1.6em;
    margin-left: 1em;
    color: ${gray9};
    cursor: pointer;
  }
`

