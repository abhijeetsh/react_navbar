import React from 'react'
import "./Footer.css"
import fb_logo from "../../assets/facebook_icon.png"
import tw_logo from "../../assets/twitter_icon.png"
import link_logo from "../../assets/linkedin_icon.png"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Sharan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem numquam tempora vel reiciendis, 
              repellat fuga animi mollitia non harum!</p>
              <div className="footer-social-icons">
                <img src={fb_logo} alt="" />
                <img src={tw_logo} alt="" />
                <img src={link_logo} alt="" />
              </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91 678907890</li>
          <li>contact@sharan.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 ©  Sharan.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
