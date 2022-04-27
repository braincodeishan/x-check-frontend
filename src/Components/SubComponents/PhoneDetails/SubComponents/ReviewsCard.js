import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

const showImage = (name) => {
  return (
    <CardMedia
      component="img"
      // height="194"
      image={name}
      alt={name}
      sx={{ width: "auto", height: "200px", marginLeft: '15px' }}
    />
  );


};

const ReviewsCard = (props) => {

  const [isliked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(props.likes)

  const handleLikes = async (update) => {
    try {
      const result = await axios({
        method: 'POST',
        url: process.env.REACT_APP_DOMAIN_NAME + '/reviews/addLikes',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          id: props._id,
          likes: likes,
          update: update
        }
      })

      if (result.status === 201) {
        console.log(result.data)
        if (update === 1) {
          setLikes(likes + 1);
          setIsLiked(true)
        } else {
          setLikes(likes - 1);
          setIsLiked(false)
        }
      } else {


      }


    } catch (err) {

    }
  }


  return (
    <>
      <div className="R-cards">
        <Card sx={{ maxWidth: '700px', marginTop: "10px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {props.name[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.name}
            subheader={props.date}
          />
          <div className="R-stars">
            <div className="stars">
              {props.stars}
              <i className="bx bxs-star"></i>
            </div>
            <h5>{props.title}</h5>
          </div>
          {props.image && showImage(props.image)}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {isliked ?
                <FavoriteIcon
                sx={{color: '#e62568'}}
                  onClick={() => handleLikes(-1)}
                /> :
                <FavoriteIcon
                  onClick={() => handleLikes(1)}
                />

              }
              
            </IconButton>{likes + " Likes"}
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ReviewsCard;
