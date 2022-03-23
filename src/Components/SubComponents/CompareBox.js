import { Divider } from '@mui/material'
import React from 'react'

const CompareBox = (props) => {
  return (
    <>
    <div className="compareDivs" >
        <img src={props.data.image} alt={props.name} srcSet={props.name} />
        <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
    </div>
    
    </>
  )
}

export default CompareBox