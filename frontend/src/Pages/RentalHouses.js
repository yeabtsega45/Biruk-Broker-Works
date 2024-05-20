import React from "react";
import HeroImage from "../Components/HeroImage";
import "./PageContainer.css";

function RentalHouses() {
  return (
    <>
      <HeroImage title="Rental houses" />
      <h3 className="no-property">No properties found.</h3>
    </>
  );
}

export default RentalHouses;
