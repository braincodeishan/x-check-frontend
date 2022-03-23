import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {MobileMaker} from '../../Assets/Data/Data'
import { Skeleton } from "@mui/material";
const CompareBox = (props) => {
  return (
    <>
      <div className="compareDivs">
      <Skeleton variant="rectangular" width={250} height={150} />
      <h6 style={{marginTop:'15px'}}>Add a product</h6>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={MobileMaker}
          sx={{ width: 250, marginTop:2 }}
          renderInput={(params) => <TextField {...params} label="Choose Brand" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={MobileMaker}
          sx={{ width: 250, marginTop:2 }}
          renderInput={(params) => <TextField {...params} label="Choose Mobile" />}
        />

      </div>
    </>
  );
};

export default CompareBox;
