import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Houses.css";
import img1 from "../Assets/frontpage.jpg";
import img11 from "../Assets/frontpage2.webp";
import Property from "../Components/Property";
// import ImageSlider from "../Components/ImageSlider";
import img2 from "../Assets/house1.1.jpg";
import img3 from "../Assets/house1.2.jpg";
import img4 from "../Assets/house1.3.jpg";
// import img5 from "../Assets/house2.jpg";
import img6 from "../Assets/house3.jpg";
import img7 from "../Assets/g+1.jpg";
import img8 from "../Assets/g+2.jpg";
import img9 from "../Assets/g+3.jpg";

function Houses() {
  // const slides = [{ img2 }, { img3 }, { img4 }];
  return (
    <div className="houses">
      <img src={img11} alt="frontpage" />
      <h1>Houses</h1>
      {/* <div className="slidercontainer">
        <ImageSlider slides={slides} />
      </div> */}
      <div className="properties">
        {/* <Carousel></Carousel> */}
        <Property
          image={img2}
          image2={img3}
          image3={img4}
          type="town house"
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
          image={img7}
          type="G+1"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img6}
          type="town house"
          location="Bole Wolosefer Addis Ababa"
          area="150 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img8}
          type="G+2"
          location="Bole Wolosefer Addis Ababa"
          area="300 m2"
          rooms="beds:3, bath:1"
          price="2,500,000 br"
        />
        <Property
          image={img9}
          type="apartment"
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
