//isLoggedIn
export const isLoogedIn=()=>{
    let token=localStorage.getItem("token")
    if(token==null){
        return false;
    }
    else{
        return true;
    }
}

//doLogin
export const doLogin=(token,email,next)=>{
    localStorage.setItem("token",JSON.stringify(token))
    localStorage.setItem("email",email)
    next()
};

//Log Out
export const doLogout=()=>{
    localStorage.removeItem("token")
}