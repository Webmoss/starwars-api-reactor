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


const Species = props => (
  <Layout>
    <Head>
      <title>{props.specie.name} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.specie.name}</h1>
      <p>
        Classification: {props.specie.classification}<br></br>
        Designation: {props.specie.designation}<br></br>
        Language: {props.specie.language}<br></br>
        Average Height: {props.specie.average_height}<br></br>
        Average Lifespan: {props.specie.average_lifespan}<br></br>
        Eye Colors: {props.specie.eye_colors}<br></br>
        Hair Colors: {props.specie.hair_colors}<br></br>
        Skin Colors: {props.specie.skin_colors}<br></br>
        People: {props.specie.people.join(', ')}
        Films: {props.specie.films.join(', ')}
      </p>
    </main>
  </Layout>
);

Species.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/species/${id}`);
  const specie = await res.json();
  return { specie };
};

export default Species;
