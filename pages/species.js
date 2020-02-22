import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import BG from '../public/images/twinkle.gif';
const styling = {
  backgroundImage: `url('${BG}')`,
  backgroundRepeat:"repeat",
  height:"100%"
}

export default function Species() {
  return (
    <Layout>
      <Head>
        <title>Species - Star Wars API Reactor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="main" style={styling}>
        <p>This is the Star Wars Species page</p>
      </main>
    </Layout>
  );
}
