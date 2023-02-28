import React from "react";
import "./Property.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Property({
  image,
  image2,
  image3,
  type,
  location,
  area,
  rooms,
  price,
}) {
  return (
    <div className="property">
      {/* <ImageSlider={ImS} /> */}
      <Carousel>
        <img src={image} className="images" alt="house" />
        <img src={image2} className="images" alt="house" />
        <img src={image3} className="images" alt="house" />
      </Carousel>
      <p className="large">{type}</p>
      <p className="small">{location}</p>
      <p className="small">{area}</p>
      <p className="small">{rooms}</p>
      <p className="large">{price}</p>
    </div>
  );
}

export default Property;
