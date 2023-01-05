import React from "react";
import "./Property.css";

function Property({ image, type, location, area, rooms, price }) {
  return (
    <div className="property">
      <img src={image} className="images" alt="house" />
      <p>{type}</p>
      <p>{location}</p>
      <p>{area}</p>
      <p>{rooms}</p>
      <p>{price}</p>
    </div>
  );
}

export default Property;
