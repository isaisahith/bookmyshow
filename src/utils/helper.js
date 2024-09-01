

export const isUserLoggedIn =()=>{

    const accessToken = localStorage.getItem("AccessToken");
    const email = localStorage.getItem("email");


    const isLoggedIn = accessToken && email;

    return isLoggedIn;
}


export const handleLogout = ()=>{
    localStorage.clear();
}


export const getUserName = ()=>{
    const name = localStorage.getItem("name");
    return name;
}


export const isAuthorized = (roles)=>{
    const userType = localStorage.getItem("userTypes");
    console.log(userType)
    console.log(roles);
    const isAuth =roles.includes(userType)

    return isAuth;
}



