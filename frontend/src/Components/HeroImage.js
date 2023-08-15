import React from "react";
import img11 from "../Assets/frontpage2.webp";
import "./HeroImage.css";

function HeroImage(props) {
  return (
    <div className="hero">
      <img src={img11} alt="frontpage" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default HeroImage;
