import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
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
  );
}

export default Footer;
