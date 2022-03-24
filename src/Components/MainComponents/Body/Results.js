import React, {  useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import "../../../Assets/CSS/Results.css";
import FilterBox from "../../SubComponents/FilterBox";
import ResultBox from "../../SubComponents/ResultBox";
import CustomizedBreadcrumbs from "../../SubComponents/CustomizedBreadcrumbs";
import {resultsData} from '../../../Assets/Data/Data'

const Results = () => {
  
  const Navigate=useNavigate();
  
  const [pricevalue, setpriceValue] = React.useState([10, 80]);

   const [data, setdata] = useState([
    {
      id: 0,
      name: "Brands",
      value: [
        "MI",
        "Realme",
        "Samsung",
        "OnePlus",
        "Apple",
        "Vivo",
        "HTC",
        "Oppo",
        "LG",
      ],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
    {
      id: 1,
      name: "Processors",
      value: ["SnapDragon", "Kryto", "Bionic", "Intel"],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
    {
      id: 2,
      name: "Primary Camera",
      value: [
        "2MP",
        "4MP",
        "8MP",
        "12MP",
        "16MP",
        "20MP",
        "32MP",
        "64MP",
        "128MP",
      ],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
    {
      id: 3,
      name: "Secondary Camera",
      value: [
        "2MP",
        "4MP",
        "8MP",
        "12MP",
        "16MP",
        "20MP",
        "32MP",
        "64MP",
        "128MP",
      ],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
    {
      id: 4,
      name: "Battery",
      value: [">1000maH", ">2000maH", ">3000maH", ">4000maH", ">5000maH"],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
    {
      id: 5,
      name: "Network",
      value: ["2G", "3G", "4G", "5G"],
      isCheckboxShown: false,
      isDataSelected: "",
      isClearDisabled: true,
    },
  ]);

  const handleCheckboxChangeFunction = () => {};
  
  const showAllCheckboxesFunction = () => {};

  return (
    <>
      <div className="results-parent">
        <div className="container results">
          <div className="section section1">
            <div className="filterBox">
              <div className="mainheading">
                <h4>Filters</h4>
                <Button variant="text" className="mainbutton">
                  Clear All
                </Button>
              </div>
              <Divider className="mdivider" />
              {/* ************* Price Slider*********** */}
              <div className="subsection">
                <div className="subheading">
                  <h6>Price</h6>
                  <Button variant="text" className="subbutton">
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
                      key={index}
                      data={element}
                      toggleCheckboxFunction={
                        (id) => {
                        setdata((prev)=>{
                          return prev.map((item,index)=>{
                            return index===id?{...item,isCheckboxShown:!item.isCheckboxShown}:item
                          })
                        });
                      }}
                      showAllCheckboxesFunction={showAllCheckboxesFunction}
                      handleCheckboxChangeFunction={
                        handleCheckboxChangeFunction
                      }
                    />
                    <Divider className="mdivider" />
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
              key={index}
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
      </div>
    </>
  );
};

export default Results;
