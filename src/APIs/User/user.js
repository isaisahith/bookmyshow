

export const userLogin = async(data)=>{
    try{
        console.log(data)
        const loginInfo = await fetch("https://movie-booking-application.onrender.com/mba/api/v1/auth/signin",
        {
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }
    )

    return loginInfo;
    }catch(err){
        console.log(err)
    }
}


// export const userLogin  = async (data)=>{
//     const loginResp = await fetch(`https://movie-booking-application.onrender/mba/api/v1/auth/signin`,{
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:{
//        "Content-Type": "application/json"
//     }
//     });

//     return loginResp;
// }