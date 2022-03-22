import React, { useContext, useState } from "react";
import { LoginContext } from "../../../Contexts/Context";
import "../../../Assets/CSS/ComparePhones.css";
import {resultsData} from '../../../Assets/Data/Data'
const ComparePhones = () => {
  const Login = useContext(LoginContext);
  const [res,setRes]=useState([
    resultsData[Login.user.comparePhones[0]],resultsData[Login.user.comparePhones[1]],resultsData[Login.user.comparePhones[2]],resultsData[Login.user.comparePhones[3]]

  ])
  console.log(res[0])
  return (
    <>
      <div className="ComparePhones">
        {res[0] && <div className="compareDivs">


        </div>
        
        }
      </div>
    </>
  );
};

export default ComparePhones;
