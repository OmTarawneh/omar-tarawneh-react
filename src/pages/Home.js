import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Blog from 'components/Blog';
import { Wrapper } from './Home.style';

/**
 * Home page which wrap all the component needed for the home page.
 *
 * @component
 */
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
