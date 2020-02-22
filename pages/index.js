import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import FILMS_QUERY from '../graphql/films.query';
import '../public/sass/style.global.sass';
import Layout from '../components/Layout';
import BG from '../public/images/twinkle.gif';

const styling = {
  backgroundImage: `url('${BG}')`,
  backgroundRepeat:"repeat",
  height:"100%"
}

const Index = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (error) {
    if (typeof error === 'string') { return error; }
    if (error && error.message) { return error.message.replace(/GraphQL Error:/gi, ''); }

    // Handle GraphQL Errors
    if (error && error.graphQLErrors && error.graphQLErrors.errors[0]) {
      return error.graphQLErrors.errors[0].message.replace(/GraphQL Error:/gi, '');
    }

    // Handle Request Errors
    if (error && error.networkError && error.networkError.statusCode !== 200) {
      switch(error.networkError.statusCode) {
        case 400:
          return 'Error 400 :: Not Found';
        case 500:
          return 'Error 500 : Server Error';
        case 403:
          return 'Error 403: Unauthorized';
        default:
          return `${error.networkError.statusCode} :: An error Occurred`;
      }
    }
    return "<p>Error:" + JSON.stringify(error) +"</p>";
  }
  
  // This can be handled better in UI
  if (loading) {
    return "<p>Loading...</p>";
  }

  console.log("Data:", data)

  return (
    <div className="app">
      <Head>
        <title>Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" style={styling}>
        <Layout>
          <h1>Star Wars API Reactor</h1>
          <div className="films-intro">
            <ul>
              {data.films.map(film => {
                
                let imgURL = `/images/${film.title.split(' ').join('_')}.png`;
                console.log("imgURL:", imgURL)
                
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
        </Layout>
      </main>
    </div>
  )
};

export default Index;
