import React, { useState, useContext } from 'react'
import {LoginContext} from '../../../Contexts/Context';
import { Link } from 'react-router-dom'
import '../../../Assets/CSS/Sidebar.css'


const Navbar = () => {
  
  const Login = useContext(LoginContext)
  const [sidebarclass, setsidebarclass] = useState("close");
  const [menu, setmenu] = useState("bx-menu");
  const fname=Login.user.name.split(' ');
    
  const logOut = async() => {
    // const logout= await fetch("http://localhost:3001/logout", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",

    //         },
    //         credentials: "include",

    //     });
    //     if(logout.status===200){
            
    //         <Alert msg={"Logged Out"} msgtype={"alert-success"} />
            
    //     }
    Login.changelogin(false);
  }

  const dropDown=(e)=>{
    e.target.parentElement.parentElement.classList.toggle("showMenu")
      }
    


  const showLogin = () => {
    if (!Login.isLoggedin) {
      return (<li>
        <div className="iocn-link">
          <Link to="/Login">
            <i className='bx bxs-key bx-tada' ></i>
            <span className="link_name">Login</span>
          </Link>
          <i className='bx bxs-chevron-down arrow' onClick={(e)=>{dropDown(e)}}></i>
        </div>
        <ul className="sub-menu">
          <li><Link className="link_name" to="#">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>

        </ul>
      </li>);
    }
  }

  const sidebarclose = () => {
    if (sidebarclass === "close") {
      setsidebarclass("");
      setmenu("bx-menu-alt-right")
    } else {
      setsidebarclass("close");
      setmenu("bx-menu")
    }
  }
  return (
    <>
      <div className={"sidebar " + sidebarclass} id='sidebar'>
        <div className="logo-details">
        <i className='bx bxl-xing'></i>
          
          <span className="logo_name">Check</span>
          <i className={'bx ' + menu} id="btn" onClick={sidebarclose}></i>
        </div>
        <ul className="nav-links">
          {showLogin()}
          <li>
            <Link to="/">
              <i className='bx bx-grid-alt' ></i>
              <span className="link_name">Home</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/">Home</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className='bx bx-mobile-vibration' ></i>
                {/* <i className='bx bx-collection' ></i> */}
                <span className="link_name">My Phones</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' onClick={(e)=>{dropDown(e)}}></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">My Phones</Link></li>
              <li><Link to="/Wishlist">WishLists</Link></li>
              <li><Link to="/LeaveOrders">Watching</Link></li>
              <li><Link to="/SeniorityList">Price History</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className='bx bx-news' ></i>
                {/* <i className='bx bx-book-alt' ></i> */}
                <span className="link_name">News</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' onClick={(e)=>{dropDown(e)}}></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">News</Link></li>
              <li><Link to="#">New Launches</Link></li>
              <li><Link to="#">Sci Fi</Link></li>
              <li><Link to="#">Developments</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className='bx bxs-discount' ></i>
                {/* <i className='bx bx-pie-chart-alt-2' ></i> */}
                <span className="link_name">Loot</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' onClick={(e)=>{dropDown(e)}}></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">Loot</Link></li>
              <li><Link to="/MOMVS">Discounts</Link></li>

            </ul>
          </li>
          
          <li>
            <Link to="#">
            <i className='bx bxl-meta'></i>
              {/* <i className='bx bx-compass' ></i> */}
              <span className="link_name">About Us</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="#">About Us</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Contact">
              <i className='bx bx-history'></i>
              <span className="link_name">Contact Us</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Contact">Contact Us</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Settings">
              <i className='bx bx-cog' ></i>
              <span className="link_name">Setting</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Settings">Setting</Link></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {!Login.user.avatar?<i className='bx bxs-user' ></i>:
                <img src={Login.user.avatar} alt="profileImg" className='avatar'/> }
              </div>
              <div className="name-job">
                <div className="profile_name">Hi! {fname[0]} </div>
                
              </div>
              {Login.isLoggedin &&<i className='bx bx-log-out' onClick={() => { logOut() }}></i>}
            </div>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar





