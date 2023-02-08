import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  return (
    <div>
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>BIRUK BROKER WORKS</h2>
      </div>
      <div className="navandsearch">
        <nav>
          <Link to="/">Houses</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/lands">Lands</Link>
          <Link to="/rentalhouses">Rental Houses</Link>
          <button>
            <CloseIcon />
          </button>
        </nav>
        <button>
          <MenuIcon />
        </button>
        <div className="search">
          <input placeholder="search" type="text" />
          <SearchIcon className="searchicon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
