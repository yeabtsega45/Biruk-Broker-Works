import React from "react";
import { Link } from "react-router-dom";
// import { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
// import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [show, setShow] = useState(false);

  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("resposive_nav");
  // };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>BIRUK BROKER WORKS</h2>
      </div>
      {/* <div className="navandsearch"> */}
      <nav
        className={show ? "nav-links" : "nav-links-mobile"}
        onClick={() => setShow(false)}
      >
        <Link to="/">Houses</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/lands">Lands</Link>
        <Link to="/rentalhouses">Rental Houses</Link>
      </nav>
      <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </button>
      {/* <div className="search">
          <input placeholder="search" type="text" />
          <SearchIcon className="searchicon" />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Navbar;
