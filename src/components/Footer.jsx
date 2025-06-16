import React from "react";
import "../style/Footer.css";
import icons from "../assets/icons.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="column-brand">
          <h3>FLYGLOBE</h3>
          <p>
            FlyGlobe is more than just a flight booking app; it’s your one-stop
            shop for seamless travel experiences.
          </p>
        </div>
        <div className="column">
          <h4>About Us</h4>
          <ul>
            <li>Promo</li>
            <li>Help</li>
            <li>Order</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="column">
          <h4>Resources</h4>
          <ul>
            <li>Documentation</li>
            <li>Carrier</li>
            <li>Work With Us</li>
            <li>Blog & News</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className="column">
          <h4>Legal</h4>
          <ul>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className="column contact">
          <h4>Contact Us</h4>
          <p>flyglobe@gmail.com</p>
          <p>+12 345 678 09</p>
          <p>Singapore, Indonesia</p>
         
          <div>
            <img src={icons} alt="" />
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2025 FlyBritoin All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
