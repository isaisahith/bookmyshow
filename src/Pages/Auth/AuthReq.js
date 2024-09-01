import React from 'react'
import { LoginButton } from './LoginButton'
import './Auth.css'

export const AuthReq = () => {
  return (
    <div className='unauth-container'>
        <h4>Autherization is required. Please login</h4>
        <LoginButton/>
    </div>
  )
}
