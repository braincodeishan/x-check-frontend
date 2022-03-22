import React, { useState, createContext } from 'react'

//Create Context here
const LoginContext = createContext();
export { LoginContext };

const LogoWidth = createContext();
export { LogoWidth }

const MobileData = createContext();
export { MobileData }

//Create Providers here
const LoginProvider = (props) => {
    const [isLoggedin, setisLoggedin] = useState(true);
    const [user, setUser] = useState({
        username:"braincodeishan",
        JWT:"",
        name:"Ishan",
        cart:['1','3'],
        wishlist:['0'],
        comparePhones:['0','1','2','3'],
        avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        likes:['2']
    });
    const changelogin = async (val) => {
        setisLoggedin(val);
        setUser({
            username:"Guest",
            JWT:"",
            name:"Guest",
            cart:[''],
            wishlist:[''],
            comparePhones:[''],
            avatar:"",
            likes:['']
        })
    }
    return (
        <LoginContext.Provider value={{ isLoggedin, changelogin, user , setUser }}>
            {props.children}
        </LoginContext.Provider>

    )
}
export { LoginProvider }


const LogoWidthProvider = (props) => {
    const [logoWidth, setlogoWidth] = useState(150);
    return (
        <LogoWidth.Provider value={{ logoWidth, setlogoWidth }}>
            {props.children}
        </LogoWidth.Provider>

    )

}

export { LogoWidthProvider }


const MobileDataProvider = (props) => {
    const [mobileData, setmobileData] = useState([]);
    return (
        <MobileData.Provider value={{ mobileData, setmobileData }}>
            {props.children}
        </MobileData.Provider>
    )
}

export { MobileDataProvider }