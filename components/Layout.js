import React from 'react';
import Header from './header/Header';
import Slider from './slider/Slider';
import Footer from './footer/Footer';

const layoutStyle = {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: '#000000'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <Slider />
    { props.children }
    <Footer />
  </div>
);

export default Layout;
