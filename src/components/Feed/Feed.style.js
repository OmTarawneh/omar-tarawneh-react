import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  align-self: flex-start;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  /* color: #5cb85c; */
  color: ${(props) => (props.color ? '#5cb85c' : '#b7b7c7')};
  list-style: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-bottom: 0.1rem ${(props) => (props.color ? '#5cb85c' : '#b7b7c7')}
    solid;
  cursor: pointer;
`;
