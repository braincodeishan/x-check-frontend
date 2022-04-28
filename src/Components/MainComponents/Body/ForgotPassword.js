import React, { useState, useEffect } from 'react'
import { Button, Divider } from '@mui/material'
import TextField from '@mui/material/TextField';

import MyCard from '../../SubComponents/MyCard'
import axios from 'axios';
import InstagramIcon from '../../../Assets/Icons/instagram.webp';
import TwitterIcon from '../../../Assets/Icons/twitter.png';
import FacebookIcon from '../../../Assets/Icons/facebook.webp';
import { useLogin, useMisc } from '../../../Contexts/Context'
import { useNavigate, useParams } from 'react-router';

import '../../../Assets/CSS/Login.css'

const ForgotPassword = () => {
  const Navigate = useNavigate();
  const id = useParams('uuid')
  const [uid, setUid] = useState(false);
  const Login = useLogin();
  const { setLastLocation, alertSuccess, alertDanger, setLoading } = useMisc();
  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  
  useEffect(() => {
    setLastLocation('/Forgot-Passwords')
    
    if (id.uuid !== "Verify") {
      setUid(true);
    }
  }, [])

  

  const handlePWChange = async () => {
    setLoading(true);
    const result = await axios({
      method: 'POST',
      url: process.env.REACT_APP_DOMAIN_NAME + '/User/forgotPassword',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        email: email,
      }
    })
    setLoading(false);
    if (result.status === 200) {
      alertSuccess('Mail sent to the mail ID, Kindly check your email');
      setTimeout(() => {
        
        Navigate('/')

      }, 3000)
    } else {
      alertDanger("Something went wrong!!");
    }
  }




  const PasswordChange = async() => {
    try{
      setLoading(true)
      const result= await axios({
        method:'POST',
        url:process.env.REACT_APP_DOMAIN_NAME + "/User/PasswordChangeData",
        headers:{
          'content-type':'application/json',
          
        },
        data:{
          uid:id.uuid,
          password:password
        }
      })
      setLoading(false);
      if(result.status===200){
        
        alertSuccess("Password Changed")
      }else{
        alertDanger("Something went Wrong!!")
      }
  
    }catch(err){

    }
    
  }

  return (
    <>

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



              {!uid && !Login.isLoggedin && <TextField
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus={true}
              />}


              {Login.isLoggedin && <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="false"
                sx={{ marginBottom: '20px', width: '70%' }}
                autoFocus={true}
              />}


              {uid && <TextField
                id="outlined-password-input"
                label="Enter New Password"
                type="password"
                autoComplete="false"
                autoFocus={true}
                sx={{ marginBottom: '20px', width: '70%' }}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />}


              {uid && <TextField
                id="outlined-password-input"
                label="Confirm New Password"
                type="password"
                autoComplete="false"
                sx={{ marginBottom: '20px', width: '70%' }}
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    PasswordChange()
                  }
                }}
              />}




              {!uid && <Button variant="contained"
                sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
                onClick={handlePWChange}
              >Reset My Password</Button>}


              {uid && <Button variant="contained"
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




