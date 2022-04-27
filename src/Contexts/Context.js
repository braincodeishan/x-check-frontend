import React, { useState, createContext, useContext } from "react";
import { ResultFilter } from "../Assets/Data/Data";

//Create Context here


const LoginContext = createContext();
export { LoginContext };

const Misc = createContext();
export { Misc };

const MobileData = createContext();
export { MobileData };


const useLogin=()=>{
  return useContext(LoginContext)
}
export {useLogin }

const useMisc=()=>{
  return useContext(Misc)
}
export {useMisc }

const useMobileData=()=>{
  return useContext(MobileData)
}
export {useMobileData }


//Create Providers here

const LoginProvider = (props) => {
  const [isLoggedin, setisLoggedin] = useState(false);
  const [user, setUser] = useState({
    username: "Guest",
    JWT: "",
    name: "Guest",
    type: "CUSTOMER",
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
        type: "CUSTOMER",
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
  const [alert,setAlert]=useState({
    show:false,
    message:"",
    severity:""
  });
  const [loading,setLoading]=useState(false);
  const alertSuccess=(message)=>{
    
    if(!alert.show){
     setAlert({
       show:true,
       message:message,
       severity:'success'
     })
      setTimeout(() => {
        setAlert({
          show:false,
          message:"",
          severity:""
        })
      }, 2000);
    }
 }
  const alertDanger=(message)=>{
    
     if(!alert.show){
      setAlert({
        show:true,
        message:message,
        severity:'error'
      })
       setTimeout(() => {
         setAlert({
           show:false,
           message:"",
           severity:""
         })
       }, 2000);
     }
  }

  const setLocation=(props)=>{
    setLastLocation(props)
  }

  return (
    <Misc.Provider value={{ 
      logoWidth, 
      setlogoWidth,
      LastLocation,
      setLastLocation,
      setLocation,
      Filter,
      setFilter,
      alert,
      setAlert,
      alertSuccess,
      alertDanger,
      loading,
      setLoading
    
    }}>
      {props.children}
    </Misc.Provider>
  );
};

export { MiscProvider };

const MobileDataProvider = (props) => {
  const [mobileData, setMobileData] = useState([]);
  return (
    <MobileData.Provider value={{ mobileData, setMobileData }}>
      {props.children}
    </MobileData.Provider>
  );
};

export { MobileDataProvider };





