import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import PhoneDetails from './PhoneDetails'
import "../../../Assets/CSS/Results.css";
import FilterBox from "../../SubComponents/FilterBox";
import ResultBox from "../../SubComponents/ResultBox";
import CustomizedBreadcrumbs from "../../SubComponents/CustomizedBreadcrumbs";
const Results = () => {
  const [isDetailOpen, setisDetailOpen]=useState({
    id:-1,
    pane:false
  });
  const [pricevalue, setpriceValue] = React.useState([10, 80]);

  const handleChange = (event, newValue) => {
    setpriceValue(newValue);
  };
  const handleChange1 = (e) => {
    setpriceValue([e.target.value / 500, pricevalue[1]]);
  };
  const handleChange2 = (e) => {
    setpriceValue([pricevalue[0], e.target.value / 500]);
  };

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

  const toggleCheckboxFunction = (id) => {
    setdata((prev)=>{
      return prev.map((item,index)=>{
        return index===id?{...item,isCheckboxShown:!item.isCheckboxShown}:item
      })
    });
  };

  const handleCheckboxChangeFunction = () => {};
  const showAllCheckboxesFunction = () => {};

  const [resultsData,setresultsData]=useState([
    {
      id:0,
      name:"Apple iPhone 13 Pro",
      image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
      highlights:["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","8MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Octa-core Processor"],
      rating:'1,40,762',
      criticRating:'744',
      star:4.4,
      price:58000,
      specification:{
        technology:"GSM / CDMA / HSPA / EVDO / LTE / 5G",
        twoG:"GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) / CDMA 800 / 1900",
        threeG:"HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 / CDMA2000 1xEV-DO",
        fourG:"1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645",
        fiveG:"1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644",
        speed:"HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps",
        announce:"2021, September 14",
        status:"Available. Released 2021, September 24",
        dimension:"160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)",
        Weight:"240 g (8.47 oz)",
        Build:"Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame",
        sim:"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)",
        phoneProtection:"IP68 dust/water resistant (up to 6m for 30 mins)",
        display:""

      },

    },
    {
      id:1,
      name:"Apple iPhone 12",
      image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
      highlights:["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","8MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Octa-core Processor"],
      rating:'78,477',
      criticRating:'286',
      star:4.9,
      price:38000

    },
    {
      id:2,
      name:"Samsung Galaxy F23",
      image:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m23.jpg",
      highlights:["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","8MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Octa-core Processor"],
      rating:'1,28,510',
      criticRating:'988',
      star:3.9,
      price:18000


    },
    {
      id:3,
      name:"Asus ROG Phone 5s Pro",
      image:"https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s-pro.jpg",
      highlights:["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","8MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Octa-core Processor"],
      rating:'6,26,574',
      criticRating:'203',
      star:4.1,
      price:78000

    }
  ]);

  const handleMoreDetailsFunction=(id)=>{

    setisDetailOpen((prev)=>{
      return {id:id,pane:!prev.pane}
    })
  
  };
// console.log(data);
  return (
    <>
    {isDetailOpen.pane && 
    <PhoneDetails
    data={isDetailOpen}
    handleMoreDetailsFunction={handleMoreDetailsFunction}
    
    />}
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
                    onChange={handleChange}
                    className="slider"
                  />
                  <div className="inputBox">
                    <TextField
                      id="select"
                      className="inputField"
                      label="From"
                      select
                      value={pricevalue[0] * 500}
                      onChange={handleChange1}
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
                      onChange={handleChange2}
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

              {data.map((element) => {
                return (
                  <>
                    <FilterBox
                      key={"Filter" + element.id}
                      data={element}
                      toggleCheckboxFunction={toggleCheckboxFunction}
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
              {resultsData.map((data)=>{
                return(
                <>
                <ResultBox 
              key={"Results"+data.id}
              data={data}
              handleMoreDetailsFunction={handleMoreDetailsFunction}
              />
              <Divider className="mdivider" />
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
