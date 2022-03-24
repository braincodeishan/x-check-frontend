import React, { useContext, useState } from 'react'
import { Button, Divider } from '@mui/material'
import TextField from '@mui/material/TextField';

import MyCard from '../../SubComponents/MyCard'

import InstagramIcon from '../../../Assets/Icons/instagram.webp';
import TwitterIcon from '../../../Assets/Icons/twitter.png';
import FacebookIcon from '../../../Assets/Icons/facebook.webp';
import { LoginContext } from '../../../Contexts/Context'
import { useNavigate } from 'react-router';
import {SnackbarAlert} from '../../SubComponents/Alert'
import '../../../Assets/CSS/Login.css'

const ForgotPassword = () => {

  const [openSnack, setopenSnack] = useState({
    show:false,
    message:"",
    severity:""
  });
  const [showNewPass, setshowNewPass] = useState(false);
  const [otp, setOtp] = useState({
    otpGenerated: "",
    otpEntered: "",
    otpVerified: false

  })
  const Navigate = useNavigate();
  const Login = useContext(LoginContext);
  const handlePWChange = () => {
    setOtp({
      otpGenerated: Math.round(Math.random() * 1000000) + "",
      otpEntered: "",
      otpVerified: false
    })
  }

  const otpVerified = (e) => {
    if (otp.otpEntered === otp.otpGenerated) {
      setopenSnack({        
          show:true,
          message:"OTP Verified",
          severity:"success"     
      })
      setOtp({
        otpGenerated: "#",
        otpEntered: "",
        otpVerified: true
      })
      setshowNewPass(true)
    return
    }
    setopenSnack({        
      show:true,
      message:"OTP Wrong! Please try again.",
      severity:"error"          
  })
  }

  const PasswordChange = () => {
    setopenSnack({        
      show:true,
      message:"Password Changed",
      severity:"success"     
  })
  setTimeout(() => {
    
    Navigate('/Login')
  }, 1000);
}

 return (
    <>
    <SnackbarAlert {...openSnack} setopenSnack={(val)=>{
      setopenSnack((prev)=>{
        return {...prev,'show':val}
      })
    }}/>
    <div className='Login '>
      <div className="L-box container FP-box">

        <div className="L-section-secondary">
          <div className="L-Login-bg">
            <div className="images">
              <div className="section">
                <MyCard classes={'animateLeftCard1'} data={{ name: 'Ishan', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png', body: 'Awesome App ❤️', details: 'Saved a lot of money. Keep in your pocket and save a lot.' }} />

              </div>
              <div className="section">
                <MyCard classes={'animateLeftCard2'} data={{ name: 'Shivam', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4UxJO_flRww7WXHnIwuxAeX0kgkqlviKhgPzgg2hHdXW0YjdQucZegboJdxBAoFyD40&usqp=CAU', body: 'My Favorite App ❤️', details: 'It gets more delicious when you sign up and use the App.' }} />

              </div>
              <div className="section">
                <div className="textbox">
                  <h5>Maximum Rewards</h5>
                  <p>Check out our social medias handles to get coupons and discount. BEST DEALS GUARANTEED.</p>
                  <div className="icons">
                    <img
                      src={InstagramIcon}
                      alt={InstagramIcon}
                      srcSet={InstagramIcon}
                      style={{ padding: '5px', borderRadius: '50%', backgroundColor: '#fff' }}
                      className='animateZoom L-Image1 animateLeftIcons'
                    />
                    <img
                      src={TwitterIcon}
                      alt={TwitterIcon}
                      srcSet={TwitterIcon}
                      style={{ width: '50px', padding: '5px', borderRadius: '50%', backgroundColor: '#fff' }}
                      className='animateZoom L-Image2 animateLeftIcons'
                    />
                    <img
                      src={FacebookIcon}
                      alt={FacebookIcon}
                      srcSet={FacebookIcon}
                      style={{ width: '50px', padding: '5px', borderRadius: '50%', backgroundColor: '#fff' }}
                      className='animateZoom L-Image3 animateLeftIcons'
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="L-section-primary">
          <i className='bx bxl-xing animateZoom'></i>
          <h3>Forgot Password</h3>
          <p>Dont worry we are just by your side.</p>

          <Divider sx={{ marginBottom: '30px' }} />

          <div className="L-emailLogin">



            <TextField
              id="outlined-password-input"
              label="Emai Id"
              type="text"
              sx={{ marginBottom: '20px', width: '70%' }}
              autoComplete="off"
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handlePWChange()
                }
              }}
              autoFocus={true}
            />


            {Login.isLoggedin && <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="false"
              sx={{ marginBottom: '20px', width: '70%' }}
              autoFocus={true}
            />}


            {otp.otpGenerated !== "" && otp.otpGenerated !== "#" && otp.otpGenerated}


            {otp.otpGenerated !== "" && otp.otpGenerated !== "#" && <TextField
              id="outlined-password-input"
              label="OTP"
              type="text"
              autoComplete="false"
              onChange={(e) => {
                setOtp((prev) => {
                  return { ...prev, 'otpEntered': e.target.value }
                })
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  otpVerified()
                }
              }}
              value={otp.otpEntered}
              autoFocus={true}
              sx={{ marginBottom: '20px', width: '70%' }}
            />}


            {showNewPass && <TextField
              id="outlined-password-input"
              label="Enter New Password"
              type="password"
              autoComplete="false"
              autoFocus={true}
              sx={{ marginBottom: '20px', width: '70%' }}
            />}


            {showNewPass && <TextField
              id="outlined-password-input"
              label="Confirm New Password"
              type="password"
              autoComplete="false"
              sx={{ marginBottom: '20px', width: '70%' }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  PasswordChange()
                }
              }}
            />}


            {otp.otpGenerated === "" && otp.otpGenerated !== "#" &&

              <Button variant="contained"
                sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
                onClick={handlePWChange}
              >Reset My Password</Button>}


            {otp.otpGenerated !== "" && otp.otpGenerated !== "#" && <Button variant="contained"
              sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
              onClick={otpVerified}
            >Verify OTP</Button>}



            {otp.otpVerified && <Button variant="contained"
              sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
              onClick={PasswordChange}

            >Submit</Button>}


          </div>
          <Divider sx={{ marginBottom: '30px' }} />

        </div>
      </div>

    </div>
    </>
  )

  



}

export default ForgotPassword




