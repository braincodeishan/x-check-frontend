import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';



import '../../../Assets/CSS/PhoneDetails.css'
const PhoneDetails = (props) => {
  console.log(props);
  return (
    <div className='PhoneDetails'>

      <CancelIcon sx={{ position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }} onClick={() => {props.handleMoreDetailsFunction(-1) }} />

      <div className="phoneDetailsSec section1">
        {props.data.id}
      </div>
      {/* <div className="phoneDetailsSec section2">

    </div> */}

    </div>
  )
}

export default PhoneDetails