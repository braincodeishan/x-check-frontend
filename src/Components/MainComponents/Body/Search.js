import React, { useContext, useState,useEffect } from 'react'

//importing Navigation and React routers
import { useNavigate } from 'react-router';

//Importing Context
import { LoginContext, LogoWidth } from '../../../Contexts/Context';
import { MobileData } from '../../../Contexts/Context';

//Importing Components
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Loading from '../../SubComponents/Loading'
import Background from '../../SubComponents/Background';
// import Background from '../../SubComponents/Background';

//importing data
import {price,processors,RAM,camera} from '../../../Assets/Data/Data'

//importing other Libraries
// import axios from 'axios'

// Import CSS
import '../../../Assets/CSS/Search.css'


const Search = () => {
  const Navigate=useNavigate();
  const logoWidth=useContext(LogoWidth)
  const Login=useContext(LoginContext)
  const mobileData=useContext(MobileData)
  const [isAdvSearch, setisAdvSearch] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  
  const animatedComponents = makeAnimated();
 

    useEffect(() => {
      Login.setLastLocation('/')
    })
    


  const advSearch = () => {
    setisAdvSearch(!isAdvSearch);

  }

  const search = async() => {
    setisLoading(true);
    // const res=await axios({
    //   method:'GET',
    //   url:process.env.REACT_APP_SEARCH_API,
    //   // data:JSON.stringify({
    //   //   fromPrice,
    //   //   toPrice,
    //   //   processors,
    //   //   RAM,
    //   //   camera,
    //   //   display,
    //   //   brand
    //   // })
    // })
    // console.log(res);
    const result={
      data:"My mobile"
    }
    mobileData.setmobileData(result.data)
    
    // console.log(mobileData.mobileData);
    
    setTimeout(() => { setisLoading(false);
      logoWidth.setlogoWidth(150); 
      Navigate("/Result")
    }, 3000)
    
  }
  const scrollParallax=(e)=>{
    console.log(e);
  }


  return (
    <>
    <div className='Search-Parent' onScroll={scrollParallax}>
      <Background />
      {isLoading && <Loading />}
      <div className='container search'>
        <div className='Search-Box'>
          <div className='title'>
            <p>Lets Cross-Check the Best Phone between your budget</p>
          </div>
          <div className='Price-Select'>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              className='Price-Select-inputs'
              options={price.map((option) => option.label)}
              renderInput={(params) => <TextField {...params} label="Price From" />}
            />
            <p>To</p>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              className='Price-Select-inputs'
              options={price.map((option) => option.label)}
              renderInput={(params) => <TextField {...params} label="Price To" />}
            />


          </div>
          <div onClick={advSearch}>
          <Tooltip title="Advance Search" placement="right">
            <IconButton>
              <i className={'bx bx-down-arrow-circle ' + (isAdvSearch ? 'rotate180' : 'rotate0')}></i>
            </IconButton>
          </Tooltip>
          </div>
          {isAdvSearch && <div className='Advance-Search'>


            <p>Filter by Processors...</p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              className='Multi-Select'
              options={processors}
            />


            <p>Filter by RAMs...</p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              className='Multi-Select'
              options={RAM}
            />


            <p>Filter by Camera...</p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              className='Multi-Select'
              options={camera}
            />

            <p>Filter by Display...</p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              className='Multi-Select'
              options={price}
            />

            <p>Filter by Brands...</p>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              // defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              className='Multi-Select'
              options={price}
            />

          </div>}
          <div onClick={search}>
            <Tooltip title="Search" placement="right">
              <IconButton>
                <i className='bx bx-search'></i>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search