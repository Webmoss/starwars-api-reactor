import React from 'react';
import Header from './header/Header';
import Slider from './slider/Slider';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

const layoutStyle = {
  margin: 0,
  padding: 20,
  width: '100%',
  backgroundColor: '#000000'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <Slider />
    <Sidebar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
