import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo3.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [show, setShow] = useState(true);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav
        className={show ? "nav-links-computer" : "nav-links-mobile"}
        onClick={() => setShow(true)}
      >
        <NavLink to="/">Houses</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/lands">Lands</NavLink>
        <NavLink to="/rentalhouses">Rental_Houses</NavLink>
      </nav>
      <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
        {show ? <MenuIcon /> : <CloseIcon />}
      </button>
    </div>
  );
}

export default Navbar;
