import React, { useState, createContext, useContext } from "react";
import { ResultFilter } from "../Assets/Data/Data";
//Create Context here
const LoginContext = createContext();
export { LoginContext };




const Misc = createContext();
export { Misc };

const MobileData = createContext();
export { MobileData };

const LastLocation = createContext();
export { LastLocation };



const useLoginContext=()=>{
  return useContext(LoginContext)
}
export {useLoginContext }

const useMisc=()=>{
  return useContext(Misc)
}
export {useMisc }



//Create Providers here

const LoginProvider = (props) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [user, setUser] = useState({
    username: "Guest",
    JWT: "",
    name: "Guest",
    avatar: "",
  });
  const [comparePhones, setComparePhones] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  

  const changelogin = async (val) => {
    setisLoggedin(val);
    if (!val) {
      setUser({
        username: "Guest",
        JWT: "",
        name: "Guest",
        avatar: "",
      });
      setCart([]);
      setWishlist([]);
      setComparePhones([]);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedin,
        changelogin,
        user,
        setUser,
        comparePhones,
        setComparePhones,
        cart,
        setCart,
        wishlist,
        setWishlist,
        
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export { LoginProvider };

const MiscProvider = (props) => {
  const [logoWidth, setlogoWidth] = useState(150);
  const [LastLocation, setLastLocation] = useState("");
  const [Filter,setFilter]=useState({
    price:[],
    brands:[],
    Processors:[],
    PrimaryCamera:[],
    SecondaryCamera:[],
    Battery:[],
    Network:[]
  })
  return (
    <Misc.Provider value={{ 
      logoWidth, 
      setlogoWidth,
      LastLocation,
      setLastLocation,
      Filter,
      setFilter
    
    }}>
      {props.children}
    </Misc.Provider>
  );
};

export { MiscProvider };

const MobileDataProvider = (props) => {
  const [mobileData, setmobileData] = useState([]);
  return (
    <MobileData.Provider value={{ mobileData, setmobileData }}>
      {props.children}
    </MobileData.Provider>
  );
};

export { MobileDataProvider };





