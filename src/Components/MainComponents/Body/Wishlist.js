import React, { useEffect } from "react";
import { useLogin,useMisc } from "../../../Contexts/Context";
import ResultBox from "../../SubComponents/ResultBox";
import { resultsData } from "../../../Assets/Data/Data";
import { useNavigate } from "react-router";
import { Divider } from "@mui/material";
import "../../../Assets/CSS/Wishlist.css";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShopIcon from '@mui/icons-material/Shop';
import { Button } from "@mui/material";
const Wishlist = () => {
  const Login = useLogin();
  const {setLastLocation}=useMisc()
  const Navigate = useNavigate();

  function showWishlist() {
    return Login.wishlist.map((data, index) => {
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
    });
  }

  function noWishlist(){
    return (
      <div className="noWishlist d-flex flex-column justify-content-center align-items-center">
        <HeartBrokenIcon sx={{fontSize:'100px',color:'#c44bc0'}}/>
        <p>Uhh.. Ohh! No items Added to wishlist. Lets find Something for You</p>
        <Button 
        endIcon={<ShopIcon/>}
        onClick={()=>{
          Navigate('/')
        }}
        variant="contained">Lets See some Catalogues</Button>

      </div>
    )
  }

  useEffect(() => {
    setLastLocation("/Wishlist");
  });
  return (
    <>
      <div className="WishList container">
        <div className="W-results">
          <div className="W-section2">
            {Login.wishlist.length === 0 ? (
              noWishlist()
            ) : (
              showWishlist()
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
