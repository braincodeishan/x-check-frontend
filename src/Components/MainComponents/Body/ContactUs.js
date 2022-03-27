import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

import "../../../Assets/CSS/Contacts.css";

const ContactUs = () => {
  return (
    <div
      className="Contacts container d-flex justify-content-center align-items-center "
      style={{ width: "100%", height: "100%", minHeight: "70vh" }}
    >
      <div className="ContactBox row" style={{ width: "100%" }}>
        <div className="ContactInfo bg-primary-image rounded p-4 col">
          <div className="bg"></div>
          <h3 style={{ color: "#fff" }}>Contact Information</h3>
          <p className="px-2" style={{ color: "#fff" }}>
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="d-flex m-5">
            <LocalPhoneIcon sx={{ fontSize: "40px", color: "#fa949d" }} />
            <div className="px-3 mt-2" style={{ color: "#fff" }}>
              +918882263883
            </div>
          </div>
          <div className="d-flex m-5">
            <EmailIcon sx={{ fontSize: "40px", color: "#fa949d" }} />
            <div className="px-3 mt-2" style={{ color: "#fff" }}>
              hello@xcheck.com
            </div>
          </div>
          <div className="d-flex m-5">
            <LocationOnIcon sx={{ fontSize: "40px", color: "#fa949d" }} />
            <div className="px-3 mt-2" style={{ color: "#fff" }}>
              X-Check Corp, Street 90, Pune{" "}
            </div>
          </div>
          <div className="socialIcons d-flex ">
            <FacebookIcon
              sx={{ fontSize: "35px", color: "#fff" }}
              className="Icons mx-3"
            />
            <TwitterIcon
              sx={{ fontSize: "35px", color: "#fff" }}
              className="Icons mx-3"
            />
            <InstagramIcon
              sx={{ fontSize: "35px", color: "#fff" }}
              className="Icons mx-3"
            />
            <LinkedInIcon
              sx={{ fontSize: "35px", color: "#fff" }}
              className="Icons mx-3"
            />
          </div>
        </div>
        <div className="contactForm col p-5">
          <div className="name row p-2">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              autoFocus={true}
              className="mx-2 col"
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              className="col mx-2"
            />
          </div>
          <div className="details row p-2 mt-3">
            <TextField
              id="standard-basic"
              className="col mx-2"
              label="Mobile"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              className="col mx-2"
              label="Email"
              variant="standard"
            />
          </div>
          <div className="message row p-2 mt-5">
            <TextField
              id="standard-basic"
              className="col mx-2 mt-5"
              label="Message"
              variant="standard"
            />
          </div>
          <div className="buttonBox d-flex justify-content-center align-items-center mt-5">
            <Button variant="contained" color="primary" className="px-5 py-2">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
