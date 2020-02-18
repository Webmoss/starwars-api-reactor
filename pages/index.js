import React from 'react';
import Head from 'next/head';
import '../public/sass/style.global.sass';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  return (
    <div className="app">
      <Head>
        <title>Star Wars API Reactor - BUIDL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="main">
        <Layout>
          <h1>Star Wars API Reactor</h1>
        </Layout>
      </main>
    </div>
  )
};

Index.getInitialProps = async function() {
  
  const res = await fetch('https://swapi.co/api/films');
  const data = await res.json();

  return {
    films: data.results.map(result => result)
  };
};

export default Index;
