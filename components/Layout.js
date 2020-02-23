import React from 'react';
import '../public/sass/style.global.sass'
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = props => (
  <div className="main-container">
    <Header />
    { props.children }
    <Footer />
  </div>
);

export default Layout;
