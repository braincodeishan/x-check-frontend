//03

import React, { useContext, useState, useEffect } from 'react'
// import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import amazonImg from '../../../Assets/Images/Amazon.png'
import flipkartImg from '../../../Assets/Images/flipkart.svg'
import tataCliqImg from '../../../Assets/Images/Tatacliq.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { LinearProgress } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router';
import '../../../Assets/CSS/PhoneDetails.css'
import { resultsData } from '../../../Assets/Data/Data'
import { itemData } from '../../../Assets/Data/Data'

import Reviews from '../../SubComponents/Reviews'
import ImageViewer from '../../SubComponents/ImageViewer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import {LoginContext} from '../../../Contexts/Context'

const PhoneDetails = () => {
  const Login=useContext(LoginContext)
  useEffect(() => {
    Login.setLastLocation('/PhoneDetails/:id')
  })
  const { id } = useParams();

  const [showImage, setshowImage] = useState(null)
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

  const showMyImage = (item) => {
    setshowImage(item)
  }
  const progress = [100, 50, 70, 20, 10]
  return (
    <>
      {showImage && <ImageViewer image={showImage} setshowImage={setshowImage} />}
      <div className='PhoneDetails container' >

        <div className="PDsection1">

          <div className="PDdisplayImage">
            <img src={res.image} alt={res.name} srcSet="" />
          </div>
          <div className="PDselectImage">
            <ul>
              <li className='animateZoom'><img src={res.image} alt={res.name} srcSet="" /></li>
              <li className='animateZoom'><img src={res.image} alt={res.name} srcSet="" /></li>
              <li className='animateZoom'><img src={res.image} alt={res.name} srcSet="" /></li>
              <li className='animateZoom'><img src={res.image} alt={res.name} srcSet="" /></li>
              <li className='animateZoom'><img src={res.image} alt={res.name} srcSet="" /></li>
            </ul>
          </div>
          <div className="PDbuttons">
            <img src={amazonImg} alt="" srcSet="" />
            <h5>Rs. {res.price}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={flipkartImg} alt="" srcSet="" />
            <h5>Rs. {res.price}</h5>
            <Button variant="contained" color="success">
              Buy Now!
            </Button>
            <img src={tataCliqImg} alt="" srcSet="" />
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
                  <Tab label="Photos & Videos" {...a11yProps(1)} />
                  <Tab label="Reviews" {...a11yProps(2)} />
                  <Tab label="Critiques" {...a11yProps(3)} />
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

                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item, index) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className='cursor-pointer animateZoom PD-imageList'
                        onClick={() => { showMyImage(item.img) }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>





              </TabPanel>

              <TabPanel value={value} index={2}>
                <div className="PD-reviewsBar">
                  <div className="PD-XCheckNumber">
                  <EmojiEventsIcon sx={{fontSize:'100px', justifyContent:'center', alignSelf:'center'}}/>
                  <h3>X-Check Score</h3>
                    <h2 className='animateZoom'>1040</h2>
                  </div>
                  <div>
                  {progress.map((data, index) => {
                    return <div className="progressbars" key={index}>
                      <h6>{5-index} <i class="bx bxs-star"></i></h6>
                      <LinearProgress variant="determinate" value={data} className='PD-progressbar'/>
                      <p>{Math.round(Math.random() * 1000)}</p>
                    </div>
                  })}
                  </div>
                </div>

                {res.reviews.map((item, index) => {
                  return <Reviews {...item} key={index} />
                })}




              </TabPanel>
              <TabPanel value={value} index={3}>
              <div className="PD-reviewsBar">
                  <div className="PD-XCheckNumber">
                  <EmojiEventsIcon sx={{fontSize:'100px', justifyContent:'center', alignSelf:'center'}}/>
                  <h3>X-Check Score</h3>
                    <h2 className='animateZoom'>1040</h2>
                  </div>
                  <div>
                  {progress.map((data, index) => {
                    return <div className="progressbars" key={index}>
                      <h6>{5-index} <i class="bx bxs-star"></i></h6>
                      <LinearProgress variant="determinate" value={data} className='PD-progressbar'/>
                      <p>{Math.round(Math.random() * 1000)}</p>
                    </div>
                  })}
                  </div>
                </div>
                {res.reviews.map((item, index) => {
                  return <Reviews {...item} key={index} />
                })}
              </TabPanel>
            </Box>
          </div>
        </div>

      </div>
    </>
  )
}

export default PhoneDetails