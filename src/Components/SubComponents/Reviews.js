import React from "react";

const Reviews = (props) => {
  return (
    <>
      <div>
        <b>{props.subTitle}</b>
        <div className="stars">
          {props.star}
          <i class="bx bxs-star"></i>
        </div>
      </div>

      <div>{props.description}</div>
      <div style={{ textAlign: "right" }}>{props.name}</div>
      <div>
        -------------------------------------------------------------------
      </div>
    </>
  );
};

export default Reviews;
