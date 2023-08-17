import React from "react";
import HeroImage from "../Components/HeroImage";
import "./PageContainer.css";
import Car from "../Components/Car";

function Cars() {
  return (
    <>
      <HeroImage title="Cars" />
      <div className="properties">
        <Car />
      </div>
    </>
  );
}

export default Cars;
