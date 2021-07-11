import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Blog from 'components/Blog';
import Tags from 'components/Tags';
import { Wrapper } from './Home.style';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        <Blog />
      </Wrapper>
    </>
  );
}

export default Home;
