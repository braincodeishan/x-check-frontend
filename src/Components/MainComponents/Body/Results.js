import React, { useState, useEffect } from 'react'
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import "../../../Assets/CSS/Results.css";
import FilterBox from "../../SubComponents/Search/FilterBox";
import ResultBox from "../../SubComponents/Search/ResultBox";
import CustomizedBreadcrumbs from "../../SubComponents//RegularComponents/CustomizedBreadcrumbs";
// import {resultsData} from '../../../Assets/Data/Data'
import { useMisc, useMobileData } from '../../../Contexts/Context';
import {ResultFilter} from '../../../Assets/Data/Data'
const Results = () => {
  const {setLastLocation,Filter,setFilter}=useMisc()
  const Navigate=useNavigate();
  useEffect(() => {
    setLastLocation('/Result')
  })
  
  const mobileData=useMobileData();
  
  const [pricevalue, setpriceValue] = React.useState([10, 80]);
  const [data, setdata] = useState(ResultFilter);
  const [resultsData,setResultsData]=useState(mobileData.mobileData)
  const handleCheckboxChangeFunction = () => {};
  
  const showAllCheckboxesFunction = () => {};

  return (
    <>
      {/* <div className="results-parent"> */}
        <div className="container results">
          <div className="section section1">
            <div className="filterBox">
              <div className="mainheading">
                <h4>Filters</h4>
                <Button variant="text" className="mainbutton" key={'Button1'}>
                  Clear All
                </Button>
              </div>
              <Divider className="mdivider" key={'Divider1'}/>
              {/* ************* Price Slider*********** */}
              <div className="subsection">
                <div className="subheading">
                  <h6>Price</h6>
                  <Button variant="text" className="subbutton" key={'Button2'}>
                    Clear
                  </Button>
                </div>

                <div className="sliderContainer">
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={pricevalue}
                    onChange={(event, newValue) => {
                      setpriceValue(newValue);
                    }}
                    className="slider"
                  />
                  <div className="inputBox">
                    <TextField
                    key={"FirstSelect"}
                      id="select"
                      className="inputField"
                      label="From"
                      select
                      value={pricevalue[0] * 500}
                      onChange={(e) => {
                        setpriceValue([e.target.value / 500, pricevalue[1]]);
                      }}
                    >
                      <MenuItem
                        value={pricevalue[0] * 500}
                        disabled
                        style={{ height: "0px", display: "none" }}
                      >
                        {pricevalue[0] * 500}
                      </MenuItem>
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
                    key={"SecondSelect"}
                      id="select"
                      className="inputField"
                      label="To"
                      select
                      value={pricevalue[1] * 500}
                      onChange={(e) => {
                        setpriceValue([pricevalue[0], e.target.value / 500]);
                      }}
                    >
                      <MenuItem
                        value={pricevalue[1] * 500}
                        disabled
                        style={{ height: "0px", display: "none" }}
                      >
                        {pricevalue[1] * 500}
                      </MenuItem>
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

              {/* *************Filter Selection Renderer************* */}

              {data.map((element,index) => {
                return (
                  <>
                    <FilterBox
                      key={index+Math.random()}
                      data={element}
                      toggleCheckboxFunction={
                        (id) => {
                        setdata((prev)=>{
                          return prev.map((item,index)=>{
                            return index===id?{...item,isCheckboxShown:!item.isCheckboxShown}:item
                          })
                        });
                      }}
                      
                    />
                    <Divider className="mdivider" key={"1"} />
                  </>
                );
              })}
            </div>
          </div>
          {/* ******************* Results Pane ********************* */}
          <div className="section section2">
            <CustomizedBreadcrumbs data={["Home","Results"]}/>
            <h6>Showing 1 – 25 of 10,711 results within your search brackets </h6>
            <Divider className="mdivider" />
              {resultsData.map((data,index)=>{
                return(
                <>
                <ResultBox 
              key={index+"asas"}
              data={data}
              handleMoreDetailsFunction={(id)=>{
                Navigate(`/PhoneDetails/${id}`)
              }}
              />
              <Divider className="mdivider" key={index+"1"}/>
              </>
              )

              })}
              
            
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Results;
