import React from 'react';
import { Wrapper, Title, Paragraph } from './Banner.style';
/**
 * Banner component that will return the main banner for the home page.
 *
 * @component
 * @example
 * return (
 *  <Banner />
 * )
 */
function Banner() {
  return (
    <Wrapper>
      <Title>conduit</Title>
      <Paragraph>A place to share your knowledge</Paragraph>
    </Wrapper>
  );
}

export default Banner;
