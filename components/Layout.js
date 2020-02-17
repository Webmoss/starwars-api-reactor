import React from 'react';
import '../public/sass/style.global.sass'
import Header from './header/Header';
import Slider from './slider/Slider';
import Footer from './footer/Footer';

const Layout = props => (
  <div className="main-container">
    <Header />
    <Slider />
    { props.children }
    <Footer />
  </div>
);

export default Layout;
