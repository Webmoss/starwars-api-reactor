import React from 'react';
import '../public/sass/style.global.sass'
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Star Wars API Reactor</h1>
  </Layout>
);

Index.getInitialProps = async function() {
  
  const res = await fetch('https://swapi.co/api/films');
  const data = await res.json();

  console.log("Data", data.results);
  console.log(`Films data Fetched. Count: ${data.count}`);

  return {
    films: data.results.map(result => result)
  };
};

export default Index;
