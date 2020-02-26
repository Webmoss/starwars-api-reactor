import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Apollo  Client
import { useQuery } from '@apollo/react-hooks';
import FILMS_QUERY from '../graphql/films.query';
// Redux Store
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadFilms } from '../store/films/action';
// 3rd Party
import moment from "moment"
// Look & Feel
import '../public/sass/style.global.sass';
import Layout from '../components/Layout';
import BG from '../public/images/twinkle.gif';
import formatIt from '../utils/formatIt';
const styling = {
  backgroundImage: `url('${BG}')`,
  backgroundRepeat:"repeat",
  height:"100%"
}

const Index = (props) => {

  console.log("Props: ", props)

  // Create a query hook for Films
  const { data, loading, error } = useQuery(FILMS_QUERY);

  // Error Handling for useQuery to GraphQl API
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
    // Safety Net
    return "<p>Error:" + JSON.stringify(error) +"</p>";
  }
  
  // This can be handled better in UI
  if (loading) {
    return "<p>Loading...</p>";
  }

  console.log("Data:", data.films)

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
                  <span className="film-detail"><strong>Director:</strong> { film.director }</span><br></br>
                  <span className="film-detail"><strong>Released:</strong> { moment(film.releaseDate).format('DD/MM/YYYY') }</span><br></br>
                  <p className="film-crawl">{ film.openingCrawl.replace(/<[/]?[pb]>/g, '') }</p>
                  
                  {/* WIP */}
                  {/* <span className="film-detail">Producers: { formatIt(film.producer) }</span><br></br>
                  <span className="film-detail">Planets: { formatIt(film.planets) }</span><br></br>
                  <span className="film-detail">Species: { formatIt(film.species) }</span><br></br>
                  <span className="film-detail">Starships: { formatIt(film.starships) }</span><br></br>
                  <span className="film-detail">Vehicles: { formatIt(film.vehicles) }</span><br></br> */}
                </li>;
              })}
            </ul>
          </div>

        </Layout>
      </main>
    </div>
  )
};

// Load the films if isServer side request
Index.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(loadFilms(isServer))
  return { isServer }
}

const mapStateToProps = (state, props) => {
  return {
    films: loadFilms(state.films, props)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadFilms: bindActionCreators(loadFilms, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
