import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useMisc } from '../../Contexts/Context';
const AddReviews = (props) => {
  const {alertSuccess, alertDanger}=useMisc();
  const [stars, setStars] = useState(0);

  const handleChange= async()=>{
    try{
      const result= await axios({
        method:'POST',
        url:process.env.REACT_APP_DOMAIN_NAME+"addReview",
        headers:{
          'Content-Type':'application/json'
        },
        data:{
  
        }
      })
      if(result.status===200){
        alertSuccess("Data Updated")
        setTimeout(()=>{
          props.close(false);
        },2000)
      }else{
        alertDanger("Something Went Wrong");

      }
    }catch(err){
      console.log(err);
      alertDanger("Something Went Wrong");
    }
  
  }


  return (
    <>
      <div className='reviewContainer'>
        <div className='addReviews'>
          <CloseIcon
              sx={{
                position:'absolute',
                left:'10px',
                top:'10px',
                fontSize:'30px',
                cursor:'pointer'

              }}
              onClick={()=>{
                props.close(false);
              }}
          />
          <div className='mb-5'>
            <span >
              <p>Rate the Product</p>
              {stars >= 1 ?
                <StarIcon className='cursorPointer' onClick={() => setStars(1)} /> :
                <StarBorderIcon className='cursorPointer' onClick={() => setStars(1)} />}

              {stars >= 2 ?
                <StarIcon className='cursorPointer' onClick={() => setStars(2)} /> :
                <StarBorderIcon className='cursorPointer' onClick={() => setStars(2)} />}

              {stars >= 3 ?
                <StarIcon className='cursorPointer' onClick={() => setStars(3)} /> :
                <StarBorderIcon className='cursorPointer' onClick={() => setStars(3)} />}

              {stars >= 4 ?
                <StarIcon className='cursorPointer' onClick={() => setStars(4)} /> :
                <StarBorderIcon className='cursorPointer' onClick={() => setStars(4)} />}

              {stars >= 5 ?
                <StarIcon className='cursorPointer' onClick={() => setStars(5)} /> :
                <StarBorderIcon className='cursorPointer' onClick={() => setStars(5)} />}


            </span>
          </div>
          <div style={{ border: '0.5px dashed rgba(0,0,0,0.1)', padding: '10px' }}>
            <h3 className=''>Review..</h3>
            <div>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                sx={{ minWidth: '275px' }}
              // className='mt-1'
              />
            </div>
            <div><TextField
              id="standard-multiline-static"
              label="Few Lines from You"
              multiline
              rows={4}
              defaultValue=""
              variant="standard"
              className='mt-2'
              sx={{ minWidth: '275px' }}
            /></div>
            <Button variant="contained" color="success" className='mt-3 mx-auto' onClick={handleChange}>
              Submit
            </Button>
          </div>


        </div>
      </div>
    </>
  )
}

export default AddReviews