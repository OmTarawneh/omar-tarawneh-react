import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Blog from 'components/Blog';
import { Wrapper, GlobalStyle } from 'styles/global.styles';

/**
 * Home page which wrap all the component needed for the home page.
 *
 * @component
 *
 * @return {JSX.Element}
 */
function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Wrapper>
        <Blog />
      </Wrapper>
    </>
  );
}

export default Home;
