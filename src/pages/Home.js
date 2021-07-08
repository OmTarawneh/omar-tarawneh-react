import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Blog from 'components/Blog';
import Tags from 'components/Tags';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Blog />
        <Tags />
      </main>
    </>
  );
}

export default Home;
