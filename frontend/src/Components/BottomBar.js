import React from "react";
import "./BottomBar.css";

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
          <p>Email: info@realestate.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
            <a href="#">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
