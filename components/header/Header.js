import React from 'react';
import Link from 'next/link';

const linkStyle = {
  color: '#ffe81f',
  marginRight: 15,

};

const Header = () => (
  <div className="header">

    <div className="logo">
      <Link href="/">
        <img src="/images/star-wars-logo.png" alt="Star Wars Logo"/>
      </Link>
    </div>

    <div className="navigation">
      <ul>
        <li>
          <Link href={{ pathname: '/about' }}>
            <a title="About Star Wars" style={linkStyle}>About</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/films', query: { id: undefined } }}>
            <a title="Films Page" style={linkStyle}>Films</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/people', query: { id: undefined } }}>
            <a title="People Page" style={linkStyle}>People</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/films', query: { id: undefined } }}>
            <a title="Films Page" style={linkStyle}>Films</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/species', query: { id: undefined } }}>
            <a title="Species Page" style={linkStyle}>Species</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/starships', query: { id: undefined } }}>
            <a title="Starships Page" style={linkStyle}>Starships</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/vehicles', query: { id: undefined } }}>
            <a title="Vehicles Page" style={linkStyle}>Vehicles</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/planets', query: { id: undefined } }}>
            <a title="Planets Page" style={linkStyle}>Planets</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
