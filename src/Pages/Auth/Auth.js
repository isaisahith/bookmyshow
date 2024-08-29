import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { userLogin } from '../../APIs/User/user';


export const Auth = () => {

  const navigate = useNavigate();


  const [user, setUser] = useState({userId:'', password:''});

  const handleChange = (e)=>{

    setErrorMessage('')
    const name = e.target.name;
    const value = e.target.value;

    setUser({...user, [name]:value});
  }

  

  const locator = useLocation();


  

  const [errorMessage, setErrorMessage] = useState('');

 


  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(user.userId!='' && user.password!=''){
      const resp = await userLogin(user);
      const data = await resp.json();
      

      if(resp.status===200){


        localStorage.setItem("AccessToken", data.accessToken)
        localStorage.setItem("email", data.email)
        localStorage.setItem("name", data.name)
        localStorage.setItem("userId", data.userId)
        localStorage.setItem("userStatus", data.userStatus)
        localStorage.setItem("userTypes", data.userTypes)
        localStorage.setItem("Id", data._id)

        navigate('/')
      }else{
        setErrorMessage("Invalid credentials")
      }

      
    }
  }



  return (
    <div className='login-container'>
        <form className='login-form'>
            <h4 className='login-text'>Login here</h4>
            <input type='text' 
            placeholder='username' 
            className='login-input'
            name='userId'
            value = {user.userId}
            onChange={(e)=>handleChange(e)}
            />
            <input type='text'
            placeholder='username'
            className='login-input'
            name='password'
            value ={user.password}
            onChange={(e)=>handleChange(e)}
            />
            <button className='login-button' onClick={(e)=>handleSubmit(e)}>Login</button>

            <span style={{color:"red"}}>{errorMessage}</span>

            <Link to='/register' className='signup-text'>Sign up</Link>
        </form>
    </div>
  )
}
