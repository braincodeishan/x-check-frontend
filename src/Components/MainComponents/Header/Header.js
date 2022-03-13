import React from 'react'
import Divider from '../../SubComponents/Divider'
import Hamburger from '../../SubComponents/Hamburger'
import Logo from '../../SubComponents/Logo'
import '../../../Assets/CSS/Header.css'
const Header = () => {
  
  return (
    <>
    <Hamburger/>
    <div className='header'>
    
    <Logo/>
    
    </div>
    <Divider/>
    </>
  )
}

export default Header