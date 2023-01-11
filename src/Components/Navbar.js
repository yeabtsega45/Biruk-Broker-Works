import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>Biruk Broker Works</h2>
      </div>
      <nav>
        <Link to="/">Houses</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/lands">Lands</Link>
        <Link to="/rentalhouses">Rental Houses</Link>
      </nav>
    </div>
  );
}

export default Navbar;
