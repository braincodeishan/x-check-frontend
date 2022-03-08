import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Hamburger = () => {
 const [openNavbar,setopenNavbar]=useState(false);
 const [classNavbar,setclassNavbar]=useState("");
  const open=()=>{
    if(!openNavbar){
      setclassNavbar("toggleNavbar")
      setopenNavbar(true);
    }else{
      setclassNavbar("")
      setopenNavbar(false);
    }
 }



  return (
    <>
    <div onClick={open} className={"hamburger "+classNavbar}>
    {openNavbar?
    
    <MenuOpenIcon htmlColor={"#2ec4b6"} fontSize={"large"} /> 
    
    : 
    
    <MenuIcon htmlColor={"#000"} fontSize={"large"}/>}
    </div>
    </>
  )
}

export default Hamburger