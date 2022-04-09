import React from 'react'
import { Button, Divider } from '@mui/material'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import MyCard from '../../SubComponents/MyCard'

import GoogleIcon from '../../../Assets/Icons/google.png';
import InstagramIcon from '../../../Assets/Icons/instagram.webp';
import TwitterIcon from '../../../Assets/Icons/twitter.png';
import FacebookIcon from '../../../Assets/Icons/facebook.webp';
import {useLogin,useMisc} from '../../../Contexts/Context'
import { useNavigate } from 'react-router';
import '../../../Assets/CSS/Login.css'

const Login = () => {
const Navigate=useNavigate();
const Login = useLogin();
  const {LastLocation}=useMisc()
const handleSignin=()=>{
  Login.setUser({
    username:"braincodeishan",
    JWT:"",
    name:"Ishan",
    avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  });
  Login.setCart(['1','3'])
  Login.setWishlist(['2'])
  Login.setComparePhones(['0','1'])
  Login.changelogin(true);
Navigate(LastLocation);
}
  return (
    <div className='Login '>
      <div className="L-box container">
        <div className="L-section-primary">
          <i className='bx bxl-xing animateZoom'></i>
          <h3>Login</h3>
          <p>Login to get the best juice out of the pulp.</p>
          <div className="L-emailLogin">
            <Button
              variant="outlined"
              sx={{ margin: '20px', width: '70%' }}
            >
              {<img src={GoogleIcon} alt={GoogleIcon} srcSet={GoogleIcon} style={{ width: '25px', marginRight: '10px' }} />}
              Sign in with Google
            </Button>
          </div>
          <Divider sx={{ marginBottom: '30px' }} />

          <div className="L-emailLogin">

            <TextField
              id="outlined-password-input"
              label="Username / Email Id"
              type="text"
              sx={{ marginBottom: '20px', width: '70%' }}
              autoComplete="off"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="false"
              sx={{ marginBottom: '20px', width: '70%' }}
            />
            <div className="L-RememberMe" style={{ marginBottom: '20px', width: '70%' }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remeber Me" />
              <Link to="/Forgot-Passwords" style={{ textAlign: 'right' }}>Forgot Password?</Link>
            </div>
            <Button variant="contained"
              sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
              onClick={handleSignin}
            >SIGN IN</Button>
          </div>
          <Divider sx={{ marginBottom: '30px' }} />
          <h6>Not registered yet <Link to="/Register">Create an Account</Link> here.</h6>
        </div>
        <div className="L-section-secondary">
          <div className="L-Login-bg">
            <div className="images">
              <div className="section">
                <MyCard classes={'animateLeftCard1'} data={{name:'Ishan', avatar:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png', body:'Awesome App ❤️', details:'Saved a lot of money. Keep in your pocket and save a lot.'}}/>

              </div>
              <div className="section">
                <MyCard classes={'animateLeftCard2'} data={{name:'Shivam', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4UxJO_flRww7WXHnIwuxAeX0kgkqlviKhgPzgg2hHdXW0YjdQucZegboJdxBAoFyD40&usqp=CAU'  ,body:'My Favorite App ❤️', details:'It gets more delicious when you sign up and use the App.'}}/>

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
      </div>

    </div>
  )
}

export default Login