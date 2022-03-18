import React from 'react';

// CSS imports

import './App.css';
import './Assets/CSS/Scrollbar.css'
import './Assets/CSS/Common.css'
import './Assets/CSS/Misc.css'

// Context imports
import ProtectedRoutes from './Contexts/ProtectedRoutes';
import { LoginProvider } from './Contexts/Context'
import { LogoWidthProvider } from './Contexts/Context';
import { MobileDataProvider } from './Contexts/Context';

// Routes import
import { Routes, Route } from 'react-router-dom'

// Component import
import Search from './Components/MainComponents/Body/Search'
import Header from './Components/MainComponents/Header/Header';
import Navbar from './Components/MainComponents/Navbar/Navbar';
import Login from "./Components/MainComponents/Body/Login"
import Footer from './Components/MainComponents/Footer/Footer';
import LoveIndia from './Components/MainComponents/Footer/LoveIndia';
import Results from './Components/MainComponents/Body/Results';
import PhoneDetails from './Components/MainComponents/Body/PhoneDetails';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <LogoWidthProvider>
          <MobileDataProvider>
            <Navbar />
            <div className='body'>
            <Header />
              <Routes>
                <Route exact path="/" element={<Search />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/Result" element={<Results />} />
                <Route exact path="/PhoneDetails" element={<PhoneDetails />} />
                <Route element={<ProtectedRoutes />}>

                </Route>
              </Routes>

            </div>
            <LoveIndia/>
            <Footer />
          </MobileDataProvider>
        </LogoWidthProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
