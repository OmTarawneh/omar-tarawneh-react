import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Titillium Web', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;
