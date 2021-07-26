import styled from 'styled-components';

export default styled.input`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  min-width: 35vw;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  &:focus {
    outline: none;
    border: 0.06rem solid blue;
    border-radius: 0.3rem;
  }
`;
