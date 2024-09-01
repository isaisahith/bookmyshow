import React, { useEffect, useState } from 'react'
import { Auth } from '../Pages/Auth/Auth';
import { useSearchParams } from 'react-router-dom';
import { UnAuthorized } from '../Pages/Auth/UnAuthorized';
import { roles } from '../utils/constants';
import { AuthReq } from '../Pages/Auth/AuthReq';
import { isAuthorized, isUserLoggedIn } from '../utils/helper';

export const AuthHOC = (props) => {


    const isLoggedIn = isUserLoggedIn();
    

    if(!isLoggedIn){
        return <AuthReq/>
    }

    
    let isAuth = false;

    if(isLoggedIn){
       isAuth =isAuthorized(props.roles);
    }


    if(!isAuth){
        return <UnAuthorized/>
    }
    

    
  return <div>
            {props.children}
        </div>
}
