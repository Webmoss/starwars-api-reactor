import React from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';


const Film = props => (
  <Layout>
    <h1>{props.film.title}</h1>
    <p>
      Director: {props.film.director}
      Producers: {props.film.producer}
      Release Date: {props.film.release_date}
    </p>
    <p>{props.film.opening_crawl.replace(/<[/]?[pb]>/g, '')}</p>
    {props.film.image ? <img src={props.film.image.medium} /> : null}
  </Layout>
);

Film.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/films/${id}`);
  const film = await res.json();

  console.log(`Fetched Films: ${film.name}`);

  return { film };
};

export default Film;
