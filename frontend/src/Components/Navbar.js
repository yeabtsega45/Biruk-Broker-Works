import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "./Navbar.css";
// import logo from "../Assets/logo3.png";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  // const [show, setShow] = useState(true);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cars">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/lands">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/rentalhouses">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div className="header">
    //   <div className="logo">
    //     <img src={logo} alt="logo" />
    //   </div>
    //   <nav
    //     className={show ? "nav-links-computer" : "nav-links-mobile"}
    //     onClick={() => setShow(true)}
    //   >
    //     <NavLink to="/">Houses</NavLink>
    //     <NavLink to="/cars">Cars</NavLink>
    //     <NavLink to="/lands">Lands</NavLink>
    //     <NavLink to="/rentalhouses">Rental_Houses</NavLink>
    //   </nav>
    //   <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
    //     {show ? <MenuIcon /> : <CloseIcon />}
    //   </button>
    // </div>
  );
}

export default Navbar;
