import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import '../../../Assets/CSS/Results.css'
const Results = () => {
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
  return (
    <>
      <div className="results">
        <div className="section section1">
          <div className="filterBox">
              Filter Box
              <Autocomplete
              id="free-solo-demo"
              freeSolo
              className='Result-Select-inputs'
              options={price.map((option) => option.label)}
              renderInput={(params) => <TextField {...params} label="Price From" />}
            />
            
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              className='Result-Select-inputs'
              options={price.map((option) => option.label)}
              renderInput={(params) => <TextField {...params} label="Price To" />}
            />

          </div>
        </div>
        <div className="section section1">
          <div className="resultBox">
            Result Box
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
