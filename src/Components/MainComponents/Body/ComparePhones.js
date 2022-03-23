import React, { useContext, useState } from "react";
import { LoginContext } from "../../../Contexts/Context";
import "../../../Assets/CSS/ComparePhones.css";
import { resultsData } from "../../../Assets/Data/Data";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import CompareBox from '../../SubComponents/CompareBox'
const ComparePhones = () => {
  const Login = useContext(LoginContext);
  const [res, setRes] = useState([
    resultsData[Login.user.comparePhones[0]],
    resultsData[Login.user.comparePhones[1]],
    resultsData[Login.user.comparePhones[2]],
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

