import React from "react";
import "./Contact.css";

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
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>

          <h2>Email</h2>
          <p>
            <a href="mailto:info@realestateapp.com">info@realestateapp.com</a>
          </p>

          <h2>Address</h2>
          <p>
            123 Real Estate Ave,
            <br />
            Suite 456,
            <br />
            City, State, 78901
          </p>

          <h2>Follow Us</h2>
          <div className="social-links">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
