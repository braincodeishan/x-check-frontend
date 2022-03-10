import React from 'react'
import '../../../Assets/CSS/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Cross Check</h6>
            <p className="text-justify">XCheck.com <i>makes it SIMPLE </i> to find your BEST gadget within your price brackets. So no more procastinating and doing research when its already done for you. Just select your range, Add to cart and checkout. Best discounts are also made available on all shopping sites.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="#">Mobiles</Link></li>
              <li><Link to="#">Laptops</Link></li>
              <li><Link to="#">Appliances</Link></li>
              <li><Link to="#">Other Items</Link></li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Contribute</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by  
         <Link to="#"> CrossCheck</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link to="#" className="facebook" ><i class='bx bxl-facebook-circle'></i></Link></li>
              <li><Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link></li>
              <li><Link to="#" className="dribbble"><i className="bx bxl-whatsapp"></i></Link></li>
              <li><Link to="#" className="linkedin"><i className="bx bxl-youtube"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer