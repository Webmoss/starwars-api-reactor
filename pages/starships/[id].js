import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import BG from '../../public/images/twinkle.gif';
const styling = {
  backgroundImage: `url('${BG}')`,
  backgroundRepeat:"repeat",
  height:"100%"
}


const Starships = props => (
  <Layout>
    <Head>
      <title>{props.starship.name} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.starship.name}</h1>
      <p>
        Starship Class: {props.starship.starship_class}<br></br>
        Crew: {props.starship.crew}<br></br>
        Manufacturer: {props.starship.manufacturer}<br></br>
        Model: {props.starship.model}<br></br>
        Length: {props.starship.length}<br></br>
        Cargo Capacity: {props.starship.cargo_capacity}<br></br>
        Passengers: {props.starship.passengers}<br></br>
        Consumables: {props.starship.consumables}<br></br>
        Cost In Credits: {props.starship.cost_in_credits}<br></br>
        MGLT: {props.starship.MGLT}<br></br>
        Hyperdrive Rating: {props.starship.hyperdrive_rating}<br></br>
        {/* Arrays */}
        {/* Pilots: {props.starship.pilots}
        Films: {props.starship.films} */}
      </p>
    </main>
  </Layout>
);

Starships.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/starships/${id}`);
  const starship = await res.json();
  return { starship };
};

export default Starships;
