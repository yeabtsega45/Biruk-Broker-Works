import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
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
