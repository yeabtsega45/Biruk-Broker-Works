import React from "react";
import "./Property.css";

function Property({ image, type, location, area, rooms, price }) {
  return (
    <div className="property">
      {/* <ImageSlider={ImS} /> */}
      <img src={image} className="images" alt="house" />
      <p className="large">{type}</p>
      <p>{location}</p>
      <p>{area}</p>
      <p>{rooms}</p>
      <p className="large">{price}</p>
    </div>
  );
}

export default Property;
