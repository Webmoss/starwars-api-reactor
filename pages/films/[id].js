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


const Film = props => (
  <Layout>
    <Head>
      <title>{props.film.title} - Star Wars Films</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h1>{props.film.title}</h1>
      <p className="film-crawl">{props.film.opening_crawl.replace(/<[/]?[pb]>/g, '')}</p>
      <p>
        Director: {props.film.director}<br></br>
        Producers: {props.film.producer}<br></br>
        Release Date: {props.film.releaseDate}<br></br>
        Planets: {props.film.planets.join(', ')}<br></br>
        Species: {props.film.species.join(', ')}<br></br><br></br>
        Starships: {props.film.starships.join(', ')}<br></br>
        Vehicles: {props.film.vehicles.join(', ')}<br></br>
      </p>
    </main>
  </Layout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/films/${id}`);
  const film = await res.json();
  return { film };
};

export default Film;
