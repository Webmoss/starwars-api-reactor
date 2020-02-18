import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Vehicles() {
  return (
    <Layout>
      <Head>
        <title>Vehicles - Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>This is the Star Wars Vehicles page</p>
    </Layout>
  );
}
