import React from 'react';
import Feed from './Feeds/Feed';
import Head from '../Helper/Head';


function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com o feed de fotos" />
      <Feed />
    </section>
  )
}

export default Home;