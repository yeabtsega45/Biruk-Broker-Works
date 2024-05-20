import React from "react";
import "./BottomBar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneIcon from "@material-ui/icons/Phone";

function BottomBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our company and team.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div>
            <PhoneIcon />
            <a href="tel:+251963137715">+251963137715</a>
          </div>
          <p>
            Email:{""}
            <a href="mailto:BirukSisay@gmail.com">BirukSisay@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.facebook.com/">
              <FacebookIcon className="icon" />
            </a>
            <a href="https://mail.google.com">
              <EmailIcon className="icon" />
            </a>
            <a href="https://telegram.org/">
              <TelegramIcon className="icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Biruk Broker Works. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
