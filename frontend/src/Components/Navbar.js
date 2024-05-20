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
    <nav
      className="navbar navbar-expand-sm navbar-dark fixed-top z-index-99"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <EmojiTransportationIcon style={{ fontSize: "60px" }} />{" "}
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
              <a
                className="nav-link"
                aria-current="page"
                href="/"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/houses"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
                <strong>Houses</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/cars"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
                <strong>Cars</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/lands"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
                <strong>Lands</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/rentalhouses"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
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
