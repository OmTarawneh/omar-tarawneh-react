import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Paragraph = styled.p`
  cursor: pointer;
  color: #5cb85c;
  margin-top: 1.25rem;
  &:hover {
    text-decoration: 0.0625rem #5cb85c underline;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  padding: 0.75rem 1.5rem;
  font-weight: 400;
  color: white;
  background-color: #5cb85c;
  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  &:active {
    border: 0.0925rem solid black;
  }
`;
