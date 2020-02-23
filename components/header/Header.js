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
          <Link href={{ pathname: '/films'}}>
            <a title="Films Page">Films</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/people'}}>
            <a title="People Page">People</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/planets'}}>
            <a title="Planets Page">Planets</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/species'}}>
            <a title="Species Page">Species</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/starships'}}>
            <a title="Starships Page">Starships</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/vehicles'}}>
            <a title="Vehicles Page">Vehicles</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
