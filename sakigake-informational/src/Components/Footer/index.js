import React from 'react';
import './style.css';

import { IoLogoFacebook,IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
function Footer() {
  return (
    <div className="footer-container" id="footer-container">
      <br />
      <div className="footer-icons" id="footer-icons">
        <div className="footer">
          <div className='logos'>
            <img src="./images/logo2.svg" alt="" className='logs' width="140" height="253" />
            <h1 id="footer-logo">MzaziConnect</h1>
          </div>
          {/* <p className='navigate'>Navigating CBC Success Together</p> */}
        </div>
        <br />
        <div className="information" id="footer-information">
          <span>VISIT US</span>
          <ul>
            <li>616 Korongo Road</li>
            <li>Off Ndege Road, Karen</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
        <br />
        <div className="CONTACT US" id="footer-contact">
          <span>CONTACT US</span>
          <ul>
            <li className='c-li'>mzaziconnect@gmail.com</li>
            <li className='c-li'>0111 365595</li>
            <div className='iconz'>
              <IoLogoFacebook className='icon' data-testid="facebook-icon" />
              <IoLogoTwitter className='icon' data-testid="twitter-icon" />
              <IoLogoInstagram className='icon' data-testid="instagram-icon" />
              <IoLogoLinkedin className='icon' data-testid="linkedin-icon" />
            </div>
          </ul>
        </div>
      </div>
      <br />
      <div className="f-down">
      </div>
      <hr className="footer-hr" />
      <div className="footer-p">
        <p>&copy; 2023 MzaziConnect</p>
      </div>
    </div>
  );
}
 export default Footer;