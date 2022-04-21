import React, { useState, useContext,useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { LoginContext } from '../../Contexts/Context'
const ResultBox = (props) => {
  const Login = useContext(LoginContext)
  const [isChecked,setIsChecked]=useState(()=>{
    return Login.comparePhones.includes(props.data.id.toString())
  })
  const [heart,setHeart]=useState(()=>{
    return Login.wishlist.includes(props.data.id.toString())
  })

  useEffect(() => {
    setIsChecked(()=>{
      return Login.comparePhones.includes(props.data.id.toString())
    })
  }, [Login.comparePhones])
  




  const handleWishlistChange = (id) => {
    setHeart(!heart);
    if(!heart){
      Login.setWishlist((prev)=>{
        return [...prev,id.toString()]
      })
    }else{
      Login.setWishlist((prev)=>{
        return prev.filter((data)=>{
          return (id.toString())!==data
          
          })
        })
    }
  }


  const handleCheckbox = (id,isSelected) => {
    if(Login.comparePhones.length>=3 &&isSelected){
      alert("Already 3 Phones added! Cannot add more phones to compare")
      return;
    }
    let idx=id+"";
    setIsChecked(isSelected)
    if(isSelected){
    Login.setComparePhones((prev)=>{
      return [...prev,idx]
    })
    }else{
      Login.setComparePhones((prev)=>{
        return prev.filter((data)=>{
          return idx!==data
          
          })
        })
      }
    }
 
  
  return (
    <div className="resultBox">

      <div className="data phoneImage cursorPointer" onClick={() => { props.handleMoreDetailsFunction(props.data.id) }}>
        <img src={props.data.image} alt={props.data.name} style={{ height: 'auto', width: 'auto', justifyContent: 'center' }} />
      </div>
      <div className="data phoneDetails cursorPointer" onClick={() => { props.handleMoreDetailsFunction(props.data.id) }}>
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
            onClick={()=>handleWishlistChange(props.data.id)}
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
            onClick={()=>handleWishlistChange(props.data.id)}
          />}

        <div className="priceSearch" style={{ marginTop: '40px' }}>
          <h2>Rs. {props.data.price}</h2>
          <p style={{ fontSize: '11px' }}>This is the best price found. Dont forget to check the discounts.</p>

          <FormGroup>
            <FormControlLabel control={
            <Checkbox 
            default 
            checked={isChecked}
              
            onChange={(e) => { handleCheckbox(props.data.id,e.target.checked) }} />} label="Add to compare" />

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
