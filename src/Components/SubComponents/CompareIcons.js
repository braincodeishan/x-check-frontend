import React, { useContext } from "react";
import Fab from "@mui/material/Fab";
import CompareIcon from "@mui/icons-material/Compare";
import { LoginContext } from "../../Contexts/Context";
import { useNavigate } from "react-router";
const CompareIcons = () => {
  const Navigate=useNavigate()
  const Login = useContext(LoginContext);
  const handleChange=()=>{
    Navigate("/Compare")
  }
  return (
    <>
      {Login.user.comparePhones[0]!=='' && Login.user.comparePhones[1]!=='' && 
      <div className="CompareIcons" onClick={handleChange}>
        <Fab variant="extended" color="secondary">
          <CompareIcon sx={{ mr: 1 }} />
          Compare Phones
        </Fab>
      </div>}
    </>
  );
};

export default CompareIcons;
