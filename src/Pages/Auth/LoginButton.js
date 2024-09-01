import React from 'react'

import './Auth.css'
import { Link } from 'react-router-dom'

export const LoginButton = () => {
  return (
    <Link to='/login'>
        <button className='login-btn'>Login here</button>
    </Link>
  )
}
