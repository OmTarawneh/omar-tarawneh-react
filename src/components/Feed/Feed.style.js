import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  align-self: flex-start;
  .unactive {
    color: gray;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  color: #5cb85c;
  list-style: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-bottom: 0.1rem #5cb85c solid;
  cursor: pointer;
`;
