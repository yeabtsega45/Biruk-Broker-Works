import React from "react";
import "./Houses.css";
import img11 from "../Assets/frontpage2.webp";
import Property from "../Components/Property";
import PropertyData from "../PropertyData";

function Houses() {
  return (
    <div className="houses">
      <img src={img11} alt="frontpage" />
      <h1>Houses</h1>
      <div className="properties">
        {PropertyData.map((Property) => (
          <Property data={Property} />
        ))}
      </div>
    </div>
  );
}

export default Houses;
