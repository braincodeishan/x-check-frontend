import React, { useContext, useState } from "react";
import { LoginContext } from "../../../Contexts/Context";
import "../../../Assets/CSS/ComparePhones.css";
import { resultsData } from '../../../Assets/Data/Data'
import { Divider } from "@mui/material";
import CompareBox from '../../SubComponents/CompareBox'
const ComparePhones = () => {
  const Login = useContext(LoginContext);
  const [res, setRes] = useState([
    resultsData[Login.user.comparePhones[0]], resultsData[Login.user.comparePhones[1]], resultsData[Login.user.comparePhones[2]]

  ])
  // console.log(res)

    return (
    <>

      <div className="ComparePhones">
        <div className="CP-Box">
        <div className="compareDivs"></div>
          {res.map((data,index)=>{
            return (<>
              <CompareBox data={data} key={index}/>
              <Divider orientation="vertical" flexItem />
          </>)
          })}

          </div>
      </div>
    </>
  );
};

export default ComparePhones;
