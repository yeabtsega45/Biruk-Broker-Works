import React from "react";
import "./Houses.css";
import img11 from "../Assets/frontpage2.webp";
import Property from "../Components/Property";

function Houses() {
  return (
    <div className="houses">
      <img src={img11} alt="frontpage" />
      <h1>Houses</h1>
      <div className="properties">
        <Property />
      </div>
    </div>
  );
}

export default Houses;
