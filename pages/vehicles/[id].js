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


const Vehicles = props => (
  <Layout>
    <Head>
      <title>{props.vehicle.name} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.vehicle.name}</h1>
      <p>
        Vehicle Class: {props.vehicle.vehicle_class}<br></br>
        Crew: {props.vehicle.crew}<br></br>
        Manufacturer: {props.vehicle.manufacturer}<br></br>
        Model: {props.vehicle.model}<br></br>
        Length: {props.vehicle.length}<br></br>
        Cargo Capacity: {props.vehicle.cargo_capacity}<br></br>
        Passengers: {props.vehicle.passengers}<br></br>
        Consumables: {props.vehicle.consumables}<br></br>
        Cost In Credits: {props.vehicle.cost_in_credits}<br></br>
        Max Atmosphering Speed: {props.vehicle.max_atmosphering_speed}<br></br>
        {/* Arrays */}
        {/* Pilots: {props.vehicle.pilots}<br></br>
        Film: {props.vehicle.films}<br></br> */}
      </p>
    </main>
  </Layout>
);

Vehicles.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/vehicles/${id}`);
  const vehicle = await res.json();
  return { vehicle };
};

export default Vehicles;
