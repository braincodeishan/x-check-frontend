import React from "react";
import { styled } from "@mui/material/styles";
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

const showImage = (name, key) => {
  if (key) {
    return (
      <CardMedia
        component="img"
        // height="194"
        image={name}
        alt={name}
        sx={{ width: "200px", height: "auto" }}
      />
    );
  } else {
    return (
      <CardMedia
        component="img"
        height="194"
        image={name}
        alt={name}
        sx={{ width: "auto", height: "200px" }}
      />
    );
  }
};

const Reviews = (props) => {
  return (
    <>
    <div className="R-cards">
      <Card sx={{maxWidth:'700px', marginTop: "10px" }}>
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
          subheader="September 14, 2016"
        />
        <div className="R-stars">
        <div className="stars">
          {props.star}
          <i class="bx bxs-star"></i>
          </div>
          <h5>{props.subTitle}</h5>
        </div>
        {props.image && showImage(props.image, null)}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      </div>
    </>
  );
};

export default Reviews;
