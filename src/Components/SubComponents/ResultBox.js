import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ResultBox = (props) => {
  return (
    <div className="resultBox">

      <div className="data phoneImage" >
        <img src={props.data.image} alt={props.data.name} style={{height:'100%', width:'auto',  justifyContent:'center'}}/>
      </div>
      <div className="data phoneDetails">
        <h4>{props.data.name}</h4>
        <div className="reviews">
          <span>
            <p className="ratingandreviews">{props.data.rating} Ratings & {props.data.criticRating} critic reviews</p>
            <div className="stars">
              {props.data.star}<i class='bx bxs-star' ></i>
            </div>
          </span>
        </div>
        <div className="details">
          <ul>
            {props.data.highlights.map((listItem,index)=>{
              return( <li key={index}>{listItem}</li>)
            })}
          </ul>
        </div>
      </div>
      <div className="data Price">
      <FavoriteBorderIcon/>
      </div>
    </div>
  );
};

export default ResultBox;
