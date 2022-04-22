import React, { useState } from 'react'
import { Button } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useMisc } from '../../Contexts/Context';
const AddPhotos = (props) => {
  const { alertSuccess, alertDanger } = useMisc();


  const handleChange = async () => {
    try {
      const result = await axios({
        method: 'POST',
        url: process.env.REACT_APP_DOMAIN_NAME + "/addPhotos",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {

        }
      })
      if (result.status === 200) {
        alertSuccess("Data Updated")
        setTimeout(() => {
          props.close(false);
        }, 2000)
      } else {
        alertDanger("Something Went Wrong");

      }
    } catch (err) {
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
              position: 'absolute',
              left: '10px',
              top: '10px',
              fontSize: '30px',
              cursor: 'pointer'

            }}
            onClick={() => {
              props.close(false);
            }}
          />

          <div style={{ border: '0.5px dashed rgba(0,0,0,0.1)', padding: '10px' }}>
            <h3 className=''>Add Photos..</h3>
            <div className='d-flex justify-content-center align-items-center'>
              <AddAPhotoIcon sx={{ fontSize: '60px', color: 'rgba(0,0,0,0.2)' }} 
              className='cursorPointer'
              />
              <TextField  type='file' hidden='true'/>
            </div>
            <Button variant="contained" color="success" className='mt-3 mx-auto' onClick={handleChange}>
              Submit
            </Button>
          </div>


        </div>
      </div>
    </>
  )
}

export default AddPhotos