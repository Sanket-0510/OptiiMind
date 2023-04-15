import React, { useState } from "react";
import "../Styles/slider.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className={`slider-slide slide-${activeIndex}`}>
          <img src="https://via.placeholder.com/300" alt="Slide 1" />
          <h3>Slide 1</h3>
          <p>Slide 1 content here</p>
        </div>
        <div className={`slider-slide slide-${activeIndex + 1}`}>
          <img src="https://via.placeholder.com/300" alt="Slide 2" />
          <h3>Slide 2</h3>
          <p>Slide 2 content here</p>
        </div>
        <div className={`slider-slide slide-${activeIndex + 2}`}>
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
          <h3>Slide 3</h3>
          <p>Slide 3 content here</p>
        </div>
      </div>
      <div className="slider-controls">
        <button className="slider-control" onClick={handlePrev}>
          Prev
        </button>
        <button className="slider-control" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
