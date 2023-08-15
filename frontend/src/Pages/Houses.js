import React from "react";
import "./Houses.css";
import Property from "../Components/Property";
import HeroImage from "../Components/HeroImage";

function Houses() {
  return (
    <>
      <HeroImage title="Houses" />
      <div className="properties">
        <Property />
      </div>
    </>
  );
}

export default Houses;
