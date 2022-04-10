import React, { useContext } from "react";
import Fab from "@mui/material/Fab";
import CompareIcon from "@mui/icons-material/Compare";
import { LoginContext } from "../../Contexts/Context";
import { useNavigate } from "react-router";
import {resultsData} from '../../Assets/Data/Data'
import CancelIcon from '@mui/icons-material/Cancel';

const CompareIcons = () => {
  const Navigate = useNavigate();
  const Login = useContext(LoginContext);
  const handleChange = () => {
    if (Login.comparePhones.length >= 1) {
      Navigate("/Compare");
    }
  };

  const handleCross=()=>{

  }
  return (
    <>
      {Login.comparePhones[0] !== undefined && (
        <div className="CompareIcons">
          <div className="showComparePhones">
              {Login.comparePhones.map((data,index)=>{
                return( <><div className="phones" key={index}>
                  <img src={resultsData[parseInt(data)].image} alt={resultsData[parseInt(data)].name} srcSet="" />
                  <h6>{resultsData[parseInt(data)].name}</h6>
                  <CancelIcon
                  className=""
                  sx={{position:'absolute',right:'-3px',top:'-5px',color:'red'}}
                  onClick={handleCross}

                  />
                  </div>
                  </>)
              })}
            </div>
          <Fab variant="extended" color="secondary" onClick={handleChange}>
            <CompareIcon sx={{ mr: 1 }} />
            Compare Phones
          </Fab>
        </div>
      )}
    </>
  );
};

export default CompareIcons;
