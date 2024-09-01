import React from 'react'
import { LoginButton } from './LoginButton'
import './Auth.css'

export const UnAuthorized = () => {
  return (
    <div className='unauth-container'>
        <h4>Oops! you don't have authorization to access this page. Please login with appropriate role</h4>
        <LoginButton/>
    </div>
  )
}
