import React from 'react';
import "./styles.sass";
import slide from "../../public/images/star-wars-banner.jpg";

const bg = {
  backgroundImage: `url(${slide})`,
  backgroundPosition: 'center',
  backgroundZize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const Slider = () => (
  <div className="slider" styles={{bg}}>
    <p>This is Slider content</p>
  </div>
);

export default Slider;
