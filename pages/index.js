import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header/Header.js';
import Slider from '../components/slider/Slider.js';
import Sidebar from '../components/sidebar/Sidebar.js';
import Footer from '../components/footer/Footer.js';

export default function Index() {
  return (
    <div>

      <Header />
      <Slider />

      <p>Hello Star Wars Fans!</p>

      <Sidebar />
      <Footer />  
    </div>
  );
}
