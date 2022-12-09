import { } from 'styled-components'

// Components
import { Link } from 'react-router-dom'

// Hooks
import { useState, useEffect } from 'react'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <h1><em>Instagram</em></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email" name="email"
          placeholder='Phone number,username, or email'
          required
        />
        <label htmlFor="password"></label>
        <input type="password" name="password"
          placeholder='Password'
          required
        />
        <input type="submit" value="Log in" />
      </form>
      <p>or</p>
      <p>Login with Facebook</p>
      <div>
        <p>Don't have an account? Sign Up</p>
      </div>
    </section>
  )
}

export default Login