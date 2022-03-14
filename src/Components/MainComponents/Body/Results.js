import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';

import '../../../Assets/CSS/Results.css'
import FilterBox from "../../SubComponents/FilterBox";
const Results = () => {

  const [pricevalue, setpriceValue] = React.useState([10, 80]);

  const handleChange = (event, newValue) => {
    setpriceValue(newValue);
  };
  const handleChange1 = (e) => {
    setpriceValue([(e.target.value / 500), pricevalue[1]]);
  };
  const handleChange2 = (e) => {
    setpriceValue([pricevalue[0], (e.target.value / 500)]);
  };

  const data=[
    ['MI','Realme','Samsung','OnePlus','Apple','Vivo','HTC','Oppo','LG'],
    ['SnapDragon','Kryto','Bionic','Intel'],
    ['2MP','4MP','8MP','12MP','16MP','20MP','32MP','64MP','128MP'],
    ['2MP','4MP','8MP','12MP','16MP','20MP','32MP','64MP','128MP'],
  ];


  const [showFormCheckbox,setshowFormCheckbox]=useState({
    a:false,
    b:false,
    c:false,
    d:false
  })


  const invert=(id)=>{
  setshowFormCheckbox((prev)=>{
    return (...prev,[id]: true)
  })
    
  }

  const showCheckboxes=()=>{

  }

  return (
    <>
      <div className="results-parent">
        <div className="container results">

          <div className="section section1">
            <div className="filterBox">
              <div className="mainheading">
                <h4>Filters</h4>
                <Button variant="text" className="mainbutton">Clear All</Button>
              </div>
              <Divider className="mdivider" />
              {/* ************* Price Slider*********** */}
              <div className="subsection">
                <div className="subheading">
                  <h6>Price</h6>
                  <Button variant="text" className="subbutton">Clear</Button>
                </div>

                <div className="sliderContainer">

                  <Slider
                    getAriaLabel={() => 'Price range'}
                    value={pricevalue}
                    onChange={handleChange}
                    className="slider"

                  />
                  <div className="inputBox">
                    <TextField
                      id="select"
                      className="inputField"
                      label="From"
                      select
                      value={(pricevalue[0] * 500)}
                      onChange={handleChange1}
                    >

                      <MenuItem value={(pricevalue[0] * 500)} disabled style={{ height: '0px', display: 'none' }}>{(pricevalue[0] * 500)}</MenuItem>
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1000}>1000</MenuItem>
                      <MenuItem value={5000}>5000</MenuItem>
                      <MenuItem value={10000}>10000</MenuItem>
                      <MenuItem value={15000}>15000</MenuItem>
                      <MenuItem value={20000}>20000</MenuItem>
                      <MenuItem value={25000}>25000</MenuItem>
                      <MenuItem value={30000}>30000</MenuItem>
                      <MenuItem value={35000}>35000</MenuItem>
                      <MenuItem value={40000}>40000</MenuItem>

                    </TextField>
                  </div>
                  <div className="inputBox">
                    <TextField
                      id="select"
                      className="inputField"
                      label="To"
                      select
                      value={(pricevalue[1] * 500)}
                      onChange={handleChange2}
                    >
                      <MenuItem value={(pricevalue[1] * 500)} disabled style={{ height: '0px', display: 'none' }}>{(pricevalue[1] * 500)}</MenuItem>
                      <MenuItem value={1000}>1000</MenuItem>
                      <MenuItem value={5000}>5000</MenuItem>
                      <MenuItem value={10000}>10000</MenuItem>
                      <MenuItem value={15000}>15000</MenuItem>
                      <MenuItem value={20000}>20000</MenuItem>
                      <MenuItem value={25000}>25000</MenuItem>
                      <MenuItem value={30000}>30000</MenuItem>
                      <MenuItem value={35000}>35000</MenuItem>
                      <MenuItem value={40000}>40000</MenuItem>
                      <MenuItem value={50000}>50000+</MenuItem>
                    </TextField>
                  </div>
                </div>
              </div>
              <Divider className="mdivider" />



              {/* *************Brand Selection************* */}
              <FilterBox 
              key={"filter1"} 
              id={'a'} 
              showFormCheckbox={showFormCheckbox} 
              name={"Brand"} 
              invert={invert} 
              data={data[0]} 
              showCheckboxes={showCheckboxes}
              />

              <Divider className="mdivider" />



              {/* *************Processor Selection************* */}
              <FilterBox 
              key={"filter2"} 
              id={'b'} 
              showFormCheckbox={showFormCheckbox} 
              name={"Processor"} 
              invert={invert} 
              data={data[1]} 
              showCheckboxes={showCheckboxes}
              />
              <Divider className="mdivider" />


              {/* *************Primary Camera Selection************* */}
              <FilterBox 
              key={"filter3"} 
              id={'c'} 
              showFormCheckbox={showFormCheckbox} 
              name={"Primary Camera"} 
              invert={invert} 
              data={data[2]} 
              showCheckboxes={showCheckboxes}
              />
              <Divider className="mdivider" />


              {/* *************Secondary Camera Selection************* */}
              <FilterBox 
              key={"filter4"} 
              id={'d'} 
              showFormCheckbox={showFormCheckbox} 
              name={"Secondary Camera"} 
              invert={invert} 
              data={data[3]} 
              showCheckboxes={showCheckboxes}
              />
            </div>
          </div>
          <div className="section section2">
            <div className="resultBox">
              Result Box
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results
