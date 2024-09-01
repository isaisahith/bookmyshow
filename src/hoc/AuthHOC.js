import React, { useEffect, useState } from 'react'
import { Auth } from '../Pages/Auth/Auth';
import { useSearchParams } from 'react-router-dom';
import { UnAuthorized } from '../Pages/Auth/UnAuthorized';
import { roles } from '../utils/constants';
import { AuthReq } from '../Pages/Auth/AuthReq';

export const AuthHOC = (props) => {

    const accessToken = localStorage.getItem("AccessToken");
    const email = localStorage.getItem("email");


    const isLoggedIn = accessToken && email;
    

    if(!isLoggedIn){
        return <AuthReq/>
    }

    const userType = localStorage.getItem("userTypes")

    let isAuth = false;

    if(isLoggedIn){
       isAuth =props.roles.includes(userType)
    }


    if(!isAuth){
        return <UnAuthorized/>
    }
    

    
  return <div>
            {props.children}
        </div>
}
