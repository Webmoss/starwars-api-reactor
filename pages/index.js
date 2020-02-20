import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import FILMS_QUERY from '../graphql/films.query';
import '../public/sass/style.global.sass';
import Layout from '../components/Layout';

const Index = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (error) {
    // if (typeof error === 'string') { return error; }
    // if (error && error.message) { return error.message.replace(/GraphQL Error:/gi, ''); }

    // // Handle GraphQL Errors
    // if (error && error.graphQLErrors && error.graphQLErrors.errors[0]) {
    //   return error.graphQLErrors.errors[0].message.replace(/GraphQL Error:/gi, '');
    // }

    // // Handle Request Errors
    // if (error && error.networkError && error.networkError.statusCode !== 200) {
    //   switch(error.networkError.statusCode) {
    //     case 400:
    //       return 'Error 400 :: Not Found';
    //     case 500:
    //       return 'Error 500 : Server Error';
    //     case 403:
    //       return 'Error 403: Unauthorized';
    //     default:
    //       return `${error.networkError.statusCode} :: An error Occurred`;
    //   }
    // }

    return "<p>Error:" + JSON.stringify(error) +"</p>";
  }
  

  console.log("Loading:", loading)
  // This can be handled better in UI
  if (loading) {
    return "<p>Loading...</p>";
  }

  console.log("Data:", data)
  return (
    <div className="app">
      <Head>
        <title>Star Wars API Reactor - BUIDL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Layout>
          <h1>Star Wars API Reactor</h1>
          <div class="films-intros">
            <ul>
              {data.films.map(film => {
                return <li key={`film__${film.id}`}>{film.name}</li>;
              })}
            </ul>
          </div>
        </Layout>
      </main>
    </div>
  )
};

// Index.getInitialProps = async function() {
  
//   const res = await fetch('https://swapi.co/api/films');
//   const data = await res.json();

//   return {
//     films: data.results.map(result => result)
//   };
// };

export default Index;
