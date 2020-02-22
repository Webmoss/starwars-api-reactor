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


const Planets = props => (
  <Layout>
    <Head>
      <title>{props.planet.name} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.planet.name}</h1>
      <p>
        Climate: {props.planet.climate}<br></br>
        Diameter: {props.planet.diameter}<br></br>
        Gravity: {props.planet.gravity}<br></br>
        Orbital Period: {props.planet.orbital_period}<br></br>
        Population: {props.planet.population}<br></br>
        Rotation Period: {props.planet.rotation_period}<br></br>
        Surface Water: {props.planet.surface_water}<br></br>
        Terrain: {props.planet.terrain}<br></br>
        {/* Arrays */}
        {/* Residents: {props.planet.people}<br></br>
        Films: {props.planet.films}<br></br> */}
      </p>
    </main>
  </Layout>
);

Planets.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/planets/${id}`);
  const planet = await res.json();
  return { planet };
};

export default Planets;
