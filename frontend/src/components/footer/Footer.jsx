import React from 'react'

import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__paragraphy">Copyright © Marcelo Ferreira Cruz, MIT Licence</p>
      <p className="footer__paragraphy">Repositório do projeto</p>
      <a href="https://github.com/MarceloDevCruz/instagram" target="_blank">
        <BsGithub className="footer__github" /> </a>
    </footer>
  )
}

export default Footer