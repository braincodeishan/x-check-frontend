import React, { useState } from 'react'
import Hamburger from '../../SubComponents/Hamburger'
import Logo from '../../SubComponents/Logo'
const Header = () => {
  const [logoWidth,setlogoWidth]=useState('logo2')
const logo=()=>{
  if(logoWidth==='logo2'){
setlogoWidth('logo1')
  }else{
    setlogoWidth('logo2')
  }

}
  return (
    <>
    <Hamburger/>
    <div className='header' onClick={logo}>
    
    <Logo width={logoWidth}/>
    </div>
    </>
  )
}

export default Header