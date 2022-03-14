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