import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useMisc,useLogin } from "../../Contexts/Context";
import ImageKit from "imagekit-javascript"

const IK = {
  publicKey: process.env.REACT_APP_IK_PUBLIC_KEY,
  urlEndpoint: process.env.REACT_APP_IK_URLENDPOINT,
  authenticationEndpoint: process.env.REACT_APP_IK_AUTHENTICATIONENDPOINT,
};




const AddPhotos = (props) => {
  const Login=useLogin();
  const { alertSuccess, alertDanger } = useMisc();
  const inputElement = useRef();

  // const [fileName,setFileName]=useState("");

  const imagekit = new ImageKit(IK);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null)

  function selectedFile(e) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setImage(URL.createObjectURL(e.target.files[0]));
    }

  };


  const dataPosting = async (url) => {
    try {
      const result = await axios({
        method: "POST",
        url: process.env.REACT_APP_DOMAIN_NAME + "/reviews/addPhotos",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name:Login.user.name,
          username: Login.user.username,
          phoneId: props.id,
          image:url
        },
      });
      if (result.status === 201) {
        alertSuccess("Data Updated");
        setTimeout(() => {
          props.close(false);
        }, 2000);
      } else {
        alertDanger("Something Went Wrong");

      }
    } catch (err) {

    }
  }

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




  return (
    <>
      <div className="addPhotoContainer">
        <div className="addPhotos">
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
                onClick={() => inputElement.current.click()}
              />
              <input
                type='file'
                hidden={true}
                ref={inputElement}
                onChange={(e) => selectedFile(e)}
              />
            </div>
            <Button
              variant="contained"
              color="success"
              className="mt-3 mx-auto"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
        {image && <div className="showPhotos">
          <img src={image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>}
      </div>
    </>
  );
};

export default AddPhotos;
