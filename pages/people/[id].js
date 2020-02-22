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


const People = props => (
  <Layout>
    <Head>
      <title>{props.people.name} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.people.name}</h1>
      <p>
        Birth Year: {props.people.birth_year}<br></br>
        Eye Color: {props.people.eye_color}<br></br>
        Gender: {props.people.gender}<br></br>
        Hair Color: {props.people.hair_color}<br></br>
        Height: {props.people.height}<br></br>
        Homeworld: {props.people.homeworld}<br></br>
        Mass: {props.people.mass}<br></br>
        Skin Color: {props.people.skin_color}<br></br>
        {/* Arrays */}
        {/* Species: {props.people.species}
        Starships: {props.people.starships}
        Vehicles: {props.people.vehicles}
        Films: {props.people.films} */}
      </p>
    </main>
  </Layout>
);

People.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/people/${id}`);
  const people = await res.json();
  return { people };
};

export default People;
