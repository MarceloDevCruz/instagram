import { createGlobalStyle } from 'styled-components'
import { gray1, blue3, blue1 } from './Colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }

  html, body, #root {
    height: 100%;
    background-color: ${gray1};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
  width: .63rem;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background-color: ${blue3};
  border-radius: 2.2rem;
  border: 2px solid white;
}
` 