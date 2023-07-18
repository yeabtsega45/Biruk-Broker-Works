import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./Footer.css";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import logo from "../Assets/logo3.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="logo" />
        {/* <h2>BIRUK BROKER WORKS</h2> */}
      </div>
      <div className="footer-container">
        <div>
          <div className="info">
            <PersonIcon />
            <p>Biruk Sisay</p>
          </div>
          <div className="info">
            <PhoneIcon />
            <a href="tel:+251963137715">+251963137715</a>
          </div>
          <div className="info">
            <LocationOnIcon />
            <p>Addis Ababa, Yeka, Kotebe</p>
          </div>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/">
            <FacebookIcon className="icon" />
          </a>
          <a href="https://mail.google.com">
            <EmailIcon className="icon" />
          </a>
          <a href="https://telegram.org/">
            <TelegramIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
