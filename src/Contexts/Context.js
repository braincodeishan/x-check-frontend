
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
    const [user, setUser] = useState({
        username:"Guest",
        JWT:"",
        name:"Guest",
        avatar:""
    });
    const [comparePhones,setComparePhones]=useState([])
    const [cart,setCart]=useState([])
    const [wishlist,setWishlist]=useState([])
    const [likes,setLikes]=useState([])
    const changelogin = async (val) => {
        setisLoggedin(val);
        !val && setUser({
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

    const changeComparePhones=(id,isSelected)=>{
        if(isSelected){
            setComparePhones(...comparePhones,id )
        }else{

        }
    }


    return (
        <LoginContext.Provider 
        value={{ 
            isLoggedin, changelogin, 
            user , setUser, 
            comparePhones, setComparePhones,changeComparePhones,
            cart,setCart,
            wishlist,setWishlist,
            likes,setLikes
            }}>
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