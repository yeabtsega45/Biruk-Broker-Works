import React, { useState } from "react";
import "./ImageSlider.css";

function ImageSlider(slides) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slider">
      <div className="leftarrow" onClick={goToPrevious}></div>
      <div className="rightarrow" onClick={goToNext}></div>
      <div className="slide"></div>
    </div>
  );
}

export default ImageSlider;
