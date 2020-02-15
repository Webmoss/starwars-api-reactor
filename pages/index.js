import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <p>Hello Star Wars Fans!</p>
      
      <br></br>
      
      <div className="navigation">
        <ul>
          <li><Link href="/about"><a title="About Page">About Page</a></Link></li>
          <li><Link href="/films"><a title="Films Page">Films</a></Link></li>
          <li><Link href="/people"><a title="People Page">People</a></Link></li>
          <li><Link href="/films"><a title="Films Page">Films</a></Link></li>
          <li><Link href="/species"><a title="Species Page">Species</a></Link></li>
          <li><Link href="/starships"><a title="Starships Page">Starships</a></Link></li>
          <li><Link href="/vehicles"><a title="Vehicles Page">Vehicles</a></Link></li>
          <li><Link href="/planets"><a title="Planets Page">Planets</a></Link></li>
        </ul>
      </div>
      
    </div>
  );
}
