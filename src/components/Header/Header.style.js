import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 1rem;
  margin-top: 1rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    padding: 1rem;
    list-style: none;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: #b7b7c7;
  }
  a:hover {
    color: black;
  }
`;

export const Title = styled.h1`
  color: #5cb85c;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
`;
