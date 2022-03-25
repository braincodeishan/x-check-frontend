import React, { useContext, useState, useEffect } from 'react'
import { LoginContext } from "../../../Contexts/Context";
import ResultBox from "../../SubComponents/ResultBox";
import { resultsData } from "../../../Assets/Data/Data";
import { useNavigate } from "react-router";
import { Divider } from "@mui/material";
import '../../../Assets/CSS/Wishlist.css'
const Wishlist = () => {
  const Login = useContext(LoginContext);
  useEffect(() => {
    Login.setLastLocation('/Wishlist')
  })
  const Navigate = useNavigate();
  return (
    <>
      <div className="WishList container">
          <div className="W-results">
          <div className="W-section2">
        {Login.wishlist.map((data, index) => {
          const data1 = resultsData[data];
          return (
            <>
              <ResultBox
                key={index}
                data={data1}
                handleMoreDetailsFunction={(id) => {
                  Navigate(`/PhoneDetails/${id}`);
                }}
              />
              <Divider className="W-mdivider" key={index + "1"} />
            </>
          );
        })}
      </div>
      </div>
      </div>
    </>
  );
};

export default Wishlist;
