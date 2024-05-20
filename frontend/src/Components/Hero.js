import React from "react";
import "./Hero.css";
import heroImage from "../Assets/HeroImage.jpg";

function Hero({ title, subtitle }) {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
