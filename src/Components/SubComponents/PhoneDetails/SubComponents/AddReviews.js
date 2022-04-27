import React, { useState, useRef } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { TextField } from '@mui/material';
import { Button, Tooltip, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import ImageKit from 'imagekit-javascript';
import { useMisc, useLogin } from '../../../../Contexts/Context';


const AddReviews = (props) => {
  const Login = useLogin();
  const inputElement = useRef();
  const IK={
    publicKey: process.env.REACT_APP_IK_PUBLIC_KEY,
    urlEndpoint: process.env.REACT_APP_IK_URLENDPOINT,
    authenticationEndpoint: process.env.REACT_APP_IK_AUTHENTICATIONENDPOINT,
  };
  const imagekit=new ImageKit(IK)

  const { alertSuccess, alertDanger } = useMisc();
  const [stars, setStars] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  const [popUp, setPopUp] = useState(false)
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null)

  const handleSubmit = async () => {
    try {
      imagekit.upload({
        file: file,
        fileName: "abc1.jpg",
        tags: ["tag1"],
        extensions: [
          {
            name: "aws-auto-tagging",
            minConfidence: 80,
            maxTags: 10
          }
        ]
      }, function (err, result) {
        if (err) {
          alertDanger("Something Went Wrong!!")
          return;
        }
        dataPosting(result.url);
      });
    } catch (err) {
      alertDanger("Something Went Wrong");
    }
  };
  
  const dataPosting = async (url) => {
    try {
      const result = await axios({
        method: 'POST',
        url: process.env.REACT_APP_DOMAIN_NAME + "/reviews/" + props.url + "/addReview",
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
          image:url
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

  function selectedFile(e) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setImage(URL.createObjectURL(e.target.files[0]));
    }

  };


  return (
    <>
      <div className='reviewContainer'>
        <div className={popUp ? 'addReviews addReview-popup' : 'addReviews'}>
          <Tooltip title="Close" sx={{
            position: 'absolute',
            left: '10px',
            top: '10px',
          }}>
            <IconButton onClick={() => {
              props.close(false);
            }}>
              <CloseIcon
                sx={{

                  fontSize: '30px',
                  cursor: 'pointer'

                }}

              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Pop Up" sx={{
            position: 'absolute',
            top: '10px',
            right: '10px'
          }}>
            <IconButton onClick={() => {
              setPopUp(prev => !prev)
            }}>
              <OpenInFullIcon
                sx={{

                  position: 'relative',
                  fontSize: '30px',
                  cursor: 'pointer',
                  background: '#fff',
                  boxShadow: '1px 1px 10px rgba(0,0,0,0.3)',
                  padding: '7px',
                  borderRadius: '50%'

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
                sx={{ minWidth: '275px', width: '100%' }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              // className='mt-1'
              />
            </div>
            <div><TextField
              id="standard-multiline-static"
              label="Few Lines from You"
              multiline
              rows={popUp ? 8 : 4}
              variant="standard"
              className='mt-2'
              sx={{ minWidth: '275px', width: '100%' }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            /></div>
            <div>
              {!image ? <AddAPhotoIcon
                sx={{ fontSize: "50px", color: "rgba(0,0,0,0.2)" }}
                className="cursorPointer my-4"
                onClick={() => inputElement.current.click()}
              /> :
                <div className="showReviewPhotos">
                  <img src={image} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                  <Tooltip title="Remove Photo" sx={{
                    position: 'absolute',
                    right: '0px',
                    top: '0px',
                    
                  }}>
                    <IconButton onClick={() => {
                      setImage(null);
                    }}>
                      <CancelIcon
                        sx={{

                          fontSize: '15px',
                          cursor: 'pointer'

                        }}

                      />
                    </IconButton>
                  </Tooltip>
                </div>}
              <input
                type='file'
                hidden={true}
                ref={inputElement}
                onChange={(e) => selectedFile(e)}
              />
            </div>
            <Button variant="contained" color="success" className='mx-auto' onClick={handleSubmit}>
              Submit
            </Button>
          </div>


        </div>
      </div>
    </>
  )
}

export default AddReviews