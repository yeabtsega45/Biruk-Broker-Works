import React, { useState } from "react";
import "./Nav.css";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <EmojiTransportationIcon style={{ fontSize: "60px" }} />{" "}
        <strong>Biruk Broker Works</strong>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/houses">Houses</a>
        <a href="/cars">Cars</a>
        <a href="/lands">Lands</a>
        <a href="/rentalhouses">Rental Houses</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Nav;
