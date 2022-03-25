import React, { useState, createContext } from "react";

//Create Context here
const LoginContext = createContext();
export { LoginContext };

const LogoWidth = createContext();
export { LogoWidth };

const MobileData = createContext();
export { MobileData };

// const LastLocation = createContext();
// export { LastLocation };

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
  const [LastLocation, setLastLocation] = useState("");

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
        LastLocation,
        setLastLocation

      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export { LoginProvider };

const LogoWidthProvider = (props) => {
  const [logoWidth, setlogoWidth] = useState(150);
  return (
    <LogoWidth.Provider value={{ logoWidth, setlogoWidth }}>
      {props.children}
    </LogoWidth.Provider>
  );
};

export { LogoWidthProvider };

const MobileDataProvider = (props) => {
  const [mobileData, setmobileData] = useState([]);
  return (
    <MobileData.Provider value={{ mobileData, setmobileData }}>
      {props.children}
    </MobileData.Provider>
  );
};

export { MobileDataProvider };

// const LastLocationProvider = (props) => {
//   const [LastLocation, setLastLocation] = useState("");
//   return (
//     <LastLocation.Provider value={{ LastLocation, setLastLocation }}>
//       {props.children}
//     </LastLocation.Provider>
//   );
// };

// export { LastLocationProvider };




