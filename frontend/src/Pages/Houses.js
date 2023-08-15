import React from "react";
import "./Houses.css";
import Property from "../Components/Property";
import HeroImage from "../Components/HeroImage";
// import PropertyData from "../PropertyData";

function Houses() {
  return (
    <>
      <HeroImage title="Houses" />
      <div className="properties">
        {/* {PropertyData.map((property) => (
          <Property data={property} />
        ))} */}
        <Property />
      </div>
    </>
  );
}

export default Houses;
