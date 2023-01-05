import React from "react";
import "./Houses.css";
import img1 from "../Assets/frontpage.jpg";
import Property from "../Components/Property";

function Houses() {
  return (
    <div className="houses">
      <img src={img1} alt="frontpage" />
      <h1>Houses</h1>
      <div className="properties">
        <Property
          image={img1}
          type="apartment"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img1}
          type="villa"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img1}
          type="G+1"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img1}
          type="town house"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img1}
          type="G+2"
          location="Bole Wolosefer Addis Ababa"
          area="300 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img1}
          type="G+3"
          location="Bole Wolosefer Addis Ababa"
          area="3350 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
      </div>
    </div>
  );
}

export default Houses;
