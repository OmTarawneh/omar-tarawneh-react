import styled from 'styled-components';

export const Box = styled.div`
  border-top: 0.01rem solid #b7b7c7;
  min-width: 50vw;
  padding: 1rem;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  p {
    color: #b7b7c7;
    font-size: 0.8rem;
    padding: 0.1rem 0.1rem 0.1rem 0rem;
  }
  a {
    color: #5cb85c;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .iconify {
    color: #5cb85c;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #5cb85c;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 0.1rem;
  width: fit-content;
  border: 0.1rem #5cb85c solid;
  cursor: pointer;
  &:hover {
    background-color: #5cb85c;
    color: white;
    .iconify {
      color: white;
    }
  }
`;
export const Paragraph = styled.p`
  color: #b7b7c7;
  font-size: 1rem;
  padding-top: 0.3rem;
`;
export const Body = styled.div`
  padding: 1rem 1rem 1rem 0rem;
`;

export const Image = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    font-size: 0.6rem;
    list-style: none;
    li {
      border: 0.1rem solid #b7b7c7;
      border-radius: 1rem;
      padding: 0.2rem;
      margin: 0.5rem;
    }
    a {
      text-decoration: none;
      color: #b7b7c7;
    }
  }
  p {
    font-size: 0.7rem;
    text-align: center;
    vertical-align: middle;
    line-height: 1.75rem;
  }
`;
