import React, { useState, useEffect } from "react";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("#navbarNav");
    nav.classList.toggle("show", isOpen);
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top z-index-99">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <EmojiTransportationIcon style={{ fontSize: "40px" }} />{" "}
          <strong>Biruk Broker Works</strong>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
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
                <strong>Rental_Houses</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
