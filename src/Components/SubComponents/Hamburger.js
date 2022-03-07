import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Hamburger = (props) => {
  if(!props.color){
    props.color="#000";
  }
  return (
    <>
    <MenuIcon htmlColor={props.color}/>
    </>
  )
}

export default Hamburger