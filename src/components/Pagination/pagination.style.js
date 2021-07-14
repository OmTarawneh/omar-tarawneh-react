import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  p {
    color: #b7b7c7;
  }
`;

export const Button = styled.button`
  /* flex: 1 0 5%; */
  color: #5cb85c;
  background-color: white;
  border: 0.1rem #b7b7c7 solid;
  border-radius: 0.2rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #5cb85c;
  }
`;
