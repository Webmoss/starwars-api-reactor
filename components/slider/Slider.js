import React from 'react';
import "./styles.sass";
import slide from "../../public/images/star-wars-banner.jpg";

const Slider = () => (
  <div className="slider">
    <p>This is Slider content</p>
    <style jsx="true">{`
      .slider {
        background: url('public/images/star-wars-banner.jpg') no-repeat;
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </div>
);

export default Slider;
