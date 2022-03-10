import React from 'react';
import './App.css';
import'./Assets/CSS/Scrollbar.css'
import'./Assets/CSS/Common.css'
import'./Assets/CSS/Misc.css'
// import'./Assets/CSS/Footer.css'
import {Routes,Route} from 'react-router-dom'
import Search from './Components/MainComponents/Body/Search'
import Header from './Components/MainComponents/Header/Header';
import Navbar from './Components/MainComponents/Navbar/Navbar';
import LoginProvider from './Contexts/LoginProvider'
import Login from "./Components/MainComponents/Body/Login"
import ProtectedRoutes from './Contexts/ProtectedRoutes';
import Footer from './Components/MainComponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        <Navbar />
        <div className='body'>
        <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route exact path="/Login" element={<Login/>} />
          <Route element={<ProtectedRoutes />}>
            
          </Route>
        </Routes>

        </div>
        <Footer/>


      </LoginProvider>
    </div>
  );
}

export default App;
