//03

import React, { useState } from 'react'
// import CancelIcon from '@mui/icons-material/Cancel';
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
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router';
import '../../../Assets/CSS/PhoneDetails.css'
import {resultsData} from '../../../Assets/Data/Data'
import Reviews from '../../SubComponents/Reviews'
const PhoneDetails = () => {

  const {id}=useParams();

  
  const [res, setRes] = useState(resultsData[id]);
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
    <div className='PhoneDetails container' >
      
      <div className="PDsection1">
        
        <div className="PDdisplayImage">
          <img src={res.image} alt={res.name} srcset="" />
        </div>
        <div className="PDselectImage">
          <ul>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
            <li><img src={res.image} alt={res.name} srcset="" /></li>
          </ul>
        </div>
        <div className="PDbuttons">
            <img src={amazonImg} alt="" srcset="" />
            <h5>Rs. {res.price}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={flipkartImg} alt="" srcset="" />
            <h5>Rs. {res.price}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={tataCliqImg} alt="" srcset="" />
            <h5>Rs. {res.price}</h5>
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
              {res.reviews.map((item,index)=>{
                return <Reviews {...item} key={index}/>
              })}




            </TabPanel>
            <TabPanel value={value} index={2}>
            {res.reviews.map((item,index)=>{
                return <Reviews {...item} key={index}/>
              })}
            </TabPanel>
          </Box>
        </div>
      </div>

    </div>
  )
}

export default PhoneDetails