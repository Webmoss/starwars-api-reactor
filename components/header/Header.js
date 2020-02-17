import React from 'react';
import Link from 'next/link';
import "./styles.sass";

const Header = () => (
  <div className="header">
    <div className="logo">
      <Link href={{ pathname: '/' }}>
        <a title="Home"><img src="/images/star-wars-logo.png" alt="Star Wars Logo"/></a>
      </Link>
    </div>
    <div className="navigation">
      <ul>
        <li>
          <Link href={{ pathname: '/' }}>
            <a title="Home">Home</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/about' }}>
            <a title="About Star Wars">About</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/films', query: { id: undefined } }}>
            <a title="Films Page">Films</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/people', query: { id: undefined } }}>
            <a title="People Page">People</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/films', query: { id: undefined } }}>
            <a title="Films Page">Films</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/species', query: { id: undefined } }}>
            <a title="Species Page">Species</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/starships', query: { id: undefined } }}>
            <a title="Starships Page">Starships</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/vehicles', query: { id: undefined } }}>
            <a title="Vehicles Page">Vehicles</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/planets', query: { id: undefined } }}>
            <a title="Planets Page">Planets</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
