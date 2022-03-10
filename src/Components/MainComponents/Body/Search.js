import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Loading from '../../SubComponents/Loading'
const animatedComponents = makeAnimated();

const Search = () => {
  const [isAdvSearch, setisAdvSearch] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const price = [
    { value: 0, label: '0', color: '#00B8D9' },
    { value: 1000, label: '1000', color: '#0052CC' },
    { value: 2000, label: '2000', color: '#5243AA' },
    { value: 5000, label: '5000', color: '#FF8B00' },
    { value: 10000, label: '10000', color: '#FFC400' },
    { value: 15000, label: '15000', color: '#36B37E' },
    { value: 20000, label: '20000', color: '#00875A' },
    { value: 25000, label: '25000', color: '#253858' },
    { value: 30000, label: '30000', color: '#666666' },
    { value: 35000, label: '35000', color: '#666666' },
    { value: 40000, label: '40000', color: '#666666' },
  ];

  const processors = [
    { value: "Snapdragon 855", label: 'Snapdragon 855' },
    { value: "Snapdragon 755", label: 'Snapdragon 755' },
    { value: "Snapdragon 745", label: 'Snapdragon 745' },
    { value: "Snapdragon 740", label: 'Snapdragon 740' },
    { value: "Snapdragon 690", label: 'Snapdragon 690' },
    { value: "Snapdragon 650", label: 'Snapdragon 650' },
    { value: "Rhyzen 5", label: 'Rhyzen 5' },
    { value: "Intel 4710K", label: 'Intel 4710K' },
  ]

  const RAM = [
    { label: "2006", value: 1 },
    { label: "2008", value: 2 },
    { label: "1993", value: 3 },
    { label: "1988", value: 4 },
    { label: "2010", value: 5 },
    { label: "2010", value: 6 },
    { label: "1996", "value": 7 },
    { label: "2012", value: 8 }]

  const camera = [
    { label: ">64MP", value: 8 },
    { label: "64MP", value: 1 },
    { label: "32MP", value: 2 },
    { label: "16MP", value: 3 },
    { label: "8MP", value: 4 },
    { label: "4MP", value: 5 },
    { label: "2MP", value: 6 },
    { label: "1MP", "value": 7 }]

  const advSearch = () => {
    setisAdvSearch(!isAdvSearch);

  }

const search=()=>{
  setisLoading(true);
  setTimeout(()=>{setisLoading(false)},3000)
}

  return (
    <>
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
          <Tooltip title="Advance Search" placement="right">
            <IconButton>
              <i class={'bx bx-down-arrow-circle ' + (isAdvSearch ? 'rotate180' : 'rotate0')} onClick={advSearch}></i>
            </IconButton>
          </Tooltip>
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
          <Tooltip title="Search" placement="right">
            <IconButton>
              <i class='bx bx-search' onClick={search}></i>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  )
}

export default Search