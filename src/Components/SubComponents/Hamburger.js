import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Hamburger = (props) => {
 
  return (
    <>
    <MenuIcon htmlColor={(props.color?props.color:"#000")} fontSize={"large"}/>
    </>
  )
}

export default Hamburger