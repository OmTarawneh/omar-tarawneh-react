import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5cb85c;
  color: white;
  margin-top: 1rem;
  padding: 1rem;
  height: 10rem;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  padding-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
`;
