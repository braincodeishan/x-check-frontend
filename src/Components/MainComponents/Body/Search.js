import React, { useState } from 'react'
import Select from 'react-select'
import Slider from '@mui/material/Slider';
const Search = () => {
  const price = [
    { value: 0, label: '0', color: '#00B8D9'},
    { value: 1000, label: '1000', color: '#0052CC'},
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
  const [slider,setSlider]=useState([0,100000])
  const sliderChange=(e,newValue)=>{
    setSlider(newValue)

  }

  function valuetext() {
    return `Rs. ${slider}`;
  }
  return (
    <div className='container'>
      <div className='Search-Box'>
        <div className='title'>
          <p>Lets Cross-Check the Best Phone between your budget</p>
        </div>
        <div className='Price-Select'>
        <Select
            defaultValue={price[0]}
            name="Price"
            options={price}
            classNamePrefix="select"
            
            
          />
          <p>To</p>
          <Select
            defaultValue={price[10]}
            isMulti
            name="colors"
            options={price}
            className="basic-multi-select"
            classNamePrefix="select"
            
            
          />

        <Slider
        getAriaLabel={() => 'Price Range'}
        value={slider}
        onChange={sliderChange}
        // valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />

        </div>
        <div className='Advance-Search'>

        </div>
      </div>
    </div>
  )
}

export default Search