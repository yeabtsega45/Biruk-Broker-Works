import React, { useState, useEffect } from "react";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a className="navbar-brand" href="/">
          <EmojiTransportationIcon style={{ fontSize: "60px" }} />{" "}
          <strong>Biruk Broker Works</strong>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/houses">
                <strong>Houses</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cars">
                <strong>Cars</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lands">
                <strong>Lands</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rentalhouses">
                <strong>Rental Houses</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
