import React from "react";

// CSS imports

import "./App.css";
import "./Assets/CSS/Scrollbar.css";
import "./Assets/CSS/Common.css";
import "./Assets/CSS/Misc.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/boxicons/css/boxicons.min.css";

// Context imports
import ProtectedRoutes from "./Contexts/ProtectedRoutes";
import { useMisc } from "./Contexts/Context";

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
import CompareIcons from "./Components/SubComponents/ComparePhones/CompareIcons";
import ForgotPassword from "./Components/MainComponents/Body/ForgotPassword";
import Register from "./Components/MainComponents/Body/Register";
import Wishlist from "./Components/MainComponents/Body/Wishlist";
import ContactUs from "./Components/MainComponents/Body/ContactUs";
import Dashboard from './Components/Admin/Dashboard'
import UpdateMobile from "./Components/Admin/UpdateMobile";
import { SnackbarAlert } from "./Components/SubComponents/RegularComponents/Alerts/Alert";
import Loading from "./Components/SubComponents/RegularComponents/Loading/Loading";
import UpdateMobilePart2 from "./Components/Admin/UpdateMobilePart2";

function App() {
  const {alert, setAlert, loading}= useMisc();
  return (
    <div className="App">
      
            {alert.show && <SnackbarAlert {...alert} setopenSnack={setAlert}/>}
            {
              loading && <Loading/>
            }
            <Navbar />
            <div className="body">
              <Header />
              <Routes>
                <Route exact path="/" element={<Search />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Register" element={<Register />} />
                <Route
                  exact
                  path="/Forgot-Passwords/:uuid"
                  element={<ForgotPassword />}
                />
                <Route exact path="/Result" element={<Results />} />
                <Route
                  exact
                  path="/PhoneDetails/:id"
                  element={<PhoneDetails />}
                />
                <Route exact path="/Compare" element={<ComparePhones />} />
                <Route exact path="/Contact" element={<ContactUs />} />

                  <Route exact path="/AdminDashboard" element={<Dashboard />} />
                  <Route exact path="/UpdateMobiles" element={<UpdateMobile />} />
                  <Route exact path="/UpdateMobiles/:id" element={<UpdateMobilePart2 />} />
                  
                <Route element={<ProtectedRoutes />}>
                  <Route exact path="/Wishlist" element={<Wishlist />} />

                </Route>
              </Routes>
            </div>
            <CompareIcons />
            <LoveIndia />
            <Footer />

          
    </div>
  );
}

export default App;
