import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { TextField } from '@mui/material';
import { Button, Tooltip, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import axios from 'axios';
import { useMisc, useLogin } from '../../Contexts/Context';
const AddReviews = (props) => {
  const Login = useLogin();
  const { alertSuccess, alertDanger } = useMisc();
  const [stars, setStars] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  const handleChange = async () => {
    try {
      const result = await axios({
        method: 'POST',
        url: process.env.REACT_APP_DOMAIN_NAME + "/reviews/addReview",
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          phoneId: props.id,
          name: Login.user.name,
          username: Login.user.username,
          stars: stars,
          title: title,
          description: desc,

        }
      })
      if (result.status === 201) {
        alertSuccess("Saved")
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
          <Tooltip title="Pop Up">
            <IconButton>
              <OpenInFullIcon
                sx={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  fontSize: '30px',
                  cursor: 'pointer',
                  background: '#fff',
                  boxShadow: '1px 1px 10px rgba(0,0,0,0.3)',
                  padding: '7px',
                  borderRadius: '50%'

                }}
                onClick={() => {
                  // props.close(false);
                }}
              />
            </IconButton>
          </Tooltip>

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
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