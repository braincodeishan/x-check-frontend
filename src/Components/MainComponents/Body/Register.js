import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import MyCard from "../../SubComponents/MyCard";

import GoogleIcon from "../../../Assets/Icons/google.png";
import InstagramIcon from "../../../Assets/Icons/instagram.webp";
import TwitterIcon from "../../../Assets/Icons/twitter.png";
import FacebookIcon from "../../../Assets/Icons/facebook.webp";

import { useNavigate } from "react-router";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useMisc } from "../../../Contexts/Context";
import axios from "axios";

import "../../../Assets/CSS/Login.css";

const Register = () => {
  const {successAlert,dangerAlert, setLoading}=useMisc();
  const Navigate = useNavigate();
  const [regData, setRegData] = useState({
    username: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignin = async () => {
    try {
      setLoading(true);
      const { username, name, email, mobile, password, confirmPassword } =
        regData;
      const url = process.env.REACT_APP_DOMAIN_NAME + "User/register";
      if (!username ||!name ||!email ||!mobile ||!password){
          dangerAlert("Please enter all the fields");
          return;
        } 
        if(password !== confirmPassword){
          dangerAlert("Password doesn't match");
          return;
        }
        if(!email.includes('@')&&!email.includes('.')){
          dangerAlert("Incorrect email entered");
          return;
        }
        if(mobile.length!==10){
         dangerAlert("Incorrect phone entered");
          return;
        }
        
        const result = await axios({
          url: url,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username,
            name,
            email,
            mobile,
            password,
          },
        });
        setLoading(false);
        if (result.status === 201) {
          console.log(result.data);
          successAlert(result.data);
          setInterval(() => {
            Navigate("/Login");            
          }, 2000);
        } else {
          dangerAlert(result.data);

        }
     
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setRegData({ ...regData, [name]: val });
  };

  return (
    <div className="Login ">
      <div className="L-box container">
        <div className="L-section-primary">
          <i className="bx bxl-xing animateZoom"></i>
          <h3>Resister</h3>
          <p>
            First step where the Magic Begins. <AutoFixHighIcon />
          </p>
          <div className="L-emailLogin">
            <Button variant="outlined" sx={{ margin: "20px", width: "70%" }}>
              {
                <img
                  src={GoogleIcon}
                  alt={GoogleIcon}
                  srcSet={GoogleIcon}
                  style={{ width: "25px", marginRight: "10px" }}
                />
              }
              Sign up with Google
            </Button>
          </div>
          <Divider sx={{ marginBottom: "30px" }} />

          <div className="L-emailLogin">
            <TextField
              id="outlined-password-input1"
              label="UserName"
              name="username"
              type="text"
              sx={{ marginBottom: "20px", width: "70%" }}
              autoComplete="off"
              value={regData.username}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input2"
              label="Name"
              type="text"
              name="name"
              sx={{ marginBottom: "20px", width: "70%" }}
              autoComplete="off"
              value={regData.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input3"
              label="Email Id"
              type="text"
              name="email"
              sx={{ marginBottom: "20px", width: "70%" }}
              autoComplete="off"
              value={regData.email}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input4"
              label="Mobile Number"
              type="text"
              name="mobile"
              sx={{ marginBottom: "20px", width: "70%" }}
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              value={regData.mobile}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input5"
              label="Password"
              type="password"
              autoComplete="false"
              name="password"
              sx={{ marginBottom: "20px", width: "70%" }}
              value={regData.password}
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input6"
              label="Confirm Password"
              type="password"
              autoComplete="false"
              name="confirmPassword"
              sx={{ marginBottom: "20px", width: "70%" }}
              value={regData.confirmPassword}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3521b5",
                marginBottom: "20px",
                width: "70%",
              }}
              onClick={handleSignin}
            >
              SIGN UP
            </Button>
          </div>
          <Divider sx={{ marginBottom: "30px" }} />
          <h6>
            Already have an account? <Link to="/Login">Sign in</Link> here.
          </h6>
        </div>
        <div className="L-section-secondary">
          <div className="L-Login-bg">
            <div className="images">
              <div className="section">
                <MyCard
                  classes={"animateLeftCard1"}
                  data={{
                    name: "Ishan",
                    avatar:
                      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
                    body: "Awesome App ❤️",
                    details:
                      "Saved a lot of money. Keep in your pocket and save a lot.",
                  }}
                />
              </div>
              <div className="section">
                <MyCard
                  classes={"animateLeftCard2"}
                  data={{
                    name: "Shivam",
                    avatar:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4UxJO_flRww7WXHnIwuxAeX0kgkqlviKhgPzgg2hHdXW0YjdQucZegboJdxBAoFyD40&usqp=CAU",
                    body: "My Favorite App ❤️",
                    details:
                      "It gets more delicious when you sign up and use the App.",
                  }}
                />
              </div>
              <div className="section">
                <div className="textbox">
                  <h5>Maximum Rewards</h5>
                  <p>
                    Check out our social medias handles to get coupons and
                    discount. BEST DEALS GUARANTEED.
                  </p>
                  <div className="icons">
                    <img
                      src={InstagramIcon}
                      alt={InstagramIcon}
                      srcSet={InstagramIcon}
                      style={{
                        padding: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                      }}
                      className="animateZoom L-Image1 animateLeftIcons"
                    />
                    <img
                      src={TwitterIcon}
                      alt={TwitterIcon}
                      srcSet={TwitterIcon}
                      style={{
                        width: "50px",
                        padding: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                      }}
                      className="animateZoom L-Image2 animateLeftIcons"
                    />
                    <img
                      src={FacebookIcon}
                      alt={FacebookIcon}
                      srcSet={FacebookIcon}
                      style={{
                        width: "50px",
                        padding: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                      }}
                      className="animateZoom L-Image3 animateLeftIcons"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
