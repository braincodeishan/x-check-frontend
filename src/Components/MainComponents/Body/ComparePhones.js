import React, { useContext, useState,useEffect } from "react";
import { LoginContext, useMisc } from "../../../Contexts/Context";
import "../../../Assets/CSS/ComparePhones.css";
import { resultsData } from "../../../Assets/Data/Data";

import { Grid } from "@mui/material";
import CompareBox from '../../SubComponents/CompareBox'
import {useNavigate} from "react-router";
const ComparePhones = () => {
  const Navigate=useNavigate()
  const Login = useContext(LoginContext);
  const {LastLocation,setLastLocation}=useMisc()
  useEffect(() => {
    if(Login.comparePhones[0]===''||Login.comparePhones[0]===undefined){
      Navigate('/')
    }
  })
  useEffect(() => {
    setLastLocation('/Compare')
  })
  
  const [res, setRes] = useState([
    resultsData[Login.comparePhones[0]],
    resultsData[Login.comparePhones[1]],
    resultsData[Login.comparePhones[2]],
  ]);
  console.log(res)

  return (
    <>
      <div className="ComparePhones">
        <div className="CP-Box container">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <h4>Compare Phones</h4>
            </Grid>
            <Grid item xs={3}>
              {res[0]===undefined?<CompareBox/>:showImages()}
            </Grid>
            <Grid item xs={3}>
            {res[1]===undefined?<CompareBox/>:showImages()}
            </Grid>
            <Grid item xs={3}>
            {res[2]===undefined?<CompareBox/>:showImages()}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ComparePhones;



const showImages = () => {
  return (
    <div>ComparePhones</div>
  )
}

