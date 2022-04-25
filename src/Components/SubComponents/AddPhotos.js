import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import axios from "axios";
import { useMisc } from "../../Contexts/Context";

import { IKImage, IKContext, IKUpload } from "imagekitio-react";

const AddPhotos = (props) => {
  const { alertSuccess, alertDanger } = useMisc();
  const IK = {
    publicKey: process.env.REACT_APP_IK_PUBLIC_KEY,
    urlEndpoint: process.env.REACT_APP_IK_URLENDPOINT,
    authenticationEndpoint: process.env.REACT_APP_IK_AUTHENTICATIONENDPOINT,
  };
  const inputElement = useRef();

  const handleChange = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: process.env.REACT_APP_DOMAIN_NAME + "/addPhotos",
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      });
      if (result.status === 200) {
        alertSuccess("Data Updated");
        setTimeout(() => {
          props.close(false);
        }, 2000);
      } else {
        alertDanger("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
      alertDanger("Something Went Wrong");
    }
  };


const handleInput=()=>{
  inputElement.current.click();
}


  const onError = (err) => {
    console.log("Error");
    console.log(err);
  };

  const onSuccess = (res) => {
    console.log("Success");
    console.log(res);
  };

  return (
    <>
      <div className="reviewContainer">
        <div className="addReviews">
          <CloseIcon
            sx={{
              position: "absolute",
              left: "10px",
              top: "10px",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => {
              props.close(false);
            }}
          />

          <div
            style={{ border: "0.5px dashed rgba(0,0,0,0.1)", padding: "10px" }}
          >
            <h3 className="">Add Photos..</h3>
            <div className="d-flex justify-content-center align-items-center">
              <AddAPhotoIcon
                sx={{ fontSize: "60px", color: "rgba(0,0,0,0.2)" }}
                className="cursorPointer"
                onClick={handleInput}
              />
              {/* <IKContext
                publicKey={IK.publicKey}
                urlEndpoint={IK.urlEndpoint}
                authenticationEndpoint={IK.authenticationEndpoint}
              >
                <IKUpload onError={onError} onSuccess={onSuccess} id='789789' ref={inputElement}/>
              </IKContext> */}
              <TextField  type='file' hidden='true' ref={inputElement}/>
            </div>
            <Button
              variant="contained"
              color="success"
              className="mt-3 mx-auto"
              onClick={handleChange}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhotos;
