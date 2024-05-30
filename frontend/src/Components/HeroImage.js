import React from "react";
import "./HeroImage.css";
import heroImage from "../Assets/HeroImage.jpg";

function HeroImage(props) {
  return (
    <div className="hero">
      <img src={heroImage} alt="frontpage" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default HeroImage;
