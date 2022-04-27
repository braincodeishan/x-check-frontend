import React from 'react'
import Divider from '../../SubComponents/RegularComponents/Divider'
import Hamburger from '../../SubComponents/RegularComponents/Hamburger'
import Logo from '../../SubComponents/RegularComponents/Logo'
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