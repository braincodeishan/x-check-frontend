//03

import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import amazonImg from '../../../Assets/Images/Amazon.png'
import flipkartImg from '../../../Assets/Images/flipkart.svg'
import tataCliqImg from '../../../Assets/Images/Tatacliq.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../../../Assets/CSS/PhoneDetails.css'
const PhoneDetails = (props) => {


  const [resultsData, setresultsData] = useState([
    {
      id: 0,
      name: "Apple iPhone 13 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
      highlights: ["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB", "16.51 cm (6.5 inch) HD+ Display", "8MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "Octa-core Processor"],
      rating: '1,40,762',
      criticRating: '744',
      star: 4.4,
      price: 58000,
      specification:[{
        name:'Technology',
        value:"GSM / CDMA / HSPA / EVDO / LTE / 5G"
      },
        {
          name:"2G",
          value:"GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) / CDMA 800 / 1900"
        },
        {
          name:"3G",
          value:"HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 / CDMA2000 1xEV-DO"
        },
        {
          name:"4G",
          value:"1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645"
        },
        {
          name:"5G",
          value:"1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644"
        },
        {
          name:"Speed",          
          value:"HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps"
        },
        {
          name:"Announced",
          value:"2021, September 14"
        },
        { 
          name:"Status",
          value:"Available. Released 2021, September 24"
        },
        {
          name:"Dimensions" ,
          value:"160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)"
        },
        { 
          name:"Weight",
          value:"240 g (8.47 oz)"
        },
        {
          name:"Build" ,
          value:"Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame"
        },
        {
          name:"SIM",
          value:"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)"
        },
        {
          name:"Protections" ,
          value:"IP68 dust/water resistant (up to 6m for 30 mins)"
        },
        {
          name:"Display",
          value:""
        
        }
    ],

    },
    {
      id: 1,
      name: "Apple iPhone 12",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
      highlights: ["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB", "16.51 cm (6.5 inch) HD+ Display", "8MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "Octa-core Processor"],
      rating: '78,477',
      criticRating: '286',
      star: 4.9,
      price: 38000,
      specification:[{
        name:'Technology',
        value:"GSM / CDMA / HSPA / EVDO / LTE / 5G"
      },
        {
          name:"2G",
          value:"GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) / CDMA 800 / 1900"
        },
        {
          name:"3G",
          value:"HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 / CDMA2000 1xEV-DO"
        },
        {
          name:"4G",
          value:"1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645"
        },
        {
          name:"5G",
          value:"1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644"
        },
        {
          name:"Speed",          
          value:"HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps"
        },
        {
          name:"Announced",
          value:"2021, September 14"
        },
        { 
          name:"Status",
          value:"Available. Released 2021, September 24"
        },
        {
          name:"Dimensions" ,
          value:"160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)"
        },
        { 
          name:"Weight",
          value:"240 g (8.47 oz)"
        },
        {
          name:"Build" ,
          value:"Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame"
        },
        {
          name:"SIM",
          value:"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)"
        },
        {
          name:"Protections" ,
          value:"IP68 dust/water resistant (up to 6m for 30 mins)"
        },
        {
          name:"Display",
          value:""
        
        }
    ],
    },
    {
      id: 2,
      name: "Samsung Galaxy F23",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m23.jpg",
      highlights: ["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB", "16.51 cm (6.5 inch) HD+ Display", "8MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "Octa-core Processor"],
      rating: '1,28,510',
      criticRating: '988',
      star: 3.9,
      price: 18000,
      specification:[{
        name:'Technology',
        value:"GSM / CDMA / HSPA / EVDO / LTE / 5G"
      },
        {
          name:"2G",
          value:"GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) / CDMA 800 / 1900"
        },
        {
          name:"3G",
          value:"HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 / CDMA2000 1xEV-DO"
        },
        {
          name:"4G",
          value:"1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645"
        },
        {
          name:"5G",
          value:"1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644"
        },
        {
          name:"Speed",          
          value:"HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps"
        },
        {
          name:"Announced",
          value:"2021, September 14"
        },
        { 
          name:"Status",
          value:"Available. Released 2021, September 24"
        },
        {
          name:"Dimensions" ,
          value:"160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)"
        },
        { 
          name:"Weight",
          value:"240 g (8.47 oz)"
        },
        {
          name:"Build" ,
          value:"Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame"
        },
        {
          name:"SIM",
          value:"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)"
        },
        {
          name:"Protections" ,
          value:"IP68 dust/water resistant (up to 6m for 30 mins)"
        },
        {
          name:"Display",
          value:""
        
        }
    ],


    },
    {
      id: 3,
      name: "Asus ROG Phone 5s Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-5s-pro.jpg",
      highlights: ["2 GB RAM | 32 GB ROM | Expandable Upto 256 GB", "16.51 cm (6.5 inch) HD+ Display", "8MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "Octa-core Processor"],
      rating: '6,26,574',
      criticRating: '203',
      star: 4.1,
      price: 78000,
      specification:[{
        name:'Technology',
        value:"GSM / CDMA / HSPA / EVDO / LTE / 5G"
      },
        {
          name:"2G",
          value:"GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM) / CDMA 800 / 1900"
        },
        {
          name:"3G",
          value:"HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 / CDMA2000 1xEV-DO"
        },
        {
          name:"4G",
          value:"1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645"
        },
        {
          name:"5G",
          value:"1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644"
        },
        {
          name:"Speed",          
          value:"HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps"
        },
        {
          name:"Announced",
          value:"2021, September 14"
        },
        { 
          name:"Status",
          value:"Available. Released 2021, September 24"
        },
        {
          name:"Dimensions" ,
          value:"160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)"
        },
        { 
          name:"Weight",
          value:"240 g (8.47 oz)"
        },
        {
          name:"Build" ,
          value:"Glass front (Gorilla Glass), glass back (Gorilla Glass), stainless steel frame"
        },
        {
          name:"SIM",
          value:"Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by)"
        },
        {
          name:"Protections" ,
          value:"IP68 dust/water resistant (up to 6m for 30 mins)"
        },
        {
          name:"Display",
          value:""
        
        }
    ],

    }
  ]);
  const [res, setRes] = useState(resultsData[props.data.id]);
  const [value, setValue] = React.useState(0);

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
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  return (
    <div className='PhoneDetails' >
      <div className="PDheading">
        <h2>{res.name}</h2>

        <CancelIcon sx={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px', zIndex: 100 }} onClick={() => { props.handleMoreDetailsFunction(-1) }} />
      </div>
      <div className="PDsection1">
        <div className="PDselectImage">
          <ul>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
          </ul>
        </div>
        <div className="PDdisplayImage">
          <img src={res.image} alt={res.name} srcset="" />



        </div>
      </div>
      <div className="PDsection2">

        <div className="PDbody">
          <div className="PDbuttons">
            <h5>Rs. {res.price}</h5>
            <img src={amazonImg} alt="" srcset="" />
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <h5>Rs. {res.price}</h5>
            <img src={flipkartImg} alt="" srcset="" />
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <h5>Rs. {res.price}</h5>
            <img src={tataCliqImg} alt="" srcset="" />
            <Button variant="contained" color="success">
              Buy Now!
            </Button>

          </div>
          <h4>Details</h4>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ab quaerat delectus at ipsam cupiditate consequatur sunt ea nostrum neque iste nulla qui, perferendis quod fuga sint ex sit temporibus molestiae iusto, aliquid enim molestias. At, commodi vitae totam ducimus sint nobis, aut repellendus, animi deleniti eius suscipit doloremque optio?</p>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Details" {...a11yProps(0)} />
                <Tab label="Reviews" {...a11yProps(1)} />
                <Tab label="Critiques" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Properties</TableCell>
                    <TableCell align="left">Values</TableCell> */}
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {res.specification.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <b>{row.name}</b>
                      </TableCell>
                      <TableCell align="left">{row.value}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </div>
      </div>

    </div>
  )
}

export default PhoneDetails