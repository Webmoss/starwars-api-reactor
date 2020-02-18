import React from 'react';
import Head from 'next/head';
import '../public/sass/style.global.sass'
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Films = props => (
  <Layout>
    <Head>
        <title>Films - Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h2>Star Wars Films</h2>
    <ul>
      {props.films.map(film => (
        <li key={film.episode_id}>
          <Link href="/films/[episode_id]" as={`/films/${film.episode_id}`}>
            <a>{film.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Films.getInitialProps = async function() {
  
  const res = await fetch('https://swapi.co/api/films');
  const data = await res.json();

  console.log("Data", data.results);
  console.log(`Films data Fetched. Count: ${data.count}`);

  return {
    films: data.results.map(result => result)
  };
};

export default Films;
