//03

import React, { useState, useEffect } from "react";
// import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from "@mui/material";
import amazonImg from "../../../Assets/Images/Amazon.png";
import flipkartImg from "../../../Assets/Images/flipkart.svg";
import tataCliqImg from "../../../Assets/Images/Tatacliq.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useParams } from "react-router";
import "../../../Assets/CSS/PhoneDetails.css";
import { resultsData } from '../../../Assets/Data/Data'
import { itemData } from "../../../Assets/Data/Data";

import { useMisc } from "../../../Contexts/Context";

import axios from "axios";

import DataTables from "../../SubComponents/PhoneDetails/DataTables";
import Images from "../../SubComponents/PhoneDetails/Images";
import Reviews from "../../SubComponents/PhoneDetails/Reviews";

const PhoneDetails = () => {
  const { setLastLocation } = useMisc();
  
  const { id } = useParams();
  const [res, setRes] = useState(resultsData);
  const [mainImage, setMainImage] = useState([
    'https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg',
    'https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg',
    'https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg',
    'https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg',
    'https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg',

  ])

  const [value, setValue] = useState(0);

  //for Last location of login
  useEffect(() => {
    setLastLocation("/PhoneDetails/" + id);

    async function getData() {
      try {
        const result = await axios.get(process.env.REACT_APP_DOMAIN_NAME + "/search/mobiles",{
          params: {
            id: id
          }
        }
        );
        if (result.status === 200) {
          // console.log(result.data);
          setRes(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }, []);

  useEffect(() => {

    console.log("data = " + res)
    console.log("Image = " + res.image)
    if (res.image.length > 0) {
      setMainImage(res.image)

    }
  }, [res])

  // for folowing the star rating of the reviews

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
    
      <div className="PhoneDetails container mt-4">
        <div className="PDsection1">
          <div className="PDdisplayImage mt-4">
            <img src={mainImage[0]} alt={res.name} srcSet="" />
          </div>
          <div className="PDselectImage">
            <ul>
              {res.image.length > 0 ? mainImage.map((item, index) => {
                <li className="animateZoom" onClick={() => setMainImage(res.image[index])} key={index}>
                  <img src={item} alt={res.name} srcSet="" />
                </li>
              }) :
                <>
                  <li className="animateZoom" >
                    <img src='https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg' srcSet="" />
                  </li>
                  <li className="animateZoom"  >
                    <img src='https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg' srcSet="" />
                  </li>
                  <li className="animateZoom"  >
                    <img src='https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg' srcSet="" />
                  </li>
                  <li className="animateZoom"  >
                    <img src='https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg' srcSet="" />
                  </li>
                  <li className="animateZoom"  >
                    <img src='https://ik.imagekit.io/e5d019f0b85d/abc1_mE1801jBn.jpg' srcSet="" />
                  </li>
                </>
              }


            </ul>
          </div>
          <div className="PDbuttons">
            <img src={amazonImg} alt="" srcSet="" />
            <h5>Rs. {res.priceList.amazon}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={flipkartImg} alt="" srcSet="" />
            <h5>Rs. {res.priceList.flipkart}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={tataCliqImg} alt="" srcSet="" />
            <h5>Rs. {res.priceList.tatacliq}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
          </div>
        </div>
        <div className="PDsection2">
          <div className="PDheading">
            <h2>{res.name}</h2>

            {/* <CancelIcon sx={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px', zIndex: 100 }} onClick={() => { }} /> */}
          </div>
          <div className="PDbody">
            <h4>Details</h4>
            
              <ul style={{ textAlign: "justify" }}>
                  {res.highlights.map((item,index)=>{
                    console.log(item)
                    return <li key={index}>{item}</li>

                  })}
              </ul>
            

            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Details" {...a11yProps(0)} />
                  <Tab label="Photos & Videos" {...a11yProps(1)} />
                  <Tab label="Reviews" {...a11yProps(2)} />
                  <Tab label="Critiques" {...a11yProps(3)} />
                </Tabs>
              </Box>

              {/* Specification */}

              <TabPanel value={value} index={0}>
                {res.specification && <DataTables specification={res.specification} />}
              </TabPanel>

              {/* Images */}

              <TabPanel value={value} index={1}>
                <Images itemData={itemData} />
              </TabPanel>

              {/* Reviews */}

              <TabPanel value={value} index={2}>
                <Reviews id={id} url={"UserReviews"} />
              </TabPanel>

              {/* Critique Reviews */}

              <TabPanel value={value} index={3}>
                <Reviews id={id} url={"CriticsReviews"} />
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
