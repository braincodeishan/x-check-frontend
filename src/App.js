import React from "react";

// CSS imports

import "./App.css";
import "./Assets/CSS/Scrollbar.css";
import "./Assets/CSS/Common.css";
import "./Assets/CSS/Misc.css";
// import './Assets/CSS/Bootstrap.css'

// Context imports
import ProtectedRoutes from "./Contexts/ProtectedRoutes";
// import { LastLocationProvider } from "./Contexts/Context";
import { LogoWidthProvider } from "./Contexts/Context";
import { MobileDataProvider } from "./Contexts/Context";
import { LoginProvider } from "./Contexts/Context";

// Routes import
import { Routes, Route } from "react-router-dom";

// Component import
import Search from "./Components/MainComponents/Body/Search";
import Header from "./Components/MainComponents/Header/Header";
import Navbar from "./Components/MainComponents/Navbar/Navbar";
import Login from "./Components/MainComponents/Body/Login";
import Footer from "./Components/MainComponents/Footer/Footer";
import LoveIndia from "./Components/MainComponents/Footer/LoveIndia";
import Results from "./Components/MainComponents/Body/Results";
import PhoneDetails from "./Components/MainComponents/Body/PhoneDetails";
import ComparePhones from "./Components/MainComponents/Body/ComparePhones";
import CompareIcons from "./Components/SubComponents/CompareIcons";
import ForgotPassword from "./Components/MainComponents/Body/ForgotPassword";
import Register from "./Components/MainComponents/Body/Register";
import Wishlist from "./Components/MainComponents/Body/Wishlist";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <LogoWidthProvider>
          <MobileDataProvider>
            {/* <LastLocationProvider> */}
              <Navbar />
              <div className="body">
                <Header />
                <Routes>
                  <Route exact path="/" element={<Search />} />
                  <Route exact path="/Login" element={<Login />} />
                  <Route exact path="/Register" element={<Register />} />
                  <Route
                    exact
                    path="/Forgot-Passwords"
                    element={<ForgotPassword />}
                  />
                  <Route exact path="/Result" element={<Results />} />
                  <Route
                    exact
                    path="/PhoneDetails/:id"
                    element={<PhoneDetails />}
                  />
                  <Route exact path="/Compare" element={<ComparePhones />} />

                  <Route element={<ProtectedRoutes />}>
                    <Route exact path="/Wishlist" element={<Wishlist />} />
                  </Route>
                </Routes>
              </div>
              <CompareIcons />
              <LoveIndia />
              <Footer />
            {/* </LastLocationProvider> */}
          </MobileDataProvider>
        </LogoWidthProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
