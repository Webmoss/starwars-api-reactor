import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Planets() {
  return (
    <Layout>
      <Head>
        <title>Planets - Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>This is the Star Wars Planets page</p>
    </Layout>
  );
}
