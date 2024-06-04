import React from "react";
import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question about our
          services, need assistance, or want to provide feedback, feel free to
          reach out to us through the following channels:
        </p>

        <div className="contact-details">
          <h2>Phone</h2>
          <p>
            <a href="tel:+251963137715">+251963137715</a>
          </p>

          <h2>Email</h2>
          <p>
            <a href="mailto:BirukSisay@gmail.com">BirukSisay@gmail.com</a>
          </p>

          <h2>Address</h2>
          <p>
            Kotebe, Mesalemiya,
            <br />
            Yeka,
            <br />
            Addis Ababa
          </p>

          <h2>Follow Us</h2>
          <div className="social-links">
            <a
              href="https://facebook.com/BirukSisay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icon" />
            </a>
            <a
              href="https://mail.google.com/BirukSisay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="icon" />
            </a>
            <a
              href="https://telegram.org/BirukSisay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
