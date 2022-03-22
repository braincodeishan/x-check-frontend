import React, { useState, useContext } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import {LoginContext} from '../../Contexts/Context'
const ResultBox = (props) => {
  const Login=useContext(LoginContext)
  const [heart, setHeart] = useState(false)
  const handleWishlistChange = () => {
    setHeart(!heart);
  }

  const handleCheckbox=(id)=>{
    const newVal=[];
    let i=0;
    for(i; i<4;i++){
    if(Login.user.comparePhones[i]===''){
      newVal[i]=id+"";
    }else {
      newVal[i]=Login.user.comparePhones[i]
    }

    }
  
    Login.setUser((prev)=>{
      return {...prev, ['comparePhones']:newVal}
    })
  }
  return (
    <div className="resultBox">

      <div className="data phoneImage cursor-pointer" onClick={()=>{props.handleMoreDetailsFunction(props.data.id)}}>
        <img src={props.data.image} alt={props.data.name} style={{ height: 'auto', width: 'auto', justifyContent: 'center' }} />
      </div>
      <div className="data phoneDetails cursor-pointer" onClick={()=>{props.handleMoreDetailsFunction(props.data.id)}}>
        <h4>{props.data.name}</h4>
        <div className="reviews">
          <span>
            <p className="ratingandreviews">{props.data.rating} Ratings & {props.data.criticRating} critic reviews</p>
            <div className="stars">
              {props.data.star}<i className='bx bxs-star' ></i>
            </div>
          </span>
        </div>
        <div className="details">
          <ul>
            {props.data.highlights.map((listItem, index) => {
              return (<li key={index}>{listItem}</li>)
            })}
          </ul>

        </div>

      </div>
      <div className="data Price" style={{ position: 'relative' }}>
        {heart ?
          <FavoriteIcon
            sx={{
              position: 'absolute',
              top: '0px',
              right: '10px',
              cursor: 'pointer',
              color: '#e62568',
              borderRadius: '50%',
              fontSize: '30px',
              padding: '5px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
            onClick={handleWishlistChange}
          /> :
          <FavoriteBorderIcon
            sx={{
              position: 'absolute',
              top: '0px',
              right: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
              fontSize: '30px',
              padding: '5px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
            }}
            onClick={handleWishlistChange}
          />}

        <div className="priceSearch" style={{ marginTop: '40px' }}>
          <h2>Rs. {props.data.price}</h2>
          <p style={{fontSize:'11px'}}>This is the best price found. Dont forget to check the discounts.</p>
          
          <FormGroup>
            <FormControlLabel control={<Checkbox default onClick={()=>{handleCheckbox(props.data.id)}}/>} label="Add to compare" />
            
          </FormGroup>
          <Button variant="contained" color="success">
            Buy Now!
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ResultBox;
