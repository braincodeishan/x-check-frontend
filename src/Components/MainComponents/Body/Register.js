import React from 'react'
import { Button, Divider } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import MyCard from '../../SubComponents/MyCard'

import GoogleIcon from '../../../Assets/Icons/google.png';
import InstagramIcon from '../../../Assets/Icons/instagram.webp';
import TwitterIcon from '../../../Assets/Icons/twitter.png';
import FacebookIcon from '../../../Assets/Icons/facebook.webp';

import { useNavigate } from 'react-router';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import '../../../Assets/CSS/Login.css'

const Register = () => {
  const Navigate = useNavigate();
  
  const handleSignin = () => {
    Navigate('/Login');
  }

  return (
    <div className='Login '>
      <div className="L-box container">
        <div className="L-section-primary">
          <i className='bx bxl-xing animateZoom'></i>
          <h3>Resister</h3>
          <p>First step where the Magic Begins. <AutoFixHighIcon /></p>
          <div className="L-emailLogin">
            <Button
              variant="outlined"
              sx={{ margin: '20px', width: '70%' }}
            >
              {<img src={GoogleIcon} alt={GoogleIcon} srcSet={GoogleIcon} style={{ width: '25px', marginRight: '10px' }} />}
              Sign up with Google
            </Button>
          </div>
          <Divider sx={{ marginBottom: '30px' }} />

          <div className="L-emailLogin">
            <TextField
              id="outlined-password-input"
              label="First Name"
              type="text"
              sx={{ marginBottom: '20px', width: '70%' }}
              autoComplete="off"
            />
            <TextField
              id="outlined-password-input"
              label="Last Name"
              type="text"
              sx={{ marginBottom: '20px', width: '70%' }}
              autoComplete="off"
            />
            <TextField
              id="outlined-password-input"
              label="Emai Id"
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
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="false"
              sx={{ marginBottom: '20px', width: '70%' }}
            />
            
            <Button variant="contained"
              sx={{ backgroundColor: '#3521b5', marginBottom: '20px', width: '70%' }}
              onClick={handleSignin}
            >SIGN UP</Button>
          </div>
          <Divider sx={{ marginBottom: '30px' }} />
          <h6>Already have an account? <Link to="/Login">Sign in</Link> here.</h6>
        </div>
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
      </div>

    </div>
  )
}

export default Register