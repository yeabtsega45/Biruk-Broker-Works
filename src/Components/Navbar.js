import React from "react";
import { NavLink } from "react-router-dom";
// import { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo3.png";
// import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [show, setShow] = useState(true);

  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("resposive_nav");
  // };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        {/* <h2>BIRUK BROKER WORKS</h2> */}
      </div>
      {/* <div className="navandsearch"> */}
      <nav
        className={show ? "nav-links" : "nav-links-mobile"}
        onClick={() => setShow(true)}
      >
        <NavLink to="/" activeClassName="active-link">
          Houses
        </NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/lands">Lands</NavLink>
        <NavLink to="/rentalhouses">Rental Houses</NavLink>
      </nav>
      <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
        {show ? <MenuIcon /> : <CloseIcon />}
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
