import React from "react";
import HeroImage from "../Components/HeroImage";
import "./PageContainer.css";

function RentalHouses() {
  return (
    <>
      <HeroImage title="Rental houses" />
      <div className="no-property">No properties found.</div>
    </>
  );
}

export default RentalHouses;
