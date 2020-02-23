import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import '../public/sass/style.global.sass'
import Layout from '../components/Layout';
import Link from 'next/link';
import BG from '../public/images/twinkle.gif';
const styling = {
  backgroundImage: `url('${BG}')`,
  backgroundRepeat:"repeat",
  height:"100%"
}

const Films = films => (
  
  <Layout>
    <Head>
        <title>Films - Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="main" style={styling}>
      <h2>Star Wars Films</h2>
      <div className="films-intro">
        <ul>
          {films.map(film => {
            
            // Load static images based on the title of the film                
            let imgURL = `/images/${film.title.split(' ').join('_')}.png`;
            
            return <li key={`film__${film.episodeId}`} className="film-title">
              <Link href="/films/[episode_id]" as={`/films/${film.episodeId}`}>
                <a title={film.title}><img src={imgURL} alt={film.title} className="film-img"/></a>
              </Link>
              <Link href="/films/[episode_id]" as={`/films/${film.episodeId}`}>
                <a>{film.title}</a>
              </Link> 
              <br></br>
              <span className="film-detail">Director: {film.director}</span><br></br>
              <span className="film-detail">Release Date: {film.releaseDate}</span><br></br>
              {/* Arrays */}
              {/* <span className="film-detail">Producers: {film.producer}</span><br></br><br></br>
              <span className="director">Planets: {film.planets}</span><br></br>
              <span className="director">Species: {film.species}</span><br></br><br></br>
              <span className="director">Starships: {film.starships}</span><br></br>
              <span className="director">Vehicles: {film.vehicles}</span><br></br> */}
            </li>;
          })}
        </ul>
      </div>
    </main>
  </Layout>
);

export default connect(state => state)(Films);
