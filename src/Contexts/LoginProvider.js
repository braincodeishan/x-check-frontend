import React, { useState } from 'react'

import LoginContext from './LoginContext'; 

const LoginProvider = (props) => {

    const [isLoggedin, setisLoggedin] = useState(false);
    

    const changelogin = async (val) => {
        
        setisLoggedin(val);
        
    }
    return (
        <LoginContext.Provider value={{ isLoggedin, changelogin }}>
            {props.children}
        </LoginContext.Provider>
        
    )
}

export default LoginProvider