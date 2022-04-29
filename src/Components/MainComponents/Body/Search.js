import React, { useState, useEffect } from "react";

//importing Navigation and React routers
import { useNavigate } from "react-router";

//Importing Context
import { useLogin, useMisc, useMobileData } from "../../../Contexts/Context";
import { MobileData } from "../../../Contexts/Context";


//Importing Components
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Loading from "../../SubComponents/RegularComponents/Loading/Loading";
import Background from "../../SubComponents/RegularComponents/Background";
// import Background from '../../SubComponents/Background';

//importing data
import { priceData, processorsData, RAMData, cameraData, displayData, brandData, resultsData } from "../../../Assets/Data/Data";

//importing other Libraries
import axios from 'axios'

// Import CSS
import "../../../Assets/CSS/Search.css";


const Search = () => {
  const Navigate = useNavigate();
  const Login = useLogin();
  const mobileData = useMobileData();
  const [inputPrice, setInputPrice] = useState(['0', '50000']);
  const [processors, setProcessors] = useState([]);
  const [ram, setRam] = useState([]);
  const [primaryCamera, setPrimaryCamera] = useState([]);
  const [display, setDisplay] = useState([]);
  const [brand, setBrand] = useState([]);
  const { setLastLocation, Filter, setFilter } = useMisc();
  const [isAdvSearch, setisAdvSearch] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const animatedComponents = makeAnimated();

  useEffect(() => {
    setLastLocation("/");
  });

  const advSearch = () => {
    setisAdvSearch(!isAdvSearch);
  };

  const search = async () => {
    setisLoading(true);

    const Filters = {
      price: inputPrice,
      processors: processors,
      ram: ram,
      PrimaryCamera: primaryCamera,
      display: display,
      brands: brand
    }


    setFilter((prev) => {
      return { ...prev, ...Filters }
    })

    const result = await axios({
      method: 'POST',
      url: process.env.REACT_APP_DOMAIN_NAME+ '/search',
      data: {
        price: Filters.price,
        processors: Filters.processors,
        ram: Filters.ram,
        primaryCamera: Filters.PrimaryCamera,
        display: Filters.display,
        brands: Filters.brands
      }
    })
    

    
    
    if (result.status === 200) {
      console.log(result);
      mobileData.setMobileData(result.data);
      console.log(result.data)
      setTimeout(() => {
        setisLoading(false);
        Navigate("/Result");
      }, 1000);
    }
  };
  

  return (
    <>
      <div className="Search-Parent" >
        {/* <Background /> */}
        {isLoading && <Loading />}
        <div className="container search">
          <div className="Search-Box">
            <div className="title">
              <p>Lets Cross-Check the Best Phone between your budget</p>
            </div>
            <div className="Price-Select">

              <Autocomplete
                id="controllable-states-demo"
                freeSolo
                className="Price-Select-inputs"

                options={priceData}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Price From"

                  />

                )}
                // value={price[0]}
                // onChange={(event, newValue) => {
                //   setPrice((prev)=>[newValue,prev[1]]);

                // }}
                inputValue={inputPrice[0]}
                onInputChange={(event, newInputValue) => {
                  setInputPrice((prev) => [newInputValue, prev[1]]);

                }}
              />
              <p>To</p>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                className="Price-Select-inputs"
                options={priceData}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Price To"

                  />
                )}
                // value={price[1]}
                // onChange={(event, newValue) => {
                //   setPrice((prev)=>[prev[0],newValue]);

                // }}
                inputValue={inputPrice[1]}
                onInputChange={(event, newInputValue) => {
                  setInputPrice((prev) => [prev[0], newInputValue]);

                }}
              />
            </div>
            <div onClick={advSearch}>
              <Tooltip title="Advance Search" placement="right">
                <IconButton>
                  <i
                    className={
                      "bx bx-down-arrow-circle " +
                      (isAdvSearch ? "rotate180" : "rotate0")
                    }
                  ></i>
                </IconButton>
              </Tooltip>
            </div>
            {isAdvSearch && (
              <div className="Advance-Search">

                <p>Filter by Processors...</p>

                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  className="Multi-Select"
                  options={processorsData}
                  value={processorsData.filter(obj => processors.includes(obj.value))}
                  onChange={(e) => {
                    setProcessors(Array.isArray(e) ? e.map(x => x.value) : []);
                  }}
                // inputValue={processors}
                // onInputChange={(event)=>{
                //   console.log(event);
                //   // setProcessors((prev)=>[...prev,event.target.inputValue])
                // }}
                />

                <p>Filter by RAMs...</p>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  className="Multi-Select"
                  options={RAMData}
                  value={RAMData.filter(obj => ram.includes(obj.value))}
                  onChange={(e) => {
                    setRam(Array.isArray(e) ? e.map(x => x.value) : []);
                  }}
                />

                <p>Filter by Camera...</p>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  className="Multi-Select"
                  options={cameraData}
                  value={cameraData.filter(obj => primaryCamera.includes(obj.value))}
                  onChange={(e) => {
                    setPrimaryCamera(Array.isArray(e) ? e.map(x => x.value) : []);
                  }}
                />

                <p>Filter by Display...</p>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  className="Multi-Select"
                  options={displayData}
                  value={displayData.filter(obj => display.includes(obj.value))}
                  onChange={(e) => {
                    setDisplay(Array.isArray(e) ? e.map(x => x.value) : []);
                  }}
                />

                <p>Filter by Brands...</p>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  className="Multi-Select"
                  styles={{ zIndex: '10' }}
                  options={brandData}
                  value={brandData.filter(obj => brand.includes(obj.value))}
                  onChange={(e) => {
                    setBrand(Array.isArray(e) ? e.map(x => x.value) : []);
                  }}
                />
              </div>
            )}
            <div onClick={search}>
              <Tooltip title="Search" placement="right">
                <IconButton>
                  <i className="bx bx-search"></i>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
